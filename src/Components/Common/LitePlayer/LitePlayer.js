import React, { useState, useRef, useEffect } from "react";
import {
  FaBackwardLite,
  FaForwardLite,
  FaPauseLite,
  FaPlayLite,
} from "../../../utils/icons";

const LitePlayer = ({ attributes, currentIndex, setCurrentIndex }) => {
  const { audioProperties } = attributes;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [trackDurations, setTrackDurations] = useState([]);
  const [showAllTracks, setShowAllTracks] = useState(false);

  const visibleTracks = showAllTracks
    ? audioProperties
    : audioProperties.slice(0, 5);

  useEffect(() => {
    const loadDurations = async () => {
      const durations = await Promise.all(
        audioProperties.map((track) => {
          return new Promise((resolve) => {
            const audio = new Audio(track.audio.url);
            audio.addEventListener("loadedmetadata", () => {
              resolve(audio.duration || 0);
            });
            audio.addEventListener("error", () => resolve(0));
          });
        })
      );
      setTrackDurations(durations);
    };
    loadDurations();
  }, [audioProperties]);

  const playTrack = (index) => {
    const selectedTrack = audioProperties[index];
    setCurrentIndex(index);
    if (selectedTrack?.audio?.url) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (audioProperties[currentIndex]?.audio?.url) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current?.duration) {
      setDuration(audioRef.current.duration);
    } else {
      setDuration(0);
    }
  };

  const seek = (e) => {
    const percent = e.nativeEvent.offsetX / e.target.offsetWidth;
    audioRef.current.currentTime = percent * duration;
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (time) => {
    if (!time || time === 0) return "00:00";
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (audioProperties[currentIndex]?.audio?.url) {
        audioRef.current.onloadedmetadata = handleLoadedMetadata;
        if (isPlaying) {
          audioRef.current.play();
        }
      } else {
        setDuration(0);
      }
    }
  }, [currentIndex, isPlaying]);

  return (
    <div className="player-ctn">
      <audio
        ref={audioRef}
        src={audioProperties[currentIndex]?.audio?.url || ""}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
      <div className="infos-ctn">
        <div className="timer">{formatTime(currentTime)}</div>
        <div className="title2">{audioProperties[currentIndex]?.title}</div>
        <div className="duration">{formatTime(duration)}</div>
      </div>
      <div id="myProgress" onClick={seek}>
        <div
          id="myBar"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      <div className="btn-ctn">
        <span
          onClick={() =>
            playTrack(currentIndex - 1 >= 0 ? currentIndex - 1 : 0)
          }
        >
          <FaBackwardLite />
        </span>
        <span style={{ padding: "0 20px" }} onClick={togglePlayPause}>
          {isPlaying ? <FaPauseLite /> : <FaPlayLite />}
        </span>
        <span
          onClick={() =>
            playTrack(
              currentIndex + 1 < audioProperties?.length
                ? currentIndex + 1
                : currentIndex
            )
          }
        >
          <FaForwardLite />
        </span>
      </div>
      <div className="playlist-ctn">
        {visibleTracks?.map((item, index) => (
          <div
            key={index}
            className={`playlist-track-ctn ${
              index === currentIndex ? "active-track" : ""
            }`}
            onClick={() => playTrack(index)}
          >
            <div onClick={togglePlayPause} className="playlist-btn-play">
              {index === currentIndex && isPlaying ? (
                <FaPauseLite />
              ) : (
                <FaPlayLite />
              )}
            </div>
            <div className="playlist-info-track">{item.title}</div>
            <div className="playlist-duration">
              {trackDurations[index] && trackDurations[index] > 0
                ? formatTime(trackDurations[index])
                : "00:00"}
            </div>
          </div>
        ))}
        {audioProperties.length > 5 && !showAllTracks && (
          <button
            onClick={() => setShowAllTracks(true)}
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              backgroundColor: "#BEAB8B",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            See More Music
          </button>
        )}
      </div>
    </div>
  );
};

export default LitePlayer;
