import AudioSlider from "../../FrontEnd/AudioSlider";
import SliderStyle from "../SliderStyle";

const SliderAudio = ({attributes,id ,device}) => {
  return (
    <>
    <SliderStyle attributes={attributes} id={id} device={device} /> 
    <AudioSlider attributes={attributes} />
    </>
  )
}

export default SliderAudio;