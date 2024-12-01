import React from "react";
import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { generalStyleTabs } from "../../../utils/options";
import { tabController } from "../../../../../Components/utils/functions";
import { AboutPro } from "../../../../../Components/Pro";
import General from "./General/General";
import Styles from "./Style/Styles";

const Settings = ({
  attributes,
  setAttributes,
  activeIndex,
  setActiveIndex,
  device,
  isPremium,
  setOpen,
  open,
}) => {
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
                    {...{ attributes, setAttributes }}
                    device={device}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </>
              )}
              {"style" === tab.name && (
                <>
                  <Styles
                    {...{ attributes, setAttributes, device }}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
					isPremium={isPremium}
					setOpen={setOpen}
                  />
                </>
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>
      <AboutPro
        aboutProOpen={open}
        setAboutProOpen={setOpen}
        link="https://checkout.freemius.com/plugin/17215/plan/28698/"
      >
        <li>Add Audio Player Background</li>
        <li>Add Audio Player Padding</li>
      </AboutPro>
    </>
  );
};
export default Settings;
