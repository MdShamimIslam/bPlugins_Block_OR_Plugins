import LitePlayer from "./LitePlayer";
import LitePlayerStyle from "./LitePlayerStyle";
import { useState} from "react";

const LiteAudioPlayer = ({attributes, id, device}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="LiteAudioPlayer">
      <LitePlayerStyle attributes={attributes} id={id} device={device} />
      <LitePlayer attributes={attributes} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}  />
    </div>
  );
};

export default LiteAudioPlayer;
