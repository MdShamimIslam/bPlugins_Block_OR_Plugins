import React, { useState, useEffect } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "../../../utils/icons";

const MusicPlayerBack = ({
  audioRef,
  isPlaying,
  setIsPlaying,
  activeIndex,
  setActiveIndex,
  swiperRef,
  attributes,
}) => {
  const { audioProperties, style, options } = attributes;
  const { bg, progressBg } = style.rangeInput;
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audioRef, audioProperties[activeIndex]?.audio.url]);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Failed to play the audio automatically: ", error);
        setIsPlaying(false);
      });
    }
  }, [activeIndex, isPlaying]);

  const changeMusic = (direction) => {
    const audio = audioRef.current;
    let newIndex = activeIndex;

    if (direction === "forward") {
      newIndex = (activeIndex + 1) % audioProperties.length;
    } else if (direction === "backward") {
      newIndex =
        (activeIndex - 1 + audioProperties.length) % audioProperties.length;
    }

    setActiveIndex(newIndex);

    setProgress(0);
    setCurrentTime(0);

    const nextAudioUrl = audioProperties[newIndex]?.audio?.url;
    if (nextAudioUrl) {
      audio.src = nextAudioUrl;
      if (isPlaying) {
        audio.play();
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }

    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
    }
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    const currentTime = audio.currentTime;
    setCurrentTime(currentTime);

    const progress = (currentTime / audio.duration) * 100;
    
    setProgress(progress);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playPauseMusic = () => {
    const audio = audioRef.current;
    if (audioProperties[activeIndex]?.audio.url) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const seekTime = (event.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  };

  const progressStyle = {
    background: `linear-gradient(to right, ${progressBg} ${progress}%, ${bg} ${progress}%)`,
  };

  return (
    <div className="music-player">
      <h1 className="title" placeholder="Add Music Title...">
        {audioProperties[activeIndex]?.title}
      </h1>
      <p className="name" placeholder="Add Music Name...">
        {audioProperties[activeIndex]?.artist}
      </p>

      <audio
        ref={audioRef}
        onTimeUpdate={updateProgress}
        key={audioProperties[activeIndex]?.audio?.url}
        onEnded={() => {
          if (options.isAutoPlay) {
            changeMusic("forward");
          } else {
            setIsPlaying(false);
          }
        }}
      >
        <source
          src={audioProperties[activeIndex]?.audio.url}
          type="audio/mpeg"
        />
      </audio>
      <div className="progress-container">
        <p className="current-time">{formatTime(currentTime)}</p>
        <input
          type="range"
          value={progress ? progress : 0}
          id="progresses"
          onChange={handleSeek}
          min="0"
          max="100"
          step="0.1"
          style={progressStyle}
        />
        <p className="duration-time">
          {audioProperties[activeIndex]?.audio?.url
            ? formatTime(duration)
            : "00:00"}
        </p>
      </div>

      <div className="controls">
        <button
          className="backward"
          onClick={() => {
            changeMusic("backward");
          }}
        >
          <FaBackward />
        </button>
        <button onClick={playPauseMusic}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className="forward"
          onClick={() => {
            changeMusic("forward");
          }}
        >
          <FaForward />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayerBack;
