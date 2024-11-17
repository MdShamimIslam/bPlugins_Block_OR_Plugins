import { useState } from "react";
import OneHaashPlayer from "../Common/OneHaashPlayer/OneHaashPlayer";
import OneHaashStyle from "../Common/OneHaashPlayer/OneHaashStyle";

const OneHaash = ({ attributes, id }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <OneHaashStyle attributes={attributes} id={id} />
      <OneHaashPlayer
        attributes={attributes}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
};

export default OneHaash;
