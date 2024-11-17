import "./style.scss";
import MP3Player from "./Components/Common/MP3Player";
import AudioSlider from "./Components/FrontEnd/AudioSlider";
import { createRoot } from "react-dom/client";
import SliderStyle from "./Components/Common/SliderStyle";
import OneHaash from "./Components/FrontEnd/OneHaash";

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
                <>
                  <SliderStyle attributes={attributes} id={mp3PlayerEl.id} />
                  <AudioSlider attributes={attributes} />
                </>
              ) : songSl === "oneHaash" ? (
                <OneHaash attributes={attributes} id={mp3PlayerEl.id} />
              ) : (
                "No Player"
              )}
            </>
          );
    }

    mp3PlayerEl?.removeAttribute("data-attributes");
  });
});
