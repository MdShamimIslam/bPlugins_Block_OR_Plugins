import React, { useState } from "react";

import WoodenPlayer from "./WoodenPlayer";
import WoodenPlayerStyle from "./WoodenPlayerStyle";

const Wooden = ({ attributes, id, device }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <WoodenPlayerStyle attributes={attributes} id={id} device={device} />
      <WoodenPlayer
        attributes={attributes}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
};

export default Wooden;
