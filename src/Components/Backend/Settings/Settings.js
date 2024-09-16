import {
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { tabController } from "../../../../../Components/utils/functions";

import { generalStyleTabs } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";

const Settings = ({ attributes, setAttributes,device}) => {
  const { alignment } = attributes;

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

        <TabPanel
          className="bPlTabPanel"
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
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Content Slider Alignment")}
          alignmentControls={[
            {
              title: __("Left", "content-slider"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Center", "content-slider"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Right", "content-slider"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />
      </BlockControls>
    </>
  );
};
export default Settings;
