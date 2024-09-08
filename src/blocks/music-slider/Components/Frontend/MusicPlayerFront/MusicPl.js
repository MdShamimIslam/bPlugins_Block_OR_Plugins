import React, { useState,useEffect } from 'react'
import { FaBackward, FaForward, FaPause, FaPlay } from '../../../utils/icons';


const MusicPl = ({ audioRef, isPlaying, setIsPlaying, activeIndex, setActiveIndex, swiperRef,attributes }) => {
    const { musics,style } = attributes;
    const { bg,progressBg } = style.rangeInput;
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [audioRef]);

    const updateProgress = () => {
        const audio = audioRef.current;
        const currentTime = audio.currentTime;
        setCurrentTime(currentTime);

        const progress = (currentTime / audio.duration) * 100;
        setProgress(progress);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    
    const playPauseMusic = () => {
        const audio = audioRef.current;
        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const changeMusic = (direction) => {
        const audio = audioRef.current;
        let newIndex = activeIndex;

        if (direction === 'forward') {
            newIndex = (activeIndex + 1) % musics.length;
        } else if (direction === 'backward') {
            newIndex = (activeIndex - 1 + musics.length) % musics.length;
        }
        setActiveIndex(newIndex);
        audio.src = musics[newIndex].source;
        if (isPlaying) {
            audio.play();
        }

        if (swiperRef.current) {
            swiperRef.current.slideTo(newIndex);
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

    return <div className="music-player">
        <h1 className='title' placeholder="Add Music Title...">{musics[activeIndex].title}</h1>
        <p className='name' placeholder="Add Music Name...">{musics[activeIndex].name}</p>

        <audio ref={audioRef} onTimeUpdate={updateProgress} onEnded={() => changeMusic('forward')} >
            <source src={musics[activeIndex].source} type="audio/mpeg" />
        </audio>

        <div className="progress-container">
                <span className="current-time">{formatTime(currentTime)}</span>
                <input
                    type="range"
                    value={progress ? progress : 0}
                    id="progress"
                    onChange={handleSeek}
                    min="0"
                    max="100"
                    step="0.1"
                    style={progressStyle}
                />
                <span className="duration-time">{formatTime(duration)}</span>
        </div>

        <div className="controls">
            <button className="backward" onClick={() => { changeMusic('backward') }} >
                <FaBackward />
            </button>
            <button onClick={playPauseMusic}>
                {isPlaying ? <FaPause id="controlIcon" /> : <FaPlay id="controlIcon" />}
            </button>
            <button className="forward" onClick={() => { changeMusic('forward') }} >
                <FaForward />
            </button>
        </div>
    </div>
}

export default MusicPl