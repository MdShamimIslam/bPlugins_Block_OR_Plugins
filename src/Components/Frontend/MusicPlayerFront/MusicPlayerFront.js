import React,{useState,useRef} from 'react'
import Slider from './Slider'
import MusicPl from './MusicPl'

const MusicPlayerFront = ({ attributes }) => {
  const {musics} = attributes;
  const [activeIndex, setActiveIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const swiperRef = useRef(null);

  const playTrack = (index) => {
		const audio = audioRef.current;
		setActiveIndex(index);
		audio.src = musics[index].source;
		if (isPlaying) {
			audio.play();
		}
	};

  return (
    <div className='bBlocksMusicPlayer'>
      <Slider
        ref={swiperRef}
        playTrack={playTrack}
        attributes={attributes}
      />
      <MusicPl
        attributes={attributes}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        swiperRef={swiperRef}
      />
    </div>
  )
}

export default MusicPlayerFront