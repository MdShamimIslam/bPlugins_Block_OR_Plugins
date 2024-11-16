import {
  getBorderCSS,
  getBoxCSS,
  getTypoCSS,
} from "../../../../../Components/utils/getCSS";

const OneHaashStyle = ({ attributes, id, device = "desktop" }) => {
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

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        ${getTypoCSS("", haashSubTitle.typo)?.googleFontLink}
        ${getTypoCSS(episodeParaSl, haashSubTitle.typo)?.styles}

        ${getTypoCSS("", haashTitle.typo)?.googleFontLink}
        ${getTypoCSS(episodeTitleSl, haashTitle.typo)?.styles}

		
        ${vPlayerSl}{
          justify-content: ${attributes.style.align[device]};
        }

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


        @media only screen and (min-width:641px) and (max-width: 1024px){
                ${vPlayerSl}{
                    justify-content: ${attributes.style.align.tablet};
                }

                ${podcastSl}{
                    width: ${haashWidth.tablet};
                    height: ${haashHeight.tablet};
                }

                ${podcastSl}{
                    padding: ${getBoxCSS(hasshPadding.tablet)};
                }
        }


        @media only screen and (max-width:640px){
            ${vPlayerSl}{
                justify-content: ${attributes.style.align.mobile};
            }

            ${podcastSl}{
                width: ${haashWidth.mobile};
                height: ${haashHeight.mobile};
            }

            ${podcastSl}{
                padding: ${getBoxCSS(hasshPadding.mobile)};
            }
        }


		`,
      }}
    />
  );
};
export default OneHaashStyle;
