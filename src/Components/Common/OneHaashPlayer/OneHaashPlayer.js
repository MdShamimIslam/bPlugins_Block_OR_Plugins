import React, { useState, useEffect, useRef } from "react";
import {
  FaOnePause,
  FaOnePlay,
  ImOneDownload,
  mdSkipNext,
  mdSkipPrevious,
} from "../../../utils/icons";

const OneHaashPlayer = ({ attributes }) => {
  const { options, style, audioProperties } = attributes;
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    isBackForIcon,
    isPrevNextIcon,
    isOldTime,
    isRunningTime,
    isPlaySpeed,
    isDownloadIcon,
  } = options.oneHaash;
  const { waveBg, haashInputRange } = style.oneHaashPlayer;
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioTrack, setAudioTrack] = useState(null);
  const audioRef = useRef(null);
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const track = audioRef.current;
    setAudioTrack(track);

    if (track && audioProperties[activeIndex]?.audio?.url) {
      track.src = audioProperties[activeIndex]?.audio?.url;
      track.load();
      track.playbackRate = playbackSpeed;

      track.addEventListener("loadedmetadata", () => {
        setDuration(track.duration);
      });

      track.addEventListener("timeupdate", () => {
        const position = (100 / track.duration) * track.currentTime;
        const fillBar = document.querySelector(".fill-bar");
        if (fillBar) {
          fillBar.style.width = `${position}%`;
        }

        setCurrentTime(track?.currentTime);
      });
    }

    return () => {
      if (track) {
        track.removeEventListener("loadedmetadata", () => { });
        track.removeEventListener("timeupdate", () => { });
      }
    };
  }, [
    playbackSpeed,
    activeIndex,
    isBackForIcon,
    isPrevNextIcon,
    isOldTime,
    isRunningTime,
    isPlaySpeed,
    isDownloadIcon,
  ]);

  const handleNext = () => {
    if (activeIndex < audioProperties?.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }

    if (audioTrack) {
      audioTrack.pause();
      audioTrack.currentTime = 0;
    }

    setTimeout(() => {
      if (isPlaying) {
        audioTrack?.play();
      }
    }, 0);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(audioProperties?.length - 1);
    }

    if (audioTrack) {
      audioTrack.pause();
      audioTrack.currentTime = 0;
    }

    setTimeout(() => {
      if (isPlaying) {
        audioTrack?.play();
      }
    }, 0);
  };

  const handlePlayPause = () => {
    if (audioProperties[activeIndex]?.audio?.url) {
      if (isPlaying) {
        audioTrack?.pause();
      } else {
        audioTrack?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSpeedClick = () => {
    setShowSpeedOptions(!showSpeedOptions);
  };

  const changeSpeed = (speed) => {
    setPlaybackSpeed(speed);
    if (audioTrack) {
      audioTrack.playbackRate = speed;
      if (isPlaying) {
        audioTrack.play();
      }
    }
    setShowSpeedOptions(false);
  };

  function parseTime(audioTrack) {
    if (!audioTrack || isNaN(audioTrack.duration))
      return ["00:00", "-00:00", "00:00"];

    const current = audioTrack.currentTime || 0;
    const duration = audioTrack.duration || 0;
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

  const playedPercentage = (currentTime / duration) * 100;


  const progressStyle = {
    background: `linear-gradient(to right, ${haashInputRange.progressColor} ${playedPercentage}%, ${haashInputRange.staticColor} ${playedPercentage}%)`,
  };

  return (
    <div id="v-player">
      <audio
        ref={audioRef}
        id="audio-track"
        src={audioProperties[activeIndex]?.audio?.url}
        type="audio/mpeg"
        preload="metadata"
      ></audio>
      <div id="podcast-player">
        <div className="epidode-header">
          <p>{audioProperties[activeIndex]?.artist}</p>
          {isDownloadIcon && (
            <a
              className="episode-download"
              href={audioProperties[activeIndex]?.audio?.url}
            >
              <ImOneDownload className="fas fa-download" />
            </a>
          )}
        </div>
        <h3 className="episode-title">
          {audioProperties[activeIndex]?.title}
        </h3>
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
              fill={waveBg}
              d="M450,40 L0,40 L0,17.3134328 C18.6666667,24.8756219 32,28.6567164 40,28.6567164 C52,28.6567164 71,5.97014925 86,5.97014925 C101,5.97014925 107,19.7014925 122,19.7014925 C137,19.7014925 143,0 156,0 C169,0 177,36.4179104 194,36.4179104 C211,36.4179104 208,20.2985075 220,20.2985075 C232,20.2985075 240,28.6567164 256,28.6567164 C272,28.6567164 276,5.97014925 289,5.97014925 C302,5.97014925 314,23.2835821 326,23.2835821 C338,23.2835821 354,10.7462687 365,10.7462687 C376,10.7462687 397,32.8358209 408,32.8358209 C415.333333,32.8358209 429.333333,27.6616915 450,17.3134328 L450,40 Z"
            />
          </svg>
        </div>
        <div id="controls" style={!isBackForIcon ? { marginTop: "17px", marginBottom: "17px" } : {}}>
          <div className="first-part control1">
            {isPrevNextIcon && (
              <div
                id="prev-15"
                onClick={() => {
                  audioTrack.currentTime = Math.max(
                    0,
                    audioTrack.currentTime - 15
                  );
                }}
              />
            )}

            <div />
            {isBackForIcon && (
              <span className="backfor" onClick={handlePrev}>
                {mdSkipPrevious}
              </span>
            )}

            {isPlaying ? (
              <span className="playpause" onClick={handlePlayPause}>
                <FaOnePause id="pause" />
              </span>
            ) : (
              <span className="playpause" onClick={handlePlayPause}>
                <FaOnePlay id="play" />
              </span>
            )}
            {isBackForIcon && (
              <sapn className="backfor" onClick={handleNext}>
                {mdSkipNext}
              </sapn>
            )}
            {isPrevNextIcon && (
              <div
                id="next-30"
                onClick={() => (audioTrack.currentTime += 30)}
              />
            )}
          </div>
          <div className="second-part">
            {isRunningTime && (
              <div className="time current">{parseTime(audioTrack)[0]}</div>
            )}

            <div className="progress-bar">
              <div className="default-bar" />
              <div className="fill-bar" />
              <input
                type="range"
                id="seek"
                value={currentTime}
                max={duration}
                onChange={(e) => {
                  if (audioTrack) {
                    audioTrack.currentTime = e.target.value;
                  }
                }}
                style={progressStyle}
              />
            </div>
            {isOldTime && (
              <div className="time till-end">{parseTime(audioTrack)[1]}</div>
            )}
            {isPlaySpeed && (
              <>
                <div
                  id="speed"
                  data-speed={playbackSpeed}
                  onClick={handleSpeedClick}
                >
                  {playbackSpeed}x
                </div>
                <div
                  className={`speed-options ${showSpeedOptions ? "show" : ""}`}
                >
                  <div onClick={() => changeSpeed(0.5)}>0.5x</div>
                  <div onClick={() => changeSpeed(1)}>1x</div>
                  <div onClick={() => changeSpeed(1.5)}>1.5x</div>
                  <div onClick={() => changeSpeed(2)}>2x</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneHaashPlayer;
