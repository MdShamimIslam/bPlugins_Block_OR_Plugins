import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import OneHaashPlayer from "../Common/OneHassPlayer/OneHaashPlayer";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksAudioPlayerTheme">
          <OneHaashPlayer />
        </div>
      </div>
    </>
  );
};
export default Edit;
