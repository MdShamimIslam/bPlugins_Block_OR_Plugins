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
  device
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
        link="https://bplugins.com/products/advance-custom-html/#pricing"
      >
        <li>
          &emsp;
          <strong>
            {__("Set Audio Player Padding : ", "mp3player-block")}
          </strong>
          {__(
            "By adding this feature you can customize padding of the player.",
            "mp3player-block"
          )}
        </li>
      </AboutProModal>
    </>
  );
};
export default Settings;
