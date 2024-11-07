import { useEffect, useRef } from "react";

const ImageViewer = ({ attributes }) => {
  const { imageUrl, options } = attributes;
  const {
    autoLoad,
    showZoomCtrl,
    draggable,
    mouseZoom,
    showFullscreenCtrl,
    pitch,
    hfov,
    disableKeyboardCtrl,
    doubleClickZoom,
    autoRotate,
    compass,
    autoRotateInactivityDelay,
  } = options;

  const panoramaRef = useRef(null);

  useEffect(() => {
    const {pannellum} = window;

    if (pannellum && panoramaRef.current) {
      const viewer = pannellum.viewer(panoramaRef.current, {
        type: "equirectangular",
        panorama: imageUrl,
        autoLoad,
        showZoomCtrl,
        draggable,
        mouseZoom,
        showFullscreenCtrl,
        pitch,
        hfov,
        disableKeyboardCtrl,
        doubleClickZoom,
        autoRotate,
        compass,
        autoRotateInactivityDelay,
      });

      return () => {
        viewer.destroy();
      };
    }
  }, [
    imageUrl,
    autoLoad,
    showZoomCtrl,
    draggable,
    mouseZoom,
    showFullscreenCtrl,
    pitch,
    hfov,
    disableKeyboardCtrl,
    doubleClickZoom,
    autoRotate,
    compass,
    autoRotateInactivityDelay,
  ]);

  return <div ref={panoramaRef} id="panorama" className="panoramaImgViewer" />;
};

export default ImageViewer;
