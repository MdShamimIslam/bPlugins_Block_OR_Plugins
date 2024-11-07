import { useEffect, useRef, useState } from "react";
const PanoramicImageViewer = ({ attributes }) => {
  const { imageUrl, options } = attributes;
  const {
    autoRotate,
    autoRotateSpeed,
    cameraFov,
    fullscreen,
    setting,
    autoRotateActivationDuration,
    isDeviceMotion,
  } = options.panolens;

  const imageContainerRef = useRef(null);
  const [isDeviceMotionActive, setIsDeviceMotionActive] = useState(false);
  const viewerRef = useRef(null);

  useEffect(() => {
    const { PANOLENS } = window;
    const panorama = new PANOLENS.ImagePanorama(imageUrl);

    const controlButtons = [
      ...(fullscreen ? ["fullscreen"] : []),
      ...(setting ? ["setting"] : []),
    ];

    viewerRef.current = new PANOLENS.Viewer({
      container: imageContainerRef.current,
      autoRotate,
      autoRotateSpeed,
      controlButtons,
      cameraFov,
      autoRotateActivationDuration,
    });

    viewerRef.current.add(panorama);

    return () => {
      viewerRef.current.dispose();
    };
  }, [
    imageUrl,
    autoRotate,
    autoRotateSpeed,
    cameraFov,
    fullscreen,
    setting,
    autoRotateActivationDuration,
    isDeviceMotion,
  ]);

  const handleDeviceMotionToggle = () => {
    setIsDeviceMotionActive((prev) => !prev);
   
  };

  const handleDeviceOrientation = (event) => {
    const { alpha, beta, gamma } = event;

    if (viewerRef.current && viewerRef.current.camera) {
      viewerRef.current.camera.rotation.set(
        THREE.Math.degToRad(beta),
        THREE.Math.degToRad(alpha),
        THREE.Math.degToRad(-gamma)
      );
    }
  };

  useEffect(() => {
    if (isDeviceMotionActive) {
      viewerRef.current?.enableControl(
				window.PANOLENS.CONTROLS.DEVICEORIENTATION,
			);
      if (
        typeof window.DeviceOrientationEvent?.requestPermission === "function"
      ) {
        window.DeviceOrientationEvent?.requestPermission()
          .then((response) => {
            if (response === "granted") {
              window.addEventListener(
                "deviceorientation",
                handleDeviceOrientation
              );
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }
    } else {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      viewerRef.current?.enableControl(
				window.PANOLENS.CONTROLS.ORBIT,
			);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [isDeviceMotionActive]);

  return (
    <div
      ref={imageContainerRef}
      className="panoramaImgViewer"
      key={`${imageUrl}-${autoRotate}-${autoRotateSpeed}-${cameraFov}-${fullscreen}-${setting}-${autoRotateActivationDuration}-${isDeviceMotion}`}
    >
      {isDeviceMotion && (
        <button className="btn" onClick={handleDeviceMotionToggle}>
          {isDeviceMotionActive  ? "Stop Device Motion" : "Start Device Motion"}
        </button>
      )}
    </div>
  );
};

export default PanoramicImageViewer;
