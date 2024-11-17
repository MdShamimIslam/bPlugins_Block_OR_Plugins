import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useEffect, useRef, useState } from "react";
import { withSelect } from "@wordpress/data";
import { nextIcon, playIcon, prevIcon } from "../../utils/icons";
import MP3Player from "../Common/MP3Player";
import Style from "../Common/Style";
import Setting from "./Settings/Setting";
import Settings from "./Settings/Settings";
import SliderStyle from "../Common/SliderStyle";
import MusicPlayerBack from "./MusicPlayerBack/MusicPlayerBack";
import SwiperSlider from "./SwiperSlider/SwiperSlider";
import OneHaashPlayer from "../Common/OneHaashPlayer/OneHaashPlayer";
import OneHaashStyle from "../Common/OneHaashPlayer/OneHaashStyle";
import MinimalPlayer from "../Common/MinimalPlayer/MinimalPlayer";
import AudioPlayCard from "../Common/AudioPlayCard/AudioPlayCard";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;
  const { audioProperties, options } = attributes;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const swiperRef = useRef(null);
  const { songSl } = options;
  const id = `bpMp3Player-${clientId}`;
  const blockRef = useRef(null);

  useEffect(() => {
    if (songSl === "default" && audioProperties?.length) {
      MP3Player(blockRef.current, audioProperties);
    }
  }, [audioProperties, options, songSl]);

  const playTrack = (index) => {
    const audio = audioRef.current;
    setActiveIndex(index);
    audio.src = audioProperties[index].audio.url;
    if (isPlaying) {
      audio.play();
    }
  };

  return (
    <>
      {songSl === "default" ? (
        <Setting
          attributes={attributes}
          setAttributes={setAttributes}
          setActiveIndex={setActiveIndex}
        />
      ) : (
        <Settings
          {...{ attributes, setAttributes, device }}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          device={device}
        />
      )}

      <div {...useBlockProps()}>
        {songSl === "default" ? (
          <>
            {0 !== audioProperties?.length ? (
              <div id={id} ref={blockRef}>
                <Style attributes={attributes} id={id} />

                <div className="bpMp3Player">
                  <div className="coverBox">
                    <img id="cover" />
                  </div>

                  <div className="contentBox">
                    <audio id="disc"></audio>

                    <div className="info">
                      <h2 id="title"></h2>
                      <h3 id="artist"></h3>

                      <div id="progressContainer">
                        <div id="progress"></div>
                      </div>

                      <div className="timeBar">
                        <span id="timer">0:00</span>
                        <span id="duration"></span>
                      </div>
                    </div>

                    <div className="controls">
                      <span className="prevBtn">{prevIcon}</span>

                      <span className="playPauseBtn">{playIcon}</span>

                      <span className="nextBtn">{nextIcon}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="bpMp3PlayerError">
                {__("Please add audio file first!", "mp3player-block")}
              </h3>
            )}
          </>
        ) : songSl === "slider" ? (
          <>
            <SliderStyle
              attributes={attributes}
              device={device}
              id={`block-${clientId}`}
            />
            <div className="bpMp3Player">
              <SwiperSlider
                ref={swiperRef}
                playTrack={playTrack}
                attributes={attributes}
              />
              <MusicPlayerBack
                attributes={attributes}
                audioRef={audioRef}
                setIsPlaying={setIsPlaying}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                swiperRef={swiperRef}
              />
            </div>
          </>
        ) : songSl === "oneHaash" ? (
          <>
            <OneHaashStyle
              attributes={attributes}
              id={`block-${clientId}`}
              device={device}
            />
              <OneHaashPlayer
                attributes={attributes}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
          </>
        ) : songSl === "minimal" ? <MinimalPlayer/> : songSl === "card" ? <AudioPlayCard  attributes={attributes} /> :  (
          "No Player"
        )}
      </div>
    </>
  );
};

export default withSelect((select) => {
  return {
    device: select("core/edit-post")
      .__experimentalGetPreviewDeviceType()
      ?.toLowerCase(),
  };
})(Edit);
