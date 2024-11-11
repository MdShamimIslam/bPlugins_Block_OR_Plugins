import { MediaUpload } from "@wordpress/block-editor";
import {
  Button,
  PanelBody,
  RangeControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../../utils/functions";
import { Tab } from "../../Tab/Tab";

const General = ({ attributes, setAttributes }) => {
  const { imageUrl, options } = attributes;
  const {
    viewerSl,
    autoLoad,
    showZoomCtrl,
    draggable,
    mouseZoom,
    showFullscreenCtrl,
    pitch,
    hfov,
    disableKeyboardCtrl,
    doubleClickZoom,
    autoRotate: autoRotateP,
    compass,
    panolens,
    autoRotateInactivityDelay,
  } = options;
  const {
    autoRotate,
    autoRotateSpeed,
    cameraFov,
    fullscreen,
    setting,
    autoRotateActivationDuration,
    isDeviceMotion
  } = panolens;

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("View Adjustment Controls", "b-blocks")}
    >
      <p>Choose Image Viewer</p>
      <Tab
        options={["3D", "360°"]}
        value={viewerSl}
        onChange={(v) =>
          setAttributes({ options: updateData(options, v, "viewerSl") })
        }
      />

      <div className="thumbnail mb10 mt15">
        <TextControl
          label={__("Image URL", "b-blocks")}
          placeholder={__("Enter or upload image url", "b-blocks")}
          value={imageUrl}
          onChange={(v) => setAttributes({ imageUrl: updateData(imageUrl, v) })}
        />
        <MediaUpload
          onSelect={(v) =>
            setAttributes({ imageUrl: updateData(imageUrl, v?.url) })
          }
          render={({ open }) => (
            <Button
              className="mediaBtn"
              onClick={open}
              icon={"upload f317"}
            ></Button>
          )}
        />
      </div>

      {viewerSl === "360°" ? (
        <>
          <ToggleControl
            checked={autoLoad}
            label={__("Auto Load", "b-blocks")}
            onChange={(v) =>
              setAttributes({ options: updateData(options, v, "autoLoad") })
            }
          />
          <ToggleControl
            className="mt5"
            checked={draggable}
            label={__("Draggable", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "draggable"),
              })
            }
          />
          <ToggleControl
            className="mt5"
            checked={mouseZoom}
            label={__("Mouse Zoom", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "mouseZoom"),
              })
            }
          />
          <ToggleControl
            className="mt5"
            checked={disableKeyboardCtrl}
            label={__("Disable Keyboard Control", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "disableKeyboardCtrl"),
              })
            }
          />
          <ToggleControl
            className="mt5"
            checked={doubleClickZoom}
            label={__("Double Click Zoom", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "doubleClickZoom"),
              })
            }
          />
          <ToggleControl
            className="mt5"
            checked={showZoomCtrl}
            label={__("Zoom Control", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "showZoomCtrl"),
              })
            }
          />
          <ToggleControl
            className="mt5"
            checked={showFullscreenCtrl}
            label={__("Full Screen Control ", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "showFullscreenCtrl"),
              })
            }
          />
          <ToggleControl
            className="mt5"
            checked={compass}
            label={__("Compass", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "compass"),
              })
            }
          />
          <RangeControl
            className="mt20"
            label={__("Auto Rotate", "b-blocks")}
            value={autoRotateP}
            allowReset
            onChange={(v) =>
              setAttributes({ options: updateData(options, v, "autoRotate") })
            }
            min={0}
            max={10}
            step={0.1}
          />
          {autoRotateP !== 0 && (
            <RangeControl
              className="mt20"
              label={__("Auto Rotate Inactivity Delay", "b-blocks")}
              value={autoRotateInactivityDelay}
              allowReset
              onChange={(v) =>
                setAttributes({
                  options: updateData(options, v, "autoRotateInactivityDelay"),
                })
              }
              min={0}
              max={60000}
              step={1000}
            />
          )}
          <RangeControl
            className="mt20"
            label={__("Skyward Tilt Control", "b-blocks")}
            value={pitch}
            allowReset
            onChange={(v) =>
              setAttributes({ options: updateData(options, v, "pitch") })
            }
            min={-90}
            max={90}
          />
          <RangeControl
            className="mt20"
            label={__("Wide Angle Zoomer", "b-blocks")}
            value={hfov}
            allowReset
            onChange={(v) =>
              setAttributes({ options: updateData(options, v, "hfov") })
            }
            min={60}
            max={120}
          />
        </>
      ) : (
        <>
          <ToggleControl
            className="mt5"
            checked={isDeviceMotion}
            label={__("Device Motion Button", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "panolens", "isDeviceMotion"),
              })
            }
          />
          <ToggleControl
            className="mt5"
            checked={autoRotate}
            label={__("Auto Rotate", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "panolens", "autoRotate"),
              })
            }
          />

          {autoRotate && (
            <>
              <RangeControl
                className="mt20"
                label={__("Auto Rotate Speed", "b-blocks")}
                value={autoRotateSpeed}
                allowReset
                onChange={(v) =>
                  setAttributes({
                    options: updateData(
                      options,
                      v,
                      "panolens",
                      "autoRotateSpeed"
                    ),
                  })
                }
                min={0}
                max={10}
                step={0.1}
              />
              <RangeControl
                className="mt20"
                label={__("Auto Rotate Activation Duration", "b-blocks")}
                value={autoRotateActivationDuration}
                allowReset
                onChange={(v) =>
                  setAttributes({
                    options: updateData(
                      options,
                      v,
                      "panolens",
                      "autoRotateActivationDuration"
                    ),
                  })
                }
                min={0}
                max={60000}
                step={1000}
              />
            </>
          )}

          <ToggleControl
            className={autoRotate ? "mt20" : "mt5"}
            checked={fullscreen}
            label={__("Full Screen Control Icon", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "panolens", "fullscreen"),
              })
            }
          />
          <ToggleControl
            className="mt5"
            checked={setting}
            label={__("Setting Control Icon", "b-blocks")}
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "panolens", "setting"),
              })
            }
          />
          <RangeControl
            className="mt20"
            label={__("Camera Field of View", "b-blocks")}
            value={cameraFov}
            allowReset
            onChange={(v) =>
              setAttributes({
                options: updateData(options, v, "panolens", "cameraFov"),
              })
            }
            min={30}
            max={120}
          />
        </>
      )}
    </PanelBody>
  );
};

export default General;
