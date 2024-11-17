import {
  MinimalNextIcon,
  MinimalPauseIcon,
  MinimalPlayIcon,
  MinimalPrevIcon,
} from "../../../utils/icons";

const MinimalPlayer = () => {

  return (
    <>
      <div className="player">
        <div className="player__bar">
          <div className="player__album">
            <div
              className="player__albumImg active-song"
              data-author="Khalid"
              data-song="Location"
              data=""
              data-src="http://www.pakium.pk/wp-content/uploads/2015/08/Man-Aamadeh-Am-S08E03-PakiUM.Com_.mp3"
              style={{
                backgroundImage:
                  "url(https://alikinvv.github.io/minimal-player/build/img/album.jpg",
              }}
            ></div>
            <div
              className="player__albumImg"
              data-author="Khalid"
              data-song="Angels"
              data=""
              data-src="http://www.pakium.pk/wp-content/uploads/2015/08/Man-Aamadeh-Am-S08E03-PakiUM.Com_.mp3"
              style={{
                backgroundImage:
                  "url(https://alikinvv.github.io/minimal-player/build/img/album.jpg",
              }}
            ></div>
          </div>
          <div className="player__controls">
            <div className="player__prev">
              <MinimalPrevIcon />
            </div>
            <div className="player__play">
              <MinimalPlayIcon />
              <MinimalPauseIcon />
            </div>
            <div className="player__next">
              <MinimalNextIcon />
            </div>
          </div>
        </div>
        <div className="player__timeline">
          <p className="player__author" />
          <p className="player__song" />
          <div className="player__timelineBar">
            <div id="playhead" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MinimalPlayer;
