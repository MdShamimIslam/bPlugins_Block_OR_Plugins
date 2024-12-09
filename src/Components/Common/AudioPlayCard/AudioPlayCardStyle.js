import { getBorderCSS, getMultiShadowCSS, getTypoCSS } from "../../../../../bpl-tools/utils/getCSS";

const AudioPlayCardStyle = ({ attributes, id, device = "desktop" }) => {
  const {
    cardWidth,
    cardHeight,
    cardImgHeight,
    waveTop,
    wave2Top,
    wave3Top,
    cardAlign,
    cardShadow,
    cardBg,
    cardBorder,
    cardTitle,
    cardSubTitle
  } = attributes.style.cardPlayer;

  const idSl = `#${id}`;
  const audioPlayerSl = `${idSl} .audioCardPlayer`;
  const musicCardSl = `${audioPlayerSl} .music_card`;
  const titleSl = `${musicCardSl} .info .title`;
  const artistSl = `${musicCardSl} .info .artist`;
  const imageSl = `${audioPlayerSl} .image`;
  const waveCardSl = `${musicCardSl} .waveCard`;
  const waveCard2Sl = `${musicCardSl} .waveCard:nth-child(2)`;
  const waveCard3Sl = `${musicCardSl} .waveCard:nth-child(3)`;
  const controlsSl = `${musicCardSl} .cardControls`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
  
            ${getTypoCSS("", cardSubTitle.typo)?.googleFontLink}
            ${getTypoCSS(artistSl, cardSubTitle.typo)?.styles}

            ${getTypoCSS("", cardTitle.typo)?.googleFontLink}
            ${getTypoCSS(titleSl, cardTitle.typo)?.styles}
         
            ${artistSl}{
                color:${cardSubTitle.color};
                opacity:${cardSubTitle.opacity};
            }
    
            ${titleSl}{
                color:${cardTitle.color};
            }
         
            ${audioPlayerSl}{
                justify-content : ${attributes.style.align[device]};
            }
         
            ${musicCardSl}{
                ${getBorderCSS(cardBorder)}
                width : ${cardWidth[device]};
                height : ${cardHeight[device]};
                box-shadow: ${getMultiShadowCSS(cardShadow)};
                background:${cardBg};
            }

            ${imageSl}{
                height : ${cardImgHeight[device]};
            }
          
            ${waveCardSl} {
                margin-top: ${waveTop[device]}%;
            }

            ${waveCard2Sl} {
                top: ${wave2Top[device]}px;
            }

            ${waveCard3Sl} {
                top: ${wave3Top[device]}px;
            }

            ${controlsSl} {
               justify-content: ${cardAlign[device]};
               left: ${
                 cardAlign[device] === "left"
                   ? "10px"
                   : cardAlign[device] === "right"
                   ? "-10px"
                   : 0
               };
            }
  
  
          @media only screen and (min-width:641px) and (max-width: 1024px){
            ${audioPlayerSl}{
                justify-content : ${attributes.style.align.tablet};
            }
         
            ${musicCardSl}{
                width : ${cardWidth.tablet};
                height : ${cardHeight.tablet};
            }

            ${imageSl}{
                height : ${cardImgHeight.tablet};
            }
          
            ${waveCardSl} {
                margin-top: ${waveTop.tablet}%;
            }

            ${waveCard2Sl} {
                top: ${wave2Top.tablet}px;
            }

            ${waveCard3Sl} {
                top: ${wave3Top.tablet}px;
            }

            ${controlsSl} {
               justify-content: ${cardAlign.tablet};
               left: ${
                 cardAlign.tablet === "left"
                   ? "10px"
                   : cardAlign.tablet === "right"
                   ? "-10px"
                   : 0
               };
            }

          }
  
  
          @media only screen and (max-width:640px){
                ${audioPlayerSl}{
                justify-content : ${attributes.style.align.mobile};
            }
         
            ${musicCardSl}{
                width : ${cardWidth.mobile};
                height : ${cardHeight.mobile};
            }

            ${imageSl}{
                height : ${cardImgHeight.mobile};
            }
          
            ${waveCardSl} {
                margin-top: ${waveTop.mobile}%;
            }

            ${waveCard2Sl} {
                top: ${wave2Top.mobile}px;
            }


            ${waveCard3Sl} {
                top: ${wave3Top.mobile}px;
            }

            ${controlsSl} {
               justify-content: ${cardAlign.mobile};
               left: ${cardAlign.mobile === 'left' ? "10px" : cardAlign.mobile === 'right' ? "-10px" : 0 };
            }

          }
  
  
          `,
      }}
    />
  );
};
export default AudioPlayCardStyle;
