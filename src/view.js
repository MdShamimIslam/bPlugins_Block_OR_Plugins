import "./style.scss";
import MP3Player from "./Components/Common/MP3Player";
import { createRoot } from "react-dom/client";
import OneHaash from "./Components/FrontEnd/OneHaash";
import AudioCard from "./Components/Common/AudioPlayCard/AudioCard";
import Wooden from "./Components/Common/Wooden/Wooden";
import SliderAudio from "./Components/Common/SliderAudio/SliderAudio";
import LiteAudioPlayer from "./Components/Common/LitePlayer/LiteAudioPlayer";

document.addEventListener("DOMContentLoaded", () => {
  const mp3PlayerEls = document.querySelectorAll(".wp-block-bpmp-mp3-player");
  mp3PlayerEls.forEach((mp3PlayerEl) => {
    const attributes = JSON.parse(mp3PlayerEl.dataset.attributes);
    const { audioProperties, options } = attributes;
    const { songSl } = options;

    {
      songSl === "default"
        ? MP3Player(mp3PlayerEl, audioProperties)
        : createRoot(mp3PlayerEl).render(
            <>
              {songSl === "slider" ? (
                <SliderAudio attributes={attributes} id={mp3PlayerEl.id} />
              ) : songSl === "oneHaash" ? (
                <OneHaash attributes={attributes} id={mp3PlayerEl.id} />
              ) : songSl === "card" ? (
                <AudioCard attributes={attributes} id={mp3PlayerEl.id} />
              ) : songSl === "wooden" ? (
                <Wooden attributes={attributes} id={mp3PlayerEl.id} />
              ) : songSl === "lite" ? (
                <LiteAudioPlayer attributes={attributes} id={mp3PlayerEl.id} />
              ) : (
                "No Player Added yet"
              )}
            </>
          );
    }

    mp3PlayerEl?.removeAttribute("data-attributes");
  });
});
