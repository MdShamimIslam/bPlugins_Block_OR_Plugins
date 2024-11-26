import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  SelectControl,
  __experimentalUnitControl as UnitControl,
  RangeControl,
} from "@wordpress/components";
import {
  BColor,
  BorderControl,
  Label,
  MultiShadowControl,
  Typography,
  ColorsControl,
} from "../../../../../../Components";
import { Device } from "../../../../../../Components/Device/Device";
import { updateData } from "../../../../utils/functions";
import { BBoxControl } from "../../../BBoxControl/BBoxControl";
import { musicAlignOptions } from "../../../../utils/options";
import { produce } from "immer";
import { perUnit, pxUnit } from "../../../../../../Components/utils/options";
import { Tab } from "./Tab";
import ColorSchema from "../../ColorSchema/ColorSchema";

const Styles = ({ attributes, setAttributes, device }) => {
  const { style, options } = attributes;
  const { songSl, textSl, rangeSl, isOverlayIcon } = options;
  const {
    align,
    musicSlider,
    musicTitle,
    musicName,
    rangeInput,
    rangeThumb,
    controlsBtn,
    oneHaashPlayer,
    cardPlayer,
    woodenPlayer,
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

  return (
    <>
      {songSl === "slider" ? (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Audio Player Wrapper", "mp3player-block")}
          >
            <PanelRow>
              <Label>{__("Alignment", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <SelectControl
              value={align[device]}
              options={musicAlignOptions}
              onChange={(v) =>
                setAttributes({ style: updateData(style, v, "align", device) })
              }
            />

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

            <BColor
              label={__("Background", "mp3player-block")}
              value={style.bg}
              onChange={(v) =>
                setAttributes({ style: updateData(style, v, "bg") })
              }
            />

            <BorderControl
              label={__("Border", "mp3player-block")}
              value={style.border}
              onChange={(v) =>
                setAttributes({ style: updateData(style, v, "border") })
              }
              defaults={{ radius: "5px" }}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Audio Slider", "mp3player-block")}
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
              <BColor
                label={__("Overlay Background", "mp3player-block")}
                value={overlayBg}
                onChange={(v) =>
                  setAttributes({
                    style: updateData(style, v, "musicSlider", "overlayBg"),
                  })
                }
              />
            )}

            <BorderControl
              label={__("Border", "mp3player-block")}
              value={border}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "musicSlider", "border"),
                })
              }
              defaults={{ radius: "3px" }}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Audio Player", "mp3player-block")}
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
                <BColor
                  label={__("Color", "mp3player-block")}
                  value={musicTitle.color}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicTitle", "color"),
                    })
                  }
                />
                <Typography
                  label={__("Typography", "mp3player-block")}
                  value={musicTitle.typo}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicTitle", "typo"),
                    })
                  }
                  defaults={{ fontSize: 30 }}
                />
              </>
            ) : (
              <>
                <BColor
                  label={__("Color", "mp3player-block")}
                  value={musicName.color}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicName", "color"),
                    })
                  }
                />
                <RangeControl
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
                />
                <Typography
                  label={__("Typography", "mp3player-block")}
                  value={musicName.typo}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "musicName", "typo"),
                    })
                  }
                  defaults={{ fontSize: 20 }}
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
                <BColor
                  label={__("Static Background", "mp3player-block")}
                  value={bg}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeInput", "bg"),
                    })
                  }
                />
                <BColor
                  label={__("Progress Background", "mp3player-block")}
                  value={progressBg}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeInput", "progressBg"),
                    })
                  }
                />
                <BColor
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
                <BBoxControl
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
                />

                <RangeControl
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
                />
              </>
            ) : (
              <>
                <BColor
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
                <MultiShadowControl
                  className="mt15"
                  label={__("Shadow", "mp3player-block")}
                  value={thumbShadow}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeThumb", "thumbShadow"),
                    })
                  }
                />

                <BorderControl
                  label={__("Outline", "mp3player-block")}
                  value={thumbOutline}
                  onChange={(v) =>
                    setAttributes({
                      style: updateData(style, v, "rangeThumb", "thumbOutline"),
                    })
                  }
                  defaults={{ radius: "50%" }}
                />
              </>
            )}
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Audio Controls Button", "mp3player-block")}
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

            <BorderControl
              label={__("Border", "mp3player-block")}
              value={controlsBtn.border}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "controlsBtn", "border"),
                })
              }
              defaults={{ radius: "50%" }}
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
            <BorderControl
              label={__("Border", "mp3player-block")}
              value={haashBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "oneHaashPlayer", "haashBorder"),
                })
              }
              defaults={{ radius: "5px" }}
            />
            <PanelRow>
              <Label>{__("Padding", "mp3player-block")}</Label>
              <Device />
            </PanelRow>
            <BBoxControl
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
                <BColor
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
                <Typography
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
                />
              </>
            ) : (
              <>
                <BColor
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
                <RangeControl
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
                />
                <Typography
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
                />
              </>
            )}
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Wave Style", "mp3player-block")}
          >
            <BColor
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
            <BColor
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
            <BColor
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
            <BColor
              label={__("Background", "mp3player-block")}
              value={cardBg}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "cardPlayer", "cardBg"),
                })
              }
            />
            <MultiShadowControl
              label="Shadow"
              value={cardShadow}
              onChange={(val) =>
                setAttributes({
                  style: updateData(style, val, "cardPlayer", "cardShadow"),
                })
              }
            />
            <BorderControl
              label={__("Border", "mp3player-block")}
              value={cardBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "cardPlayer", "cardBorder"),
                })
              }
            />
            <RangeControl
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
            />
            <RangeControl
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
            />
            <RangeControl
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
                <BColor
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
                <Typography
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
                />
              </>
            ) : (
              <>
                <BColor
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
                <RangeControl
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
                />
                <Typography
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
            <BColor
              label={__("Background", "mp3player-block")}
              value={woBg}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woBg"),
                })
              }
            />
            <MultiShadowControl
              label="Shadow"
              value={woShadow}
              onChange={(val) =>
                setAttributes({
                  style: updateData(style, val, "woodenPlayer", "woShadow"),
                })
              }
            />
            <BorderControl
              label={__("Border", "mp3player-block")}
              value={woBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woBorder"),
                })
              }
            />
            <p className="mt10">Alignment</p>
            <Tab
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
            <BBoxControl
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
              defaults={{ color: "white", bg: "rgba(163, 162, 164, 0.3)" }}
            />
            <Typography
              label={__("Typography", "mp3player-block")}
              value={woTDTypo}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woTDTypo"),
                })
              }
              defaults={{ fontSize: 15 }}
            />
            <BorderControl
              label={__("Border", "mp3player-block")}
              value={woTDBorder}
              onChange={(v) =>
                setAttributes({
                  style: updateData(style, v, "woodenPlayer", "woTDBorder"),
                })
              }
              defaults={{ radius: 20 }}
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
