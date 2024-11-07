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
  const { typo, textAlign, horizontalAlign, verticalAlign, colors, btnWidth } =
    button;

  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksImageViewer`;
  const imageSl = `${blockSl} .panoramaImgViewer`;
  const buttonSl = `${imageSl} .btn`;
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
			${buttonAlignment(verticalAlign, horizontalAlign, device)}
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
				${buttonAlignment(verticalAlign, horizontalAlign, "tablet")}
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
				${buttonAlignment(verticalAlign, horizontalAlign, "mobile")}
			}
		}

	`,
      }}
    />
  );
};
export default Style;

const buttonAlignment = (verticalAlign, horizontalAlign, device) => {
  return `
    ${horizontalAlign[device] === "start" ? "left: 0; right: auto;" : ""}
    ${
      horizontalAlign[device] === "center"
        ? "left: 50%; right: auto; transform: translateX(-50%);"
        : ""
    }
    ${horizontalAlign[device] === "end" ? "right: 0; left: auto;" : ""}
    ${verticalAlign[device] === "top" ? "top: 0; bottom: auto;" : ""}
    ${
      verticalAlign[device] === "middle"
        ? "top: 50%; bottom: auto; transform: translateY(-50%);"
        : ""
    }
    ${verticalAlign[device] === "bottom" ? "bottom: 0; top: auto;" : ""}
    ${
      horizontalAlign[device] === "center"
        ? verticalAlign[device] === "middle"
          ? "top: 50%; right: auto; bottom: auto; left: 50%; transform: translate(-50%, -50%);"
          : ""
        : ""
    }
  `;
};
