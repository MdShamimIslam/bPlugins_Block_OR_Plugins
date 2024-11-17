import { useState, useEffect } from "react";
import {
  FaBackward,
  FaForward,
  GiPauseButton,
  GrPlayFill,
} from "../../../utils/icons";

const AudioPlayCard = ({ attributes }) => {
  const { audioProperties } = attributes;

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const trackUrl = audioProperties[currentTrackIndex]?.audio?.url || null;

    if (trackUrl) {
      const newAudio = new Audio(trackUrl);
      newAudio.volume = 0.2;
      newAudio.loop = false;
      setAudio(newAudio);
    }

    return () => {
      if (audio) {
        audio.pause();
        setAudio(null);
      }
    };
  }, [audioProperties, currentTrackIndex]);

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
    setCurrentTrackIndex(index);
  };

  const playPrevious = () => {
    const newIndex =
      currentTrackIndex === 0
        ? audioProperties.length - 1
        : currentTrackIndex - 1;
    playTrack(newIndex);
  };

  const playNext = () => {
    const newIndex =
      currentTrackIndex === audioProperties.length - 1
        ? 0
        : currentTrackIndex + 1;
    playTrack(newIndex);
  };

  const addAutoImg = {
    background: `url("${
      audioProperties[currentTrackIndex]?.link ||
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
        <div className="title">{audioProperties[currentTrackIndex]?.title}</div>
        <div className="artist">
          {audioProperties[currentTrackIndex]?.artist}
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
