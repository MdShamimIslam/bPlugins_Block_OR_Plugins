import {
  getBorderCSS,
  getMultiShadowCSS,
  getBoxCSS,
} from "../../../../../Components/utils/getCSS";

const WoodenPlayerStyle = ({ attributes, id, device = "desktop" }) => {
  const { align } = attributes.style;
  const { woAlign, woWidth, woHeight, woBorder, woShadow, woPadding } =
    attributes.style.woodenPlayer;

  const idSl = `#${id}`;
  const woodenWrapSl = `${idSl} .woodenWrap`;
  const woodenMediaplayerSl = `${woodenWrapSl} .woodenMediaplayer`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `


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
