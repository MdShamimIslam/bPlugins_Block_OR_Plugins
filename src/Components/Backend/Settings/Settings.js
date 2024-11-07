import {
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { tabController } from "../../../../../Components/utils/functions";
import { updateData } from "../../../utils/functions";
import { generalStyleTabs } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";

const Settings = ({ attributes, setAttributes, device }) => {
  const { imageUrl, options } = attributes;
  const { alignSl } = options;

  return (
    <>
      <InspectorControls>
        <div className="bBlocksInspectorInfo">
          Need more block like this? Checkout the bundle ➡{" "}
          <a
            href="https://wordpress.org/plugins/b-blocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            B Blocks
          </a>
        </div>
        {imageUrl && (
          <TabPanel
            className="bPlTabPanel wp-block-b-blocks-panoramic-image-viewer"
            activeClass="activeTab"
            tabs={generalStyleTabs}
            onSelect={tabController}
          >
            {(tab) => (
              <>
                {"general" === tab.name && (
                  <General
                    attributes={attributes}
                    setAttributes={setAttributes}
                  />
                )}

                {"style" === tab.name && (
                  <Style
                    attributes={attributes}
                    setAttributes={setAttributes}
                    device={device}
                  />
                )}
              </>
            )}
          </TabPanel>
        )}
      </InspectorControls>
      {imageUrl && (
        <BlockControls>
          <AlignmentToolbar
            value={alignSl[device]}
            onChange={(val) =>
              setAttributes({
                options: updateData(options, val, "alignSl", device),
              })
            }
            describedBy={__("Panoramic Image Viewer Alignment")}
            alignmentControls={[
              {
                title: __("Panoramic Image Viewer in start", "b-blocks"),
                align: "start",
                icon: "align-left",
              },
              {
                title: __("Panoramic Image Viewer in center", "b-blocks"),
                align: "center",
                icon: "align-center",
              },
              {
                title: __("Panoramic Image Viewer in end", "b-blocks"),
                align: "end",
                icon: "align-right",
              },
            ]}
          />
        </BlockControls>
      )}
    </>
  );
};
export default Settings;
