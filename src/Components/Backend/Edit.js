import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useEffect, useRef, useState } from "react";
import { withSelect } from "@wordpress/data";
import { nextIcon, playIcon, prevIcon } from "../../utils/icons";
import MP3Player from "../Common/MP3Player";
import Style from "../Common/Style";
import Setting from "./Settings/Setting";
import Settings from "./Settings/Settings";
import OneHaashPlayer from "../Common/OneHaashPlayer/OneHaashPlayer";
import OneHaashStyle from "../Common/OneHaashPlayer/OneHaashStyle";
import AudioCard from "../Common/AudioPlayCard/AudioCard";
import Wooden from "../Common/Wooden/Wooden";
import SliderAudio from "../Common/SliderAudio/SliderAudio";
import LiteAudioPlayer from "../Common/LitePlayer/LiteAudioPlayer";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;
  const { audioProperties, options } = attributes;
  const [activeIndex, setActiveIndex] = useState(0);
  const { songSl= 'default' } = options;
  const id = `bpMp3Player-${clientId}`;
  const blockRef = useRef(null);

  useEffect(() => {
    if (songSl === "default" && audioProperties?.length) {
      MP3Player(blockRef.current, audioProperties);
    }
  }, [audioProperties, options, songSl]);

  return (
    <>
      {songSl === "default" ? (
        <Setting {...{ attributes, setAttributes, setActiveIndex }} />
      ) : (
        <Settings
          {...{
            attributes,
            setAttributes,
            device,
            activeIndex,
            setActiveIndex,
          }}
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
          <SliderAudio
            attributes={attributes}
            device={device}
            id={`block-${clientId}`}
          />
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
        ) : songSl === "wooden" ? (
          <>
            <Wooden
              attributes={attributes}
              id={`block-${clientId}`}
              device={device}
            />
          </>
        ) : songSl === "card" ? (
          <AudioCard
            attributes={attributes}
            id={`block-${clientId}`}
            device={device}
          />
        ) : songSl === "lite" ? (
          <LiteAudioPlayer
            attributes={attributes}
            id={`block-${clientId}`}
            device={device}
          />
        ) : (
          "No Player Added Yet!"
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

// export default withSelect((select) => {
//   const {getDeviceType} = select('core/editor');

// return {
//   device: getDeviceType()?.toLowerCase(),
// }
// })(Edit);
