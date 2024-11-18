import { useState, useEffect } from "react";
import {
  FaBackward,
  FaForward,
  GiPauseButton,
  GrPlayFill,
} from "../../../utils/icons";

const AudioPlayCard = ({ attributes, activeIndex, setActiveIndex }) => {
  const { audioProperties } = attributes;
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  
  useEffect(() => {
    const trackUrl = audioProperties[activeIndex]?.audio?.url || null;

    if (trackUrl) {
      const newAudio = new Audio(trackUrl);
      newAudio.volume = 0.5;
      newAudio.loop = false;
      setAudio(newAudio);
    }

    return () => {
      if (audio) {
        audio.pause();
        setAudio(null);
      }
    };
  }, [audioProperties, activeIndex]);

  useEffect(() => {
    if (audio && isPlaying) {
      audio
        .play()
        .catch((err) => console.error("Audio play error:", err.message));
    }
  }, [audio, isPlaying]);

  const togglePlayPause = () => {
    if (!audio) {
      console.error("No audio object initialized.");
      return;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio
        .play()
        .catch((err) => console.error("Audio play error:", err.message));
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = (index) => {
    if (audio) {
      audio.pause();
    }
    setActiveIndex(index);
  };

  const playPrevious = () => {
    const newIndex =
      activeIndex === 0
        ? audioProperties.length - 1
        : activeIndex - 1;
    playTrack(newIndex);
  };

  const playNext = () => {
    const newIndex =
      activeIndex === audioProperties.length - 1
        ? 0
        : activeIndex + 1;
    playTrack(newIndex);
  };

  const addAutoImg = {
    background: `url("${
      audioProperties[activeIndex]?.cover?.url ||
      "http://pak101.com/celebrities/Singers/Gul_Panra_Pakistani_Female_Singer_Celebrity_1_awaha_Pak101(dot)com.jpg"
    }") no-repeat 70%`,
    backgroundSize: "cover",
  };

  return (
    <div className={`music_card ${isPlaying ? "playing" : ""}`}>
      <div style={addAutoImg} className="image" />
      <div className="waveCard" />
      <div className="waveCard" />
      <div className="waveCard" />
      <div className="info">
        <div className="title">{audioProperties[activeIndex]?.title}</div>
        <div className="artist">
          {audioProperties[activeIndex]?.artist}
        </div>
      </div>
      <div className="cardControls">
        <FaBackward onClick={playPrevious} />
        {isPlaying ? (
          <GiPauseButton onClick={togglePlayPause} />
        ) : (
          <GrPlayFill onClick={togglePlayPause} />
        )}
        <FaForward onClick={playNext} />
      </div>
    </div>
  );
};

export default AudioPlayCard;
