import React, { useState, useRef } from "react";
import SwiperSlider from "../Backend/SwiperSlider/SwiperSlider";
import MusicPlayerBack from "../Backend/MusicPlayerBack/MusicPlayerBack";

const AudioSlider = ({ attributes }) => {
  const { audioProperties } = attributes;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const swiperRef = useRef(null);

  const playTrack = (index) => {
    const audio = audioRef.current;
    setActiveIndex(index);
    audio.src = audioProperties[index].audio.url;
    if (isPlaying) {
      audio.play();
    }
  };

  return (
    <div className="bpMp3Player">
      <SwiperSlider
        ref={swiperRef}
        playTrack={playTrack}
        attributes={attributes}
      />
      <MusicPlayerBack
        attributes={attributes}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        swiperRef={swiperRef}
      />
    </div>
  );
};

export default AudioSlider;
