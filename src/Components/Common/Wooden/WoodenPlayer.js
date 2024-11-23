import React, { useEffect, useRef, useState } from "react";
import {
  FaBackward,
  FaForward,
  FaPause,
  FaPlay,
  FaStop,
} from "../../../utils/icons";

const WoodenPlayer = ({ attributes, currentIndex, setCurrentIndex }) => {
  const { audioProperties } = attributes;
  const playerAreaRef = useRef(null);
  const playButtonRef = useRef(null);
  const stopButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const durationLabelRef = useRef(null);
  const songTitleLabelRef = useRef(null);
  const audioPlayerRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLength, setCurrentLength] = useState(0);

  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;
    const volumeSlider = volumeSliderRef.current;
    const playButton = playButtonRef.current;
    const stopButton = stopButtonRef.current;
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;
    const durationLabel = durationLabelRef.current;
    const songTitleLabel = songTitleLabelRef.current;

    const parseTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time - minutes * 60);
      const secondsZero = seconds < 10 ? "0" : "";
      const minutesZero = minutes < 10 ? "0" : "";
      return `${minutesZero}${minutes}:${secondsZero}${seconds}`;
    };

    const updateDurationLabel = () => {
      const currentTime = audioPlayer.currentTime || 0;
      const totalDuration = currentLength || audioPlayer.duration || 0;
      if (durationLabel) {
        durationLabel.innerText = `${parseTime(currentTime)} / ${parseTime(
          totalDuration
        )}`;
      }
    };

    const loadTrack = (index, autoPlay = false) => {
      const audioPlayer = audioPlayerRef.current;
      audioPlayer.pause();
      setCurrentIndex(index);

      const newSong = audioProperties[index];
      if (newSong?.audio?.url) {
        audioPlayer.src = newSong.audio.url;
      } else {
        console.error("Invalid or empty audio URL");
        // reset error
        audioPlayer.src = "";
      }

      if (songTitleLabel) {
        songTitleLabel.innerHTML = newSong.title;
      }

      if (autoPlay) {
        setTimeout(() => {
          audioPlayer.play().catch((error) => {
            console.error("Shamim audio:", error);
          });
        }, 100);
      } else {
        updateDurationLabel();
      }
    };

    const onVolumeChange = () => {
      audioPlayer.volume = parseFloat(volumeSlider.value);
    };

    const onPlayPauseClick = () => {
      if (!audioPlayerRef.current.src) {
        console.error("Audio url nai.");
        return;
      }

      playerAreaRef.current.classList.toggle("play");

      if (audioPlayerRef.current.paused) {
        setTimeout(() => {
          audioPlayerRef.current.play();
        }, 300);
        setIsPlaying(true);
      } else {
        audioPlayerRef.current.pause();
        setIsPlaying(false);
      }
    };

    const onStopClick = () => {
      playerAreaRef.current.classList.remove("play");
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      updateDurationLabel();
      setIsPlaying(false);
    };

    const onNextClick = () => {
      const nextIndex = (currentIndex + 1) % audioProperties?.length;
      loadTrack(nextIndex, !audioPlayer.paused);
    };

    const onPrevClick = () => {
      const prevIndex =
        (currentIndex - 1 + audioProperties.length) % audioProperties.length;
      loadTrack(prevIndex, !audioPlayer.paused);
    };

    const onLoadedData = () => {
      setCurrentLength(audioPlayer.duration);
    };

    const onAudioEnded = () => {
      audioPlayer.currentTime = 0;
      setIsPlaying(false);
    };

    volumeSlider.addEventListener("input", onVolumeChange);
    playButton.addEventListener("click", onPlayPauseClick);
    stopButton.addEventListener("click", onStopClick);
    nextButton.addEventListener("click", onNextClick);
    prevButton.addEventListener("click", onPrevClick);
    audioPlayer.addEventListener("loadeddata", onLoadedData);
    audioPlayer.addEventListener("ended", onAudioEnded);

    const timer = setInterval(updateDurationLabel, 100);

    return () => {
      clearInterval(timer);
      volumeSlider.removeEventListener("input", onVolumeChange);
      playButton.removeEventListener("click", onPlayPauseClick);
      stopButton.removeEventListener("click", onStopClick);
      nextButton.removeEventListener("click", onNextClick);
      prevButton.removeEventListener("click", onPrevClick);
      audioPlayer.removeEventListener("loadeddata", onLoadedData);
      audioPlayer.removeEventListener("ended", onAudioEnded);
    };
  }, [currentIndex, isPlaying, currentLength, audioProperties]);

  return (
    <div className="woodenMediaplayer" ref={playerAreaRef} id="mediaPlayer">
      <audio
        id="audioPlayer"
        ref={audioPlayerRef}
        src={audioProperties[0]?.audio?.url}
      ></audio>
      <div className="discarea">
        <div className="disc"></div>
        <div className="stylus">
          <div className="pivot"></div>
          <div className="arm"></div>
          <div className="head"></div>
        </div>
      </div>
      <div className="woodenControls">
        <span
          className="woodenTitle"
          ref={songTitleLabelRef}
          id="songTitleLabel"
        >
          {audioProperties[0].title}
        </span>
        <div className="subCon">
          <div id="backItem" ref={prevButtonRef} className="back">
            <FaBackward />
          </div>
          <div id="playState" ref={playButtonRef} className="playstate">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
          <div id="stopItem" ref={stopButtonRef} className="stop">
            <FaStop />
          </div>
          <div id="nextItem" ref={nextButtonRef} className="next">
            <FaForward />
          </div>
        </div>
        <div className="subControls">
          <span
            className="woodenDuration"
            ref={durationLabelRef}
            id="currentDuration"
          >
            00:00
          </span>
          <input
            className="volumeSlider"
            ref={volumeSliderRef}
            type="range"
            id="volumeSlider"
            min="0"
            max="1"
            step="0.01"
          />
        </div>
      </div>
    </div>
    
  );
};

export default WoodenPlayer;
