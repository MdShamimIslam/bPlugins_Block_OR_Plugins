import React, { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay, ImDownload } from "../../../utils/icons";
import "./OneHaashPlayer.css";

const OneHaashPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioTrack, setAudioTrack] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const track = audioRef.current;
    setAudioTrack(track);

    if (track) {
      track.addEventListener("loadedmetadata", () => {
        const timeStamps = parseTime(track);
        const currentTimeElement = document.querySelector(".time.current");
        const tillEndElement = document.querySelector(".time.till-end");

        if (currentTimeElement && tillEndElement) {
          currentTimeElement.innerHTML = timeStamps[0];
          tillEndElement.innerHTML = timeStamps[2];
        }
      });

      track.addEventListener("timeupdate", () => {
        const position = (100 / track.duration) * track.currentTime;
        const fillBar = document.querySelector(".fill-bar");
        if (fillBar) {
          fillBar.style.width = `${position}%`;
        }

        const timeStamps = parseTime(track);
        const currentTimeElement = document.querySelector(".time.current");
        const tillEndElement = document.querySelector(".time.till-end");

        if (currentTimeElement && tillEndElement) {
          currentTimeElement.innerHTML = timeStamps[0];
          tillEndElement.innerHTML = timeStamps[1];
        }

        const seekInput = document.getElementById("seek");
        if (seekInput) {
          seekInput.max = track.duration;
          seekInput.value = track.currentTime;
        }
      });
    }

    return () => {
      if (track) {
        track.removeEventListener("loadedmetadata", () => {});
        track.removeEventListener("timeupdate", () => {});
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioTrack?.pause();
      // setIsPlaying(false);
    } else {
      audioTrack?.play();
      // setIsPlaying(true);
    }
    setIsPlaying(!isPlaying);
  };

  function parseTime(audioTrack) {
    const current = audioTrack.currentTime;
    const duration = audioTrack.duration;
    const tillEnd = duration - current;

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${minutes}:${seconds}`;
    };

    return [
      formatTime(current),
      `-${formatTime(tillEnd)}`,
      formatTime(duration),
    ];
  }

  

  return (
    <div id="v-player">
      <audio
        ref={audioRef}
        id="audio-track"
        src="https://api.podcache.net/episodes/698d602a-a059-45dc-b42c-a2bdfde19922/stream.mp3"
        type="audio/mpeg"
        preload="metadata"
      ></audio>
      <div id="podcast-player">
        <div className="epidode-header">
          <p>OneHaas</p>
          <a
            className="episode-download"
            href="https://api.podcache.net/episodes/698d602a-a059-45dc-b42c-a2bdfde19922/stream.mp3"
          >
            <ImDownload className="fas fa-download" />
          </a>
        </div>
        <h3 className="episode-title"> The One Haas Experience</h3>
        <div className="wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 299 35"
          >
            <linearGradient
              id="PSgrad_0"
              x1="70.711%"
              x2="0%"
              y1="70.711%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgb(253, 181, 21)" stopOpacity={1} />
              <stop
                offset="100%"
                stopColor="rgb(251, 245, 236)"
                stopOpacity={1}
              />
            </linearGradient>
            <path
              className={isPlaying ? "wave-animation" : ""}
              fill="url(#PSgrad_0)"
              d="M450,40 L0,40 L0,17.3134328 C18.6666667,24.8756219 32,28.6567164 40,28.6567164 C52,28.6567164 71,5.97014925 86,5.97014925 C101,5.97014925 107,19.7014925 122,19.7014925 C137,19.7014925 143,0 156,0 C169,0 177,36.4179104 194,36.4179104 C211,36.4179104 208,20.2985075 220,20.2985075 C232,20.2985075 240,28.6567164 256,28.6567164 C272,28.6567164 276,5.97014925 289,5.97014925 C302,5.97014925 314,23.2835821 326,23.2835821 C338,23.2835821 354,10.7462687 365,10.7462687 C376,10.7462687 397,32.8358209 408,32.8358209 C415.333333,32.8358209 429.333333,27.6616915 450,17.3134328 L450,40 Z"
            />
          </svg>
        </div>
        <div id="controls">
          <div className="first-part control1">
            <div
              id="prev-15"
              onClick={() => {
                audioTrack.currentTime = Math.max(
                  0,
                  audioTrack.currentTime - 15
                );
              }}
            />

            {isPlaying ? (
              <span className="playpause" onClick={handlePlayPause}>
                <FaPause id="pause"/>
              </span>
            ) : (
              <span className="playpause" onClick={handlePlayPause}>
                <FaPlay id="play"/>
              </span>
            )}

            <div id="next-30" onClick={() => (audioTrack.currentTime += 30)} />
          </div>
          <div className="second-part">
            <div className="time current" />
            <div className="progress-bar">
              <div className="default-bar" />
              <div className="fill-bar" />
              <input type="range" id="seek" defaultValue={0} min={0} max="" />
            </div>
            <div className="time till-end" />
            <div id="speed" data-speed={1}>
              1x
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneHaashPlayer;
