import {
    getBorderCSS,
    getBoxCSS,
    getTypoCSS,
  } from "../../../../../Components/utils/getCSS";
  
  const AudioPlayCardStyle = ({ attributes, id, device = "desktop" }) => {
    const { } = attributes;
  
    // const idSl = `#${id}`;

    // ${getTypoCSS("", haashSubTitle.typo)?.googleFontLink}
    // ${getTypoCSS(episodeParaSl, haashSubTitle.typo)?.styles}

    // ${getTypoCSS("", haashTitle.typo)?.googleFontLink}
    // ${getTypoCSS(episodeTitleSl, haashTitle.typo)?.styles}
  
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
  
         
  
         
  
  
          @media only screen and (min-width:641px) and (max-width: 1024px){
                  

          }
  
  
          @media only screen and (max-width:640px){
              

          }
  
  
          `,
        }}
      />
    );
  };
  export default AudioPlayCardStyle;
  