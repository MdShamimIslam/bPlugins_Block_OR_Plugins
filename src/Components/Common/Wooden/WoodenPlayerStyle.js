import {
  getBorderCSS,
  getMultiShadowCSS,
  getBoxCSS,
  getColorsCSS,
  getTypoCSS
} from "../../../../../Components/utils/getCSS";

const WoodenPlayerStyle = ({ attributes, id, device = "desktop" }) => {
  const { align } = attributes.style;
  const { woAlign, woWidth, woHeight, woBorder, woShadow, woPadding, woColors, woBg, woTDColors,woTDBorder, woTDTypo } =
    attributes.style.woodenPlayer;

  const idSl = `#${id}`;
  const woodenWrapSl = `${idSl} .woodenWrap`;
  const woodenMediaplayerSl = `${woodenWrapSl} .woodenMediaplayer`;
  const discareaSl = `${woodenMediaplayerSl} .discarea`;
  // const discSl = `${discareaSl} .disc`;
  const stylusSl = `${discareaSl} .stylus `;
  const pivotSl = `${stylusSl} .pivot`;
  const headSl = `${stylusSl} .head`;
  const armSl = `${stylusSl} .arm`;
  const armBeforeSl = `${stylusSl} .arm::before`;
  const woodenControlsSvgSl = `${woodenMediaplayerSl} .woodenControls .subCon div`;
  const woodenTitleSl = `${woodenMediaplayerSl} .woodenControls .woodenTitle`;
  const woodenDurationSl = `${woodenMediaplayerSl} .woodenControls .subControls .woodenDuration`;
  const thumbSl = `${woodenMediaplayerSl} .woodenControls .subControls .volumeSlider::-webkit-slider-thumb`;
  const truckSl = `${woodenMediaplayerSl} .woodenControls .subControls .volumeSlider::-webkit-slider-runnable-track`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        
          ${getTypoCSS('', woTDTypo)?.googleFontLink}
          ${getTypoCSS(woodenTitleSl, woTDTypo)?.styles}

          ${woodenWrapSl}{
            justify-content: ${align[device]};
          }

          ${woodenMediaplayerSl}{
            ${getBorderCSS(woBorder)}
            box-shadow: ${getMultiShadowCSS(woShadow)};
            padding: ${getBoxCSS(woPadding[device])};
            width: ${woWidth[device]};
            height: ${woHeight[device]};
            justify-content: ${woAlign[device]};
            background: ${woBg}
          }
      
          ${woodenTitleSl},${woodenDurationSl}{
            ${getColorsCSS(woTDColors)}
            ${getBorderCSS(woTDBorder)}
          }

          ${pivotSl},${headSl},${woodenControlsSvgSl},${thumbSl}{
            background: ${woColors.variant1};
          }

          ${truckSl},${armSl}{
            background: ${woColors.variant5};
          }

          ${armBeforeSl}{
            background: ${woColors.variant8};
          }

          @media only screen and (min-width:641px) and (max-width: 1024px) {
            ${woodenWrapSl}{
              justify-content: ${align.tablet};
            }
  
            ${woodenMediaplayerSl}{
              padding: ${getBoxCSS(woPadding.tablet)};
              width: ${woWidth.tablet};
              height: ${woHeight.tablet};
              justify-content: ${woAlign.tablet};
            }

          }
  
  
          @media only screen and (max-width:640px) {
            ${woodenWrapSl}{
              justify-content: ${align.mobile};
            }
  
            ${woodenMediaplayerSl}{
              padding: ${getBoxCSS(woPadding.mobile)};
              width: ${woWidth.mobile};
              height: ${woHeight.mobile};
              justify-content: ${woAlign.mobile};
            }

          }
  
  
          `,
      }}
    />
  );
};
export default WoodenPlayerStyle;
