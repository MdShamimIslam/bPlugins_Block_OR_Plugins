import {
  getBorderCSS,
  getMultiShadowCSS,
  getBoxCSS,
} from "../../../../../Components/utils/getCSS";

const WoodenPlayerStyle = ({ attributes, id, device = "desktop" }) => {
  const { woWidth, woHeight, woBorder, woShadow, woPadding } =
    attributes.style.woodenPlayer;

  const idSl = `#${id}`;
  const woodenMediaplayerSl = `${idSl} .woodenMediaplayer`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `


          ${woodenMediaplayerSl}{
            ${getBorderCSS(woBorder)}
            box-shadow: ${getMultiShadowCSS(woShadow)};
            padding: ${getBoxCSS(woPadding[device])};
            width: ${woWidth[device]};
            height: ${woHeight[device]};
          }
         
            
          @media only screen and (min-width:641px) and (max-width: 1024px) {
            

          }
  
  
          @media only screen and (max-width:640px) {
               

          }
  
  
          `,
      }}
    />
  );
};
export default WoodenPlayerStyle;
