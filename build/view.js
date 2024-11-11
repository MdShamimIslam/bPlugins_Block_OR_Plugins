/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/utils/getCSS.js":
/*!*************************************!*\
  !*** ../Components/utils/getCSS.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBackgroundCSS: () => (/* binding */ getBackgroundCSS),
/* harmony export */   getBorderCSS: () => (/* binding */ getBorderCSS),
/* harmony export */   getBoxCSS: () => (/* binding */ getBoxCSS),
/* harmony export */   getColorsCSS: () => (/* binding */ getColorsCSS),
/* harmony export */   getIconCSS: () => (/* binding */ getIconCSS),
/* harmony export */   getMultiShadowCSS: () => (/* binding */ getMultiShadowCSS),
/* harmony export */   getSeparatorCSS: () => (/* binding */ getSeparatorCSS),
/* harmony export */   getShadowCSS: () => (/* binding */ getShadowCSS),
/* harmony export */   getSpaceCSS: () => (/* binding */ getSpaceCSS),
/* harmony export */   getTypoCSS: () => (/* binding */ getTypoCSS)
/* harmony export */ });
const getBackgroundCSS = (bg, isSolid = true, isGradient = true, isImage = true) => {
  const {
    type = 'solid',
    color = '#000000b3',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)',
    image = {},
    position = 'center center',
    attachment = 'initial',
    repeat = 'no-repeat',
    size = 'cover',
    overlayColor = '#000000b3'
  } = bg || {};
  const styles = 'gradient' === type && isGradient ? `background: ${gradient};` : 'image' === type && isImage ? `background: url(${image?.url});
				background-color: ${overlayColor};
				background-position: ${position};
				background-size: ${size};
				background-repeat: ${repeat};
				background-attachment: ${attachment};
				background-blend-mode: overlay;` : isSolid && `background: ${color};`;
  return styles;
}; // PHP version in Stepped Content

const getBorderCSS = border => {
  const {
    width = '0px',
    style = 'solid',
    color = '#0000',
    side = 'all',
    radius = '0px'
  } = border || {};
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
		${!radius ? '' : `border-radius: ${radius};`}
	`;
  return styles;
};
const getColorsCSS = colors => {
  const {
    color = '#333',
    bgType = 'solid',
    bg = '#0000',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = colors || {};
  const styles = `
		${color ? `color: ${color};` : ''}
		${gradient || bg ? `background: ${'gradient' === bgType ? gradient : bg};` : ''}
	`;
  return styles;
};
const getIconCSS = (icon, isSize = true, isColor = true) => {
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = icon || {};
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : `color: ${color};`;
  const styles = `
		${!fontSize || !isSize ? '' : `font-size: ${fontSize}px;`}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = (value, type = 'box') => {
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#7090b0',
      isInset = false
    } = item || {};
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator || {};
  const styles = `
		width: ${width};
		${'0px' === height && '0em' === height && '0rem' === height ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = shadow => {
  const {
    type = 'box',
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow || {};
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space || {};
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = (selector, typo, isFamily = true) => {
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo || {};
  const generateCss = (value, cssProperty) => !value ? '' : `${cssProperty}: ${value};`;
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const desktopFontSize = fontSize?.desktop || fontSize;
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${generateCss(fontWeight, 'font-weight')}
		${`font-size: ${desktopFontSize}px;`}
		${generateCss(fontStyle, 'font-style')}
		${generateCss(textTransform, 'text-transform')}
		${generateCss(textDecoration, 'text-decoration')}
		${generateCss(lineHeight, 'line-height')}
		${generateCss(letterSpace, 'letter-spacing')}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`,
    styles: `${selector}{
			${styles}
		}
		@media (max-width: 768px) {
			${selector}{
				${`font-size: ${tabletFontSize}px;`}
			}
		}
		@media (max-width: 576px) {
			${selector}{
				${`font-size: ${mobileFontSize}px;`}
			}
		}`.replace(/\s+/g, ' ').trim()
  };
};
const getBoxCSS = (val = {}) => Object.values(val).join(' ');

/***/ }),

/***/ "./src/Components/Common/ImageViewer.js":
/*!**********************************************!*\
  !*** ./src/Components/Common/ImageViewer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ImageViewer = ({
  attributes
}) => {
  const {
    imageUrl,
    options
  } = attributes;
  const {
    autoLoad,
    showZoomCtrl,
    draggable,
    mouseZoom,
    showFullscreenCtrl,
    pitch,
    hfov,
    disableKeyboardCtrl,
    doubleClickZoom,
    autoRotate,
    compass,
    autoRotateInactivityDelay
  } = options;
  const panoramaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      pannellum
    } = window;
    if (pannellum && panoramaRef.current) {
      const viewer = pannellum.viewer(panoramaRef.current, {
        type: "equirectangular",
        panorama: imageUrl,
        autoLoad,
        showZoomCtrl,
        draggable,
        mouseZoom,
        showFullscreenCtrl,
        pitch,
        hfov,
        disableKeyboardCtrl,
        doubleClickZoom,
        autoRotate,
        compass,
        autoRotateInactivityDelay
      });
      return () => {
        viewer.destroy();
      };
    }
  }, [imageUrl, autoLoad, showZoomCtrl, draggable, mouseZoom, showFullscreenCtrl, pitch, hfov, disableKeyboardCtrl, doubleClickZoom, autoRotate, compass, autoRotateInactivityDelay]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: panoramaRef,
    id: "panorama",
    className: "panoramaImgViewer"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageViewer);

/***/ }),

/***/ "./src/Components/Common/PanoramicImageViewer.js":
/*!*******************************************************!*\
  !*** ./src/Components/Common/PanoramicImageViewer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const PanoramicImageViewer = ({
  attributes
}) => {
  const {
    imageUrl,
    options
  } = attributes;
  const {
    autoRotate,
    autoRotateSpeed,
    cameraFov,
    fullscreen,
    setting,
    autoRotateActivationDuration,
    isDeviceMotion
  } = options.panolens;
  const imageContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isDeviceMotionActive, setIsDeviceMotionActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const viewerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      PANOLENS
    } = window;
    const panorama = new PANOLENS.ImagePanorama(imageUrl);
    const controlButtons = [...(fullscreen ? ["fullscreen"] : []), ...(setting ? ["setting"] : [])];
    viewerRef.current = new PANOLENS.Viewer({
      container: imageContainerRef.current,
      autoRotate,
      autoRotateSpeed,
      controlButtons,
      cameraFov,
      autoRotateActivationDuration
    });
    viewerRef.current.add(panorama);
    const onControlChange = () => {
      setIsDeviceMotionActive(viewerRef.current.getControl().id !== "orbit");
    };
    viewerRef.current.addUpdateCallback(() => {
      if (viewerRef.current.getControl() !== viewerRef.current.previousControl) {
        onControlChange();
        viewerRef.current.previousControl = viewerRef.current.getControl();
      }
    });
    return () => {
      viewerRef.current.dispose();
    };
  }, [imageUrl, autoRotate, autoRotateSpeed, cameraFov, fullscreen, setting, autoRotateActivationDuration, isDeviceMotion]);
  const handleDeviceMotionToggle = () => {
    setIsDeviceMotionActive(prev => !prev);
  };
  const handleDeviceOrientation = event => {
    const {
      alpha,
      beta,
      gamma
    } = event;
    if (viewerRef.current && viewerRef.current.camera) {
      viewerRef.current.camera.rotation.set(THREE.Math.degToRad(beta), THREE.Math.degToRad(alpha), THREE.Math.degToRad(-gamma));
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDeviceMotionActive) {
      viewerRef.current?.enableControl(window.PANOLENS.CONTROLS.DEVICEORIENTATION);
      if (typeof window.DeviceOrientationEvent?.requestPermission === "function") {
        window.DeviceOrientationEvent?.requestPermission().then(response => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", handleDeviceOrientation);
          }
        }).catch(console.error);
      } else {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }
    } else {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      viewerRef.current?.enableControl(window.PANOLENS.CONTROLS.ORBIT);
    }
    window.viewerRef = viewerRef;
    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [isDeviceMotionActive]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isDeviceMotion && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn",
    onClick: handleDeviceMotionToggle
  }, isDeviceMotionActive ? "Stop Device Motion" : "Start Device Motion"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: imageContainerRef,
    className: "panoramaImgViewer",
    key: `${imageUrl}-${autoRotate}-${autoRotateSpeed}-${cameraFov}-${fullscreen}-${setting}-${autoRotateActivationDuration}-${isDeviceMotion}`
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanoramicImageViewer);

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/utils/getCSS */ "../Components/utils/getCSS.js");


const Style = ({
  attributes,
  id,
  device = "desktop"
}) => {
  const {
    layout,
    options
  } = attributes;
  const {
    width,
    height,
    border,
    margin,
    padding,
    button
  } = layout;
  const {
    alignSl
  } = options;
  const {
    typo,
    textAlign,
    colors,
    btnWidth
  } = button;
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksImageViewer`;
  const imageSl = `${blockSl} .panoramaImgViewer`;
  const buttonSl = `${blockSl} .btn`;
  const canvasSl = `${imageSl} .panolens-canvas`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `

		 ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)("", typo)?.googleFontLink}
     ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(buttonSl, typo)?.styles}

		${blockSl}{
			align-items: ${alignSl[device]};
		}

		${imageSl}{
			${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBorderCSS)(border)}
			width: ${width[device]};
			height: ${height[device]};
		}

    ${buttonSl}{
			width: ${btnWidth[device] ? `${btnWidth[device]}px` : "100%"};
      text-align:${textAlign[device]};
      ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(colors)}
      padding: ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBoxCSS)(padding[device])};
      margin: ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBoxCSS)(margin[device])};
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
				padding: ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBoxCSS)(padding.tablet)};
				margin: ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBoxCSS)(margin.tablet)};
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
				padding: ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBoxCSS)(padding.mobile)};
				margin: ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBoxCSS)(margin.mobile)};
			}
		}

	`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Components_Common_ImageViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/ImageViewer */ "./src/Components/Common/ImageViewer.js");
/* harmony import */ var _Components_Common_PanoramicImageViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/PanoramicImageViewer */ "./src/Components/Common/PanoramicImageViewer.js");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");






document.addEventListener("DOMContentLoaded", () => {
  const PanoramicImageViewerEls = document.querySelectorAll(".wp-block-b-blocks-panoramic-image-viewer");
  PanoramicImageViewerEls.forEach(PanoramicImageViewerEl => {
    const attributes = JSON.parse(PanoramicImageViewerEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(PanoramicImageViewerEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      id: PanoramicImageViewerEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bBlocksImageViewer"
    }, attributes.options.viewerSl !== "360°" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_PanoramicImageViewer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_ImageViewer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attributes: attributes
    }))));
    PanoramicImageViewerEl?.removeAttribute("data-attributes");
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map