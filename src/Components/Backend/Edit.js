import { useEffect } from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { tabController } from "../../../../Components/utils/functions";
import { withSelect } from '@wordpress/data';

import Layout from "../Common/Layout";
import Settings from "./Settings/Settings";

const Edit = (props) => {
  const { attributes, setAttributes, isSelected,device } = props;
  const { slides } = attributes;

  useEffect(() => tabController(), [isSelected, slides]);

  return (
    <div {...useBlockProps()}>
      <Settings {...{ attributes, setAttributes, device }} />
	
      <Layout attributes={attributes} />

    </div>
  );
};

export default withSelect((select) => {

	return {
		device: select('core/edit-post').__experimentalGetPreviewDeviceType()?.toLowerCase()
	}
})(Edit);
