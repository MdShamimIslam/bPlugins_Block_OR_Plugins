import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  __experimentalUnitControl as UnitControl,
  RangeControl,
} from "@wordpress/components";
import {
  ColorControl,
  Label,
  ShadowControl,
  Typography,
  ColorsControl,
} from "../../../../../../bpl-tools/Components";
import { BorderControl } from "../../../../../../bpl-tools/Components/Deprecated";
import { Device, BoxControl } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";
import { produce } from "immer";
import { perUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";
import { BControlPro } from "../../../../../../bpl-tools/ProControls";
import { Tab } from "./Tab";
import ColorSchema from "../../ColorSchema/ColorSchema";

const Styles = ({ attributes, setAttributes, device, premiumProps }) => {
  const { style, options } = attributes;
  const { songSl, textSl, rangeSl, isOverlayIcon } = options;
  const {
    musicSlider,
    musicTitle,
    musicName,
    rangeInput,
    rangeThumb,
    controlsBtn,
    oneHaashPlayer,
    cardPlayer,
    woodenPlayer,
    litePlayer,
  } = style;
  const { sliderWidth, sliderHeight, border, overlayBg } = musicSlider;
  const { width, height, bg, progressBg, timeBg, radius, margin } = rangeInput;
  const { thumbWidth, thumbBg, thumbShadow, thumbOutline } = rangeThumb;
  const {
    haashWidth,
    haashHeight,
    waveBg,
    haashBorder,
    hasshPadding,
    haashTitle,
    haashSubTitle,
    haashInputRange,
  } = oneHaashPlayer;
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
    cardSubTitle,
  } = cardPlayer;
  const {
    woWidth,
    woHeight,
    woShadow,
    woBorder,
    woPadding,
    woAlign,
    woBg,
    woTDColors,
    woTDBorder,
    woTDTypo,
  } = woodenPlayer;
  const {
    liteWidth,
    liteBg,
    liteBorder,
    litePadding,
    liteControlsBg,
    liteInfosColor,
    liteRunningProgressBg,
    liteControlsTypo,
    liteListColors,
    liteListBorder,
  } = litePlayer;

  return (
    <>
      {songSl === "slider" ? (
        <>
          <PanelBody
            className=" "
            title={__("Player Wrapper", "mp3player-block")}
          >
            <PanelRow>
              <Label>{__("Width", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={style.width[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({ style: updateData(style, v, "width", device) })
              }
            />

            <PanelRow>
              <Label>{__("Height", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={style.height[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({ style: updateData(style, v, "height", device) })
              }
            />

            <ColorControl
              label={__("Background", "mp3player-block")}
              value={style.bg}
              onChange={(v) =>
                setAttributes({ style: updateData(style, v, "bg") })
              }
            />

            <BControlPro
              label={__("Border", "mp3player-block")}
              value={style.border}
              onChange={(v) =>
                setAttributes({ style: updateData(style, v, "border") })
              }
              defaults={{ radius: "5px" }}
              Component={BorderControl}
              {...premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Slider Style", "mp3player-block")}
            initialOpen={false}
          >
            <PanelRow>
              <Label>{__("Width", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={sliderWidth[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "musicSlider",
                    "sliderWidth",
                    device
                  ),
                })
              }
            />

            <PanelRow>
              <Label>{__("Height", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={sliderHeight[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "musicSlider",
                    "sliderHeight",
                    device
                  ),
                })
              }
            />

            {isOverlayIcon && (
              <ColorControl
                label={__("Overlay Background", "mp3player-block")}
                value={overlayBg}
                onChange={(v) =>
                  setAttributes({
                    style: updateData(style, v, "musicSlider", "overlayBg"),
                  })
                }
              />
            )}

            <BControlPro
              label={__("Border", "mp3player-block")}
              value={border}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "musicSlider", "border"),
                })
              }
              defaults={{ radius: "3px" }}
              Component={BorderControl}
              {...premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Player Style", "mp3player-block")}
            initialOpen={false}
          >
            <Tab
              options={["title", "sub-title"]}
              value={textSl}
              onChange={(v) =>
                setAttributes({ options: updateData(options, v, "textSl") })
              }
            />

            {textSl === "title" ? (
              <>
                <ColorControl
                  label={__("Color", "mp3player-block")}
                  value={musicTitle.color}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicTitle", "color"),
                    })
                  }
                />
                <BControlPro
                  label={__("Typography", "mp3player-block")}
                  value={musicTitle.typo}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicTitle", "typo"),
                    })
                  }
                  defaults={{ fontSize: 30 }}
                  Component={Typography}
              {...premiumProps}
                />
              </>
            ) : (
              <>
                <ColorControl
                  label={__("Color", "mp3player-block")}
                  value={musicName.color}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicName", "color"),
                    })
                  }
                />
                <BControlPro
                  className="mt5"
                  label={__("Opacity", "mp3player-block")}
                  value={musicName.opacity}
                  allowReset
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicName", "opacity"),
                    })
                  }
                  min={0}
                  max={1}
                  step={0.1}
                  Component={RangeControl}
              {...premiumProps}
                />
                <BControlPro
                  label={__("Typography", "mp3player-block")}
                  value={musicName.typo}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicName", "typo"),
                    })
                  }
                  defaults={{ fontSize: 20 }}
                  Component={Typography}
              {...premiumProps}
                />
              </>
            )}
            <p className="mt15">For Range of Progress </p>
            <Tab
              options={["Input", "Thumb"]}
              value={rangeSl}
              onChange={(v) =>
                setAttributes({ options: updateData(options, v, "rangeSl") })
              }
            />
            {rangeSl === "input" ? (
              <>
                <ColorControl
                  label={__("Static Color", "mp3player-block")}
                  value={bg}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeInput", "bg"),
                    })
                  }
                />
                <ColorControl
                  label={__("Progress Color", "mp3player-block")}
                  value={progressBg}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeInput", "progressBg"),
                    })
                  }
                />
                <ColorControl
                  label={__("Progress Time Color", "mp3player-block")}
                  value={timeBg}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeInput", "timeBg"),
                    })
                  }
                />

                <PanelRow>
                  <Label>{__("Width", "mp3player-block")}</Label>
                  <Device />
                </PanelRow>
                <UnitControl
                  value={width[device]}
                  units={[pxUnit(), perUnit()]}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "rangeInput",
                        "width",
                        device
                      ),
                    })
                  }
                />

                <PanelRow>
                  <Label>{__("Height", "mp3player-block")}</Label>
                  <Device />
                </PanelRow>
                <UnitControl
                  value={height[device]}
                  units={[pxUnit(), perUnit()]}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "rangeInput",
                        "height",
                        device
                      ),
                    })
                  }
                />

                <PanelRow>
                  <Label>{__("Margin", "mp3player-block")}</Label>
                  <Device />
                </PanelRow>
                <BControlPro
                  label=""
                  values={margin[device]}
                  units={[pxUnit(), perUnit()]}
                  onChange={(v) =>
                    setAttributes({
                      style: produce(style, (draft) => {
                        draft.rangeInput.margin[device] = v;
                      }),
                    })
                  }
                  Component={BoxControl}
              {...premiumProps}
                />

                <BControlPro
                  label={__("Border radius", "mp3player-block")}
                  value={radius}
                  allowReset
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeInput", "radius"),
                    })
                  }
                  min={0}
                  max={20}
                  Component={BorderControl}
              {...premiumProps}
                />
              </>
            ) : (
              <>
                <ColorControl
                  label={__("Background", "mp3player-block")}
                  value={thumbBg}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeThumb", "thumbBg"),
                    })
                  }
                />

                <PanelRow>
                  <Label>{__("Width", "mp3player-block")}</Label>
                  <Device />
                </PanelRow>
                <UnitControl
                  value={thumbWidth[device]}
                  units={[pxUnit(), perUnit()]}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "rangeThumb",
                        "thumbWidth",
                        device
                      ),
                    })
                  }
                />
                <BControlPro
                  className="mt15"
                  label={__("Shadow", "mp3player-block")}
                  value={thumbShadow}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeThumb", "thumbShadow"),
                    })
                  }
                  Component={ShadowControl}
              {...premiumProps}
                />

                <BControlPro
                  label={__("Outline", "mp3player-block")}
                  value={thumbOutline}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeThumb", "thumbOutline"),
                    })
                  }
                  defaults={{ radius: "50%" }}
                  Component={BorderControl}
              {...premiumProps}
                />
              </>
            )}
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Controls Button", "mp3player-block")}
            initialOpen={false}
          >
            <PanelRow>
              <Label>{__("Width", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={controlsBtn.width[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "controlsBtn", "width", device),
                })
              }
            />

            <ColorsControl
              label={__("Colors", "mp3player-block")}
              value={controlsBtn.colors}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "controlsBtn", "colors"),
                })
              }
              defaults={{ color: "white", bg: "rgba(163, 162, 164, 0.3)" }}
            />

            <BControlPro
              label={__("Border", "mp3player-block")}
              value={controlsBtn.border}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "controlsBtn", "border"),
                })
              }
              defaults={{ radius: "50%" }}
              Component={BorderControl}
              {...premiumProps}
            />
          </PanelBody>
        </>
      ) : songSl === "oneHaash" ? (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Player Wrapper", "mp3player-block")}
          >
            <PanelRow>
              <Label>{__("Width", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={haashWidth[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "oneHaashPlayer",
                    "haashWidth",
                    device
                  ),
                })
              }
            />

            <PanelRow>
              <Label>{__("Height", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={haashHeight[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "oneHaashPlayer",
                    "haashHeight",
                    device
                  ),
                })
              }
            />
            <BControlPro
              label={__("Border", "mp3player-block")}
              value={haashBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "oneHaashPlayer", "haashBorder"),
                })
              }
              defaults={{ radius: "5px" }}
              Component={BorderControl}
              {...premiumProps}
            />
            <PanelRow>
              <Label>{__("Padding", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <BControlPro
              label=""
              values={hasshPadding[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: produce(style, (draft) => {
                    draft.oneHaashPlayer.hasshPadding[device] = v;
                  }),
                })
              }
              Component={BoxControl}
              {...premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Episode Style", "mp3player-block")}
          >
            <Tab
              options={["title", "sub-title"]}
              value={textSl}
              onChange={(v) =>
                setAttributes({ options: updateData(options, v, "textSl") })
              }
            />
            {textSl === "title" ? (
              <>
                <ColorControl
                  label={__("Color", "mp3player-block")}
                  value={haashTitle.color}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "oneHaashPlayer",
                        "haashTitle",
                        "color"
                      ),
                    })
                  }
                />
                <BControlPro
                  label={__("Typography", "mp3player-block")}
                  value={haashTitle.typo}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "oneHaashPlayer",
                        "haashTitle",
                        "typo"
                      ),
                    })
                  }
                  defaults={{ fontSize: 30 }}
                  Component={Typography}
              {...premiumProps}
                />
              </>
            ) : (
              <>
                <ColorControl
                  label={__("Color", "mp3player-block")}
                  value={haashSubTitle.color}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "oneHaashPlayer",
                        "haashSubTitle",
                        "color"
                      ),
                    })
                  }
                />
                <BControlPro
                  className="mt5"
                  label={__("Opacity", "mp3player-block")}
                  value={haashSubTitle.opacity}
                  allowReset
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "oneHaashPlayer",
                        "haashSubTitle",
                        "opacity"
                      ),
                    })
                  }
                  min={0}
                  max={1}
                  step={0.1}
                  Component={RangeControl}
              {...premiumProps}
                />
                <BControlPro
                  label={__("Typography", "mp3player-block")}
                  value={haashSubTitle.typo}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "oneHaashPlayer",
                        "haashSubTitle",
                        "typo"
                      ),
                    })
                  }
                  defaults={{ fontSize: 20 }}
                  Component={Typography}
              {...premiumProps}
                />
              </>
            )}
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Wave Style", "mp3player-block")}
          >
            <ColorControl
              label={__("Background", "mp3player-block")}
              value={waveBg}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "oneHaashPlayer", "waveBg"),
                })
              }
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Controls Style", "mp3player-block")}
          >
            <ColorControl
              label={__("Input range static Color", "mp3player-block")}
              value={haashInputRange.staticColor}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "oneHaashPlayer",
                    "haashInputRange",
                    "staticColor"
                  ),
                })
              }
            />
            <ColorControl
              label={__("Input range progress Color", "mp3player-block")}
              value={haashInputRange.progressColor}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "oneHaashPlayer",
                    "haashInputRange",
                    "progressColor"
                  ),
                })
              }
            />
          </PanelBody>
        </>
      ) : songSl === "card" ? (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Card Player Style", "mp3player-block")}
          >
            <PanelRow>
              <Label>{__("Width", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={cardWidth[device]}
              units={[pxUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "cardPlayer",
                    "cardWidth",
                    device
                  ),
                })
              }
            />

            <PanelRow>
              <Label>{__("Height", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={cardHeight[device]}
              units={[pxUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "cardPlayer",
                    "cardHeight",
                    device
                  ),
                })
              }
            />
            <PanelRow>
              <Label>{__("Image Height", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={cardImgHeight[device]}
              units={[pxUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "cardPlayer",
                    "cardImgHeight",
                    device
                  ),
                })
              }
            />
            <ColorControl
              label={__("Background", "mp3player-block")}
              value={cardBg}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "cardPlayer", "cardBg"),
                })
              }
            />
            <BControlPro
              label="Shadow"
              value={cardShadow}
              onChange={(val) =>
                setAttributes({
                  style: updateData(style, val, "cardPlayer", "cardShadow"),
                })
              }
              Component={ShadowControl}
              {...premiumProps}
            />
            <BControlPro
              label={__("Border", "mp3player-block")}
              value={cardBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "cardPlayer", "cardBorder"),
                })
              }
              Component={BorderControl}
              {...premiumProps}
            />
            <BControlPro
              className="mt20"
              label={__("Wave", "mp3player-block")}
              value={waveTop}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    -170 + (v - -170),
                    "cardPlayer",
                    "waveTop",
                    device
                  ),
                })
              }
              min={-300}
              max={0}
              step={1}
              Component={RangeControl}
              {...premiumProps}
            />
            <BControlPro
              className="mt10"
              label={__("Wave-2", "mp3player-block")}
              value={wave2Top}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "cardPlayer", "wave2Top", device),
                })
              }
              min={0}
              max={300}
              Component={RangeControl}
              {...premiumProps}
            />
            <BControlPro
              className="mt10"
              label={__("Wave-3", "mp3player-block")}
              value={wave3Top}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "cardPlayer", "wave3Top", device),
                })
              }
              min={0}
              max={300}
              Component={RangeControl}
              {...premiumProps}
            />

            <p className="mt10">Control Alignment</p>
            <Tab
              options={["left", "center", "right"]}
              value={cardAlign[device]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "cardPlayer",
                    "cardAlign",
                    device
                  ),
                })
              }
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Episode Info", "mp3player-block")}
          >
            <Tab
              options={["title", "sub-title"]}
              value={textSl}
              onChange={(v) =>
                setAttributes({ options: updateData(options, v, "textSl") })
              }
            />
            {textSl === "title" ? (
              <>
                <ColorControl
                  label={__("Color", "mp3player-block")}
                  value={cardTitle.color}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "cardPlayer",
                        "cardTitle",
                        "color"
                      ),
                    })
                  }
                />
                <BControlPro
                  label={__("Typography", "mp3player-block")}
                  value={cardTitle.typo}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "cardPlayer",
                        "cardTitle",
                        "typo"
                      ),
                    })
                  }
                  defaults={{ fontSize: 30 }}
                  Component={Typography}
              {...premiumProps}
                />
              </>
            ) : (
              <>
                <ColorControl
                  label={__("Color", "mp3player-block")}
                  value={cardSubTitle.color}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "cardPlayer",
                        "cardSubTitle",
                        "color"
                      ),
                    })
                  }
                />
                <BControlPro
                  className="mt5"
                  label={__("Opacity", "mp3player-block")}
                  value={cardSubTitle.opacity}
                  allowReset
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "cardPlayer",
                        "cardSubTitle",
                        "opacity"
                      ),
                    })
                  }
                  min={0}
                  max={1}
                  step={0.1}
                  Component={RangeControl}
              {...premiumProps}
                />
                <BControlPro
                  label={__("Typography", "mp3player-block")}
                  value={cardSubTitle.typo}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(
                        style,
                        v,
                        "cardPlayer",
                        "cardSubTitle",
                        "typo"
                      ),
                    })
                  }
                  defaults={{ fontSize: 20 }}
                  Component={Typography}
              {...premiumProps}
                />
              </>
            )}
          </PanelBody>
        </>
      ) : songSl === "wooden" ? (

        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Player Wrapper", "mp3player-block")}
          >
            <PanelRow>
              <Label>{__("Width", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={woWidth[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "woodenPlayer",
                    "woWidth",
                    device
                  ),
                })
              }
            />
            <PanelRow>
              <Label>{__("Height", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={woHeight[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "woodenPlayer",
                    "woHeight",
                    device
                  ),
                })
              }
            />
            <ColorControl
              label={__("Background", "mp3player-block")}
              value={woBg}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woBg"),
                })
              }
            />
            <BControlPro
              label="Shadow"
              value={woShadow}
              onChange={(val) =>
                setAttributes({
                  style: updateData(style, val, "woodenPlayer", "woShadow"),
                })
              }
              Component={ShadowControl}
              {...premiumProps}
            />
            <BControlPro
              label={__("Border", "mp3player-block")}
              value={woBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woBorder"),
                })
              }
              Component={BorderControl}
              {...premiumProps}
            />

            <p className="mt10">Alignment</p>
            <Tab
              label={__("Alignment", "mp3player-block")}
              options={["left", "center", "right"]}
              value={woAlign[device]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "woodenPlayer",
                    "woAlign",
                    device
                  ),
                })
              }
            />
            <PanelRow>
              <Label>{__("Padding", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <BControlPro
              label=""
              values={woPadding[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: produce(style, (draft) => {
                    draft.woodenPlayer.woPadding[device] = v;
                  }),
                })
              }
              Component={BoxControl}
              {...premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Controls", "mp3player-block")}
          >
            <div className="colorSchema">
              <p>Controls Background </p>
              <ColorSchema
                attributes={attributes}
                setAttributes={setAttributes}
              />
            </div>
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Title and Time Duration", "mp3player-block")}
          >
            <ColorsControl
              className="mt20"
              label={__("Colors", "mp3player-block")}
              value={woTDColors}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woTDColors"),
                })
              }
              defaults={{ color: "#FFFFFF", bg: "#642E2E" }}
            />
            <BControlPro
              label={__("Typography", "mp3player-block")}
              value={woTDTypo}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woTDTypo"),
                })
              }
              defaults={{ fontSize: 15 }}
              Component={Typography}
              {...premiumProps}
            />
            <BControlPro
              label={__("Border", "mp3player-block")}
              value={woTDBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woTDBorder"),
                })
              }
              defaults={{ radius: 20 }}
              Component={BorderControl}
              {...premiumProps}
            />
          </PanelBody>
        </>
      ) : songSl === "lite" ? (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Player Wrapper", "mp3player-block")}
          >
            <PanelRow>
              <Label>{__("Width", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={liteWidth[device]}
              units={[pxUnit(), perUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "litePlayer",
                    "liteWidth",
                    device
                  ),
                })
              }
            />
            <ColorControl
              className="mt10"
              label={__("Background", "mp3player-block")}
              value={liteBg}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "litePlayer", "liteBg"),
                })
              }
            />

            <BControlPro
              label={__("Border", "mp3player-block")}
              value={liteBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "litePlayer", "liteBorder"),
                })
              }
              defaults={{ radius: "15px" }}
              Component={BorderControl}
              {...premiumProps}
            />

            <PanelRow className="mt20">
              <Label className="">{__("Padding", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <BControlPro
              label=""
              values={litePadding[device]}
              units={[pxUnit()]}
              onChange={(v) =>
                setAttributes({
                  style: produce(style, (draft) => {
                    draft.litePlayer.litePadding[device] = v;
                  }),
                })
              }
              Component={BoxControl}
              {...premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Controls", "mp3player-block")}
          >
            <ColorControl
              className="mt10"
              label={__("Color", "mp3player-block")}
              value={liteControlsBg}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "litePlayer", "liteControlsBg"),
                })
              }
            />
            <ColorControl
              className="mt10"
              label={__("Running Progress Color", "mp3player-block")}
              value={liteRunningProgressBg}
              onChange={(v) =>
                setAttributes({
                  style: updateData(
                    style,
                    v,
                    "litePlayer",
                    "liteRunningProgressBg"
                  ),
                })
              }
            />
            <ColorControl
              className="mt10"
              label={__("Infos Color", "mp3player-block")}
              value={liteInfosColor}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "litePlayer", "liteInfosColor"),
                })
              }
            />
            <BControlPro
              label={__("Infos Typography", "mp3player-block")}
              value={liteControlsTypo}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "litePlayer", "liteControlsTypo"),
                })
              }
              defaults={{ fontSize: 20 }}
              Component={Typography}
              {...premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Playlist", "mp3player-block")}
          >
            <ColorsControl
              className="mt20"
              label={__("Colors", "mp3player-block")}
              value={liteListColors}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "litePlayer", "liteListColors"),
                })
              }
              defaults={{ color: "#1C0568", bg: "#FFFFFF" }}
            />
            <BControlPro
              className="mt10"
              label={__("Border", "mp3player-block")}
              value={liteListBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "litePlayer", "liteListBorder"),
                })
              }
              defaults={{ radius: 5 }}
              Component={BorderControl}
              {...premiumProps}
            />
          </PanelBody>
        </>
      ) : (
        "No style"
      )}
    </>
  );
};

export default Styles;
