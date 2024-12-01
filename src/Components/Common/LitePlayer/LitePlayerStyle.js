import {
  getBorderCSS,
  getBoxCSS,
  getTypoCSS,
} from "../../../../../Components/utils/getCSS";

const LitePlayerStyle = ({ attributes, id, device = "desktop" }) => {
  const {
    liteWidth,
    liteBg,
    liteBorder,
    litePadding,
    liteControlsBg,
    liteInfosColor,
    liteRunningProgressBg,
    liteControlsTypo,
    liteListColors,
    liteListBorder,
  } = attributes.style.litePlayer;
  const { align } = attributes.style;

  const idSl = `#${id}`;
  const liteAudioPlayerSl = `${idSl} .LiteAudioPlayer`;
  const playerSl = `${liteAudioPlayerSl} .player-ctn`;
  const progressSl = `${liteAudioPlayerSl} #myProgress`;
  const runningProgressSl = `${progressSl} #myBar`;
  const iconSl = `${liteAudioPlayerSl} .fas`;
  const infosSl = `${playerSl} .infos-ctn`;
  const timerSl = `${infosSl} .timer`;
  const titleSl = `${infosSl} .title2`;
  const durationSl = `${infosSl} .duration`;
  const playlistSl = `${playerSl} .playlist-ctn .playlist-track-ctn`;
  const playlistInfoSl = `${playerSl} .playlist-info-track`;
  const btnPlaySl = `${playerSl} .playlist-btn-play`;
  const playlistDurationSl = `${playerSl} .playlist-duration`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        ${getTypoCSS("", liteControlsTypo)?.googleFontLink}
        ${getTypoCSS(infosSl, liteControlsTypo)?.styles}

        ${liteAudioPlayerSl} {
         justify-content: ${align[device]};
        }

        ${playlistSl} {
          ${getBorderCSS(liteListBorder)}
          background: ${liteListColors.bg};
        }

        ${playlistInfoSl},${playlistDurationSl} {
          color: ${liteListColors.color} !important;
        }

        ${btnPlaySl} svg {
          color: ${liteListColors.color} !important;
        }
      
        ${timerSl},${titleSl},${durationSl} {
         color: ${liteInfosColor};
        }

        ${progressSl} {
         background-color: ${liteControlsBg};
        }

        ${runningProgressSl} {
         background-color: ${liteRunningProgressBg};
        }

        ${iconSl} {
         color: ${liteControlsBg};
        }

        ${playerSl} {
          ${getBorderCSS(liteBorder)}
          padding: ${getBoxCSS(litePadding[device])};
          width: ${liteWidth[device]};
          background-color: ${liteBg};
        }

        @media only screen and (min-width:641px) and (max-width: 1024px){
          ${liteAudioPlayerSl} {
            justify-content: ${align.tablet};
           }
          ${playerSl} {
            padding: ${getBoxCSS(litePadding.tablet)};
            width: ${liteWidth.tablet};
          }
           
        }

        @media only screen and (max-width:640px){
          ${liteAudioPlayerSl} {
            justify-content: ${align.mobile};
           }

           ${playerSl} {
            padding: ${getBoxCSS(litePadding.mobile)};
            width: ${liteWidth.mobile};
          }
        }

		`,
      }}
    />
  );
};
export default LitePlayerStyle;
