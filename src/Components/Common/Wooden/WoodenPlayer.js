import React, { useEffect, useRef, useState } from "react";

const WoodenPlayer = () => {
  const songs = [
    {
      title: "LA Chill Tour",
      songURL: "http://www.pakium.pk/wp-content/uploads/2015/08/Man-Aamadeh-Am-S08E03-PakiUM.Com_.mp3",
    },
    {
      title: "This is it band",
      songURL: "https://dl.dropboxusercontent.com/s/s0xk91uo1gr9ybg/The%20Prince%20of%20Egypt%20-%2001%20-%20Deliver%20US.mp3",
    },
    {
      title: "LA Fusion Jam",
      songURL: "https://api.podcache.net/episodes/698d602a-a059-45dc-b42c-a2bdfde19922/stream.mp3",
    },
  ];
  const playerAreaRef = useRef(null);
  const playButtonRef = useRef(null);
  const stopButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const durationLabelRef = useRef(null);
  const songTitleLabelRef = useRef(null);
  const audioPlayerRef = useRef(null);
  const volumeSliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataAvailable, setDataAvailable] = useState(false);
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
      if (dataAvailable) {
        durationLabel.innerText = `${parseTime(
          audioPlayer.currentTime
        )} / ${parseTime(currentLength)}`;
      } else {
        durationLabel.innerText = parseTime(audioPlayer.currentTime);
      }
    };

    const loadNext = (next) => {
      audioPlayer.pause();
      let newIndex = next
        ? (currentIndex + 1) % songs.length
        : (currentIndex - 1 + songs.length) % songs.length;
      setCurrentIndex(newIndex);
      const newSong = songs[newIndex];
      audioPlayer.src = newSong.songURL;
      songTitleLabel.innerHTML = newSong.title;
      audioPlayer.play();
    };

    const onVolumeChange = () => {
      audioPlayer.volume = parseFloat(volumeSlider.value);
    };

    const onPlayPauseClick = () => {
      playerAreaRef.current.classList.toggle("play");
      if (audioPlayer.paused) {
        setTimeout(() => {
          audioPlayer.play();
        }, 300);
      } else {
        audioPlayer.pause();
      }
    };

    const onStopClick = () => {
      playerAreaRef.current.classList.remove("play");
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      updateDurationLabel();
    };

    const onLoadedData = () => {
      setDataAvailable(true);
      setCurrentLength(audioPlayer.duration);
    };

    const onAudioEnded = () => {
      audioPlayer.currentTime = 0;
    };

    volumeSlider.addEventListener("input", onVolumeChange);
    playButton.addEventListener("click", onPlayPauseClick);
    stopButton.addEventListener("click", onStopClick);
    nextButton.addEventListener("click", () => loadNext(true));
    prevButton.addEventListener("click", () => loadNext(false));
    audioPlayer.addEventListener("loadeddata", onLoadedData);
    audioPlayer.addEventListener("ended", onAudioEnded);

    const timer = setInterval(updateDurationLabel, 100);

    return () => {
      clearInterval(timer);
      volumeSlider.removeEventListener("input", onVolumeChange);
      playButton.removeEventListener("click", onPlayPauseClick);
      stopButton.removeEventListener("click", onStopClick);
      nextButton.removeEventListener("click", () => loadNext(true));
      prevButton.removeEventListener("click", () => loadNext(false));
      audioPlayer.removeEventListener("loadeddata", onLoadedData);
      audioPlayer.removeEventListener("ended", onAudioEnded);
    };
  }, [currentIndex, dataAvailable, currentLength]);

  return (
    <div className="woodenMediaplayer" ref={playerAreaRef} id="mediaPlayer">
      <audio
        id="audioPlayer"
        ref={audioPlayerRef}
        src={songs[0].songURL}
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
        <span className="woodenTitle" ref={songTitleLabelRef} id="songTitleLabel">
          {songs[0].title}
        </span>
        <div className="buttons">
          <button id="backItem" ref={prevButtonRef} className="back">
            <i className="fa fa-backward"></i>
          </button>
          <button id="playState" ref={playButtonRef} className="playstate">
            <i className="fa fa-play"></i>
            <i className="fa fa-pause"></i>
          </button>
          <button id="stopItem" ref={stopButtonRef} className="stop">
            <i className="fa fa-stop"></i>
          </button>
          <button id="nextItem" ref={nextButtonRef} className="next">
            <i className="fa fa-forward"></i>
          </button>
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

