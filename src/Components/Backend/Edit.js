import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import { BplMediaPlaceholder } from "../../../../Components";
import ImageViewer from "../Common/ImageViewer";
import PanoramicImageViewer from "../Common/PanoramicImageViewer";
import Style from "../Common/Style";
import Settings from "./Settings/Settings";
import { updateData } from "../../utils/functions";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, isSelected } = props;
  const { imageUrl } = attributes;
  const { viewerSl } = attributes.options;
  return (
    <>
      <Settings {...{ attributes, setAttributes }} device={device} />

      <div {...useBlockProps()}>
        <Style
          attributes={attributes}
          id={`block-${clientId}`}
          device={device}
        />

        {!isSelected && <div className="bPlBlockBeforeSelect"></div>}

        {imageUrl ? (
          <div 
          className="bBlocksImageViewer"
          >
            {viewerSl !== "360°" ? (
              <PanoramicImageViewer attributes={attributes} />
            ) : (
              <ImageViewer attributes={attributes} />
            )}
          </div>
        ) : (
          <BplMediaPlaceholder
            placeholder={__("Paste or type a image URL", "b-blocks")}
            onChange={({ url }) =>
              setAttributes({ imageUrl: updateData(imageUrl, url) })
            }
          />
        )}
      </div>
    </>
  );
};
export default withSelect((select) => {
  return {
    device: select("core/edit-post")
      .__experimentalGetPreviewDeviceType()
      ?.toLowerCase(),
  };
})(Edit);
