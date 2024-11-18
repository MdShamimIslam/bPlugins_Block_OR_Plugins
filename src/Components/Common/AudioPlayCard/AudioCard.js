import { useState } from "react";

import AudioPlayCard from "./AudioPlayCard";
import AudioPlayCardStyle from "./AudioPlayCardStyle";

const AudioCard = ({ attributes, id, device }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="audioCardPlayer">
    <AudioPlayCardStyle attributes={attributes} id={id} device={device} />
      <AudioPlayCard
        attributes={attributes}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default AudioCard;
