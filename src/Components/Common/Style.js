import {
  getBorderCSS,
  getBoxCSS,
  getColorsCSS,
  getTypoCSS,
} from "../../../../Components/utils/getCSS";

const Style = ({ attributes, id, device = "desktop" }) => {
  const { layout, options } = attributes;
  const { width, height, border, margin, padding, button } = layout;
  const { alignSl } = options;
  const { typo, textAlign, colors, btnWidth } = button;

  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksImageViewer`;
  const imageSl = `${blockSl} .panoramaImgViewer`;
  const buttonSl = `${blockSl} .btn`;
  const canvasSl = `${imageSl} .panolens-canvas`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

		 ${getTypoCSS("", typo)?.googleFontLink}
     ${getTypoCSS(buttonSl, typo)?.styles}

		${blockSl}{
			align-items: ${alignSl[device]};
		}

		${imageSl}{
			${getBorderCSS(border)}
			width: ${width[device]};
			height: ${height[device]};
		}

    ${buttonSl}{
			width: ${btnWidth[device] ? `${btnWidth[device]}px` : "100%"};
      text-align:${textAlign[device]};
      ${getColorsCSS(colors)}
      padding: ${getBoxCSS(padding[device])};
      margin: ${getBoxCSS(margin[device])};
		}
			
		${canvasSl}{
			border-radius: ${border.radius};
		}

		@media only screen and (min-width:641px) and (max-width: 1024px){
			${blockSl}{
				align-items: ${alignSl.tablet};
			}

			${imageSl}{
				width: ${width.tablet};
				height: ${height.tablet};
			}

			${buttonSl}{
				width: ${btnWidth.tablet ? `${btnWidth.tablet}px` : "100%"};
				text-align:${textAlign.tablet};
				padding: ${getBoxCSS(padding.tablet)};
				margin: ${getBoxCSS(margin.tablet)};
			}
		}

		@media only screen and (max-width:640px){
			${blockSl}{
				align-items: ${alignSl.mobile};
			}

			${imageSl}{
				width: ${width.mobile};
				height: ${height.mobile};
			}

			${buttonSl}{
				width: ${btnWidth.mobile ? `${btnWidth.mobile}px` : "100%"};
				text-align:${textAlign.mobile};
				padding: ${getBoxCSS(padding.mobile)};
				margin: ${getBoxCSS(margin.mobile)};
			}
		}

	`,
      }}
    />
  );
};
export default Style;

