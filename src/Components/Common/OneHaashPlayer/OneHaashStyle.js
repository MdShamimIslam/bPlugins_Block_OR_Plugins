import {
  getBorderCSS,
  getBoxCSS,
  getTypoCSS,
} from "../../../../../Components/utils/getCSS";

const OneHaashStyle = ({ attributes, id, device="desktop" }) => {
  const {
    haashWidth,
    haashHeight,
    haashBorder,
    hasshPadding,
    haashTitle,
    haashSubTitle,
  } = attributes.style.oneHaashPlayer;

  const idSl = `#${id}`;
  const vPlayerSl = `${idSl} #v-player`;
  const podcastSl = `${vPlayerSl} #podcast-player`;
  const episodeParaSl = `${podcastSl} .epidode-header p`;
  const episodeTitleSl = `${podcastSl}  .episode-title`;
//   const controlSl = `${podcastSl}  #controls`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        ${getTypoCSS("", haashSubTitle.typo)?.googleFontLink}
        ${getTypoCSS(episodeParaSl, haashSubTitle.typo)?.styles}

        ${getTypoCSS("", haashTitle.typo)?.googleFontLink}
        ${getTypoCSS(episodeTitleSl, haashTitle.typo)?.styles}

		
        ${podcastSl}{
            width: ${haashWidth[device]};
            height: ${haashHeight[device]};
        }

        ${podcastSl}{
            ${getBorderCSS(haashBorder)}
            padding: ${getBoxCSS(hasshPadding[device])};
        }

        ${episodeParaSl}{
            color:${haashSubTitle.color};
			opacity:${haashSubTitle.opacity};
        }

        ${episodeTitleSl}{
            color:${haashTitle.color};
          
        }

		`,
      }}
    />
  );
};
export default OneHaashStyle;
