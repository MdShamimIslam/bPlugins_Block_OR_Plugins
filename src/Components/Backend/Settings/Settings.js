import { useState } from "react";
import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { generalStyleTabs } from "../../../utils/options";
import { tabController } from "../../../../../bpl-tools/utils/functions";
import { AboutProModal } from "../../../../../bpl-tools/ProControls";
import General from "./General/General";
import Styles from "./Style/Styles";
import { __ } from "@wordpress/i18n";
import { usePremiumInEditor } from "../../../../../bpl-tools/hooks";

const Settings = ({
  attributes,
  setAttributes,
  activeIndex,
  setActiveIndex,
  device,
}) => {
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const { isPremium } = usePremiumInEditor("bpmpUtils", "bpmpPremiumChecker");

  const premiumProps = {
    isPremium,
    setIsProModalOpen,
  };

  return (
    <>
      <InspectorControls>
        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <>
                  <General
                    attributes={attributes}
                    setAttributes={setAttributes}
                    device={device}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    premiumProps={premiumProps}
                  />
                </>
              )}
              {"style" === tab.name && (
                <>
                  <Styles
                    attributes={attributes}
                    setAttributes={setAttributes}
                    device={device}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    premiumProps={premiumProps}
                  />
                </>
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <AboutProModal
        isProModalOpen={isProModalOpen}
        setIsProModalOpen={setIsProModalOpen}
        link="https://bplugins.com/products/audio-player-block/#pricing"
      >
        <li>
          <strong>
            {__(
              "Customize Your Audio Player with 5 Different Themes: ",
              "mp3player-block"
            )}
          </strong>
          {__(
            "Add 5 new themes with different looks and settings.",
            "mp3player-block"
          )}
        </li>

        <li>
          <strong>
            {__("Include some incredible options: ", "mp3player-block")}
          </strong>
          {__(
            "Add feature of each themes like autoplay, social link, range thumb and a lot of things.",
            "mp3player-block"
          )}
        </li>

        <li>
          <strong>
            {__("Show/Hide all the options: ", "mp3player-block")}
          </strong>
          {__("Can show/hide all the options indivisually.", "mp3player-block")}
        </li>

        <li>
          <strong>{__("Added some animation: ", "mp3player-block")}</strong>
          {__(
            "On card theme we have added some awesome animation and you can also customize these animation on your own.",
            "mp3player-block"
          )}
        </li>

        <li>
          <strong>
            {__("Set position of music controller: ", "mp3player-block")}
          </strong>
          {__(
            "Set position of controller dynamically like (left, center, right).",
            "mp3player-block"
          )}
        </li>

        <li>
          <strong>
            {__(
              "Edit all the stuff that include on themes: ",
              "mp3player-block"
            )}
          </strong>
          {__(
            "You can edit and customize all the stuff that include on all themes dynamically.",
            "mp3player-block"
          )}
        </li>
        <li>
          <strong>{__("Style themes dynimacally: ", "mp3player-block")}</strong>
          {__(
            "Style themes like shadow, background, padding, icon size, border etc.",
            "mp3player-block"
          )}
        </li>
        <li>
          <strong>
            {__("Add Shortcode Functionality: ", "mp3player-block")}
          </strong>
          {__("Add this block anywhere with shortcode.", "mp3player-block")}
        </li>
      </AboutProModal>
    </>
  );
};
export default Settings;
