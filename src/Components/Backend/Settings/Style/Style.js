import {
  PanelBody,
  PanelRow,
  RangeControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  BorderControl,
  ColorsControl,
  Label,
  Typography,
} from "../../../../../../Components";
import { Device } from "../../../../../../Components/Device/Device";
import { pxUnit, perUnit } from "../../../../../../Components/utils/options";
import { updateData } from "../../../../utils/functions";
import { Tab } from "../../Tab/Tab";
import { BBoxControl } from "../../BBoxControl/BBoxControl";

const Style = ({ attributes, setAttributes, device }) => {
  const { layout, options } = attributes;
  const { alignSl } = options;
  const { isDeviceMotion } = options.panolens;
  const { width, height, border, margin, padding, button } = layout;
  const { typo, textAlign, colors, btnWidth, alignment } = button;
  

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Image Viewer Style", "b-blocks")}
      >
        <PanelRow>
          <Label>{__("Width", "b-blocks")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={width[device]}
          units={[pxUnit(), perUnit()]}
          onChange={(v) =>
            setAttributes({
              layout: updateData(layout, v, "width", device),
            })
          }
        />
        <PanelRow>
          <Label>{__("Height", "b-blocks")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={height[device]}
          units={[pxUnit()]}
          onChange={(v) =>
            setAttributes({
              layout: updateData(layout, v, "height", device),
            })
          }
        />
        <PanelRow>
          <Label>{__("Alignment", "b-blocks")}</Label>
          <Device />
        </PanelRow>
        <Tab
          options={["start", "center", "end"]}
          value={alignSl[device]}
          onChange={(v) =>
            setAttributes({
              options: updateData(options, v, "alignSl", device),
            })
          }
        />

        <BorderControl
          label={__("Border", "b-blocks")}
          value={border}
          onChange={(v) =>
            setAttributes({
              layout: updateData(layout, v, "border"),
            })
          }
        />
      </PanelBody>
      {isDeviceMotion && (
        <PanelBody
          title={__("Device Motion Button", "b-blocks")}
          initialOpen={false}
        >
          <ColorsControl
            label={__("Colors", "b-blocks")}
            value={colors}
            onChange={(val) =>
              setAttributes({
                layout: updateData(layout, val, "button", "colors"),
              })
            }
            defaults={{ color: "white", bg: "#5A1C81" }}
          />
          <PanelRow>
            <Label>{__("Width", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <RangeControl
            value={btnWidth[device]}
            allowReset
            onChange={(v) =>
              setAttributes({
                layout: updateData(layout, v, "button", "btnWidth", device),
              })
            }
            min={1}
            max={300}
          />

          <Typography
            label={__("Typography", "b-blocks")}
            value={typo}
            onChange={(v) =>
              setAttributes({
                layout: updateData(layout, v, "button", "typo"),
              })
            }
            defaults={{ fontSize: 18 }}
          />

          <PanelRow>
            <Label>{__("Alignment", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <Tab
            options={["start", "center", "end"]}
            value={alignment[device]}
            onChange={(v) =>
              setAttributes({
                layout: updateData(layout, v, "button", "alignment", device),
              })
            }
          />

          <PanelRow>
            <Label>{__("Text Align", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <Tab
            options={["left", "right", "center", "justify"]}
            value={textAlign[device]}
            onChange={(val) =>
              setAttributes({
                layout: updateData(layout, val, "button", "textAlign", device),
              })
            }
          />

          {/* <PanelRow>
            <Label>{__("Horizontal Align", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <Tab
            options={["start", "center", "end"]}
            value={horizontalAlign[device]}
            onChange={(val) =>
              setAttributes({
                layout: updateData(
                  layout,
                  val,
                  "button",
                  "horizontalAlign",
                  device
                ),
              })
            }
          /> */}

          {/* <PanelRow>
            <Label>{__("Vertical Align", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <Tab
            options={["top", "middle", "bottom"]}
            value={verticalAlign[device]}
            onChange={(val) =>
              setAttributes({
                layout: updateData(
                  layout,
                  val,
                  "button",
                  "verticalAlign",
                  device
                ),
              })
            }
          /> */}

          <PanelRow>
            <Label>{__("Margin", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <BBoxControl
            label=""
            values={margin[device]}
            onChange={(val) =>
              setAttributes({
                layout: updateData(layout, val, "margin", device),
              })
            }
          />

          <PanelRow>
            <Label>{__("Padding", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <BBoxControl
            label=""
            values={padding[device]}
            onChange={(val) =>
              setAttributes({
                layout: updateData(layout, val, "padding", device),
              })
            }
          ></BBoxControl>
        </PanelBody>
      )}
    </>
  );
};

export default Style;
