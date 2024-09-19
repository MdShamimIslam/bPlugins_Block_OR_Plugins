import { useEffect, useRef } from "react";

const Layout = ({ attributes }) => {
  const { slides, slideOptions } = attributes;
  const {
    transitionType,
    transitionDuration,
    enableControl,
    enablePager,
    autoSlide,
    intervalTime,
  } = slideOptions;

  const sliderRef = useRef();
  let sliderInstance = useRef(null);

  useEffect(() => {
    const initializeSlider = () => {
      if (window.jQuery && jQuery.fn.bxSlider) {
        if (sliderInstance.current) {
          sliderInstance.current.destroySlider();
        }

        sliderInstance.current = jQuery(sliderRef.current).bxSlider({
          mode: transitionType || "horizontal",
          speed: transitionDuration || 500,
          controls: enableControl || false,
          pager: enablePager,
          auto: autoSlide || false,
          pause: intervalTime || 2000,
          responsive: true,
          slideWidth: 800,
        });
      }
    };

    const images = sliderRef.current?.querySelectorAll("img");
    const imageLoadPromises = Array.from(images).map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = resolve;
            img.onerror = resolve;
          }
        })
    );

    Promise.all(imageLoadPromises).then(() => {
      initializeSlider();
    });

    return () => {
      if (sliderInstance.current) {
        sliderInstance.current.destroySlider();
      }
    };
  }, [
    slides,
    transitionType,
    transitionDuration,
    enableControl,
    enablePager,
    autoSlide,
    intervalTime,
  ]);

  return (
    <div ref={sliderRef} className="bxslider">
      {slides.map((slide, index) => (
        <img key={index} src={slide.url} alt={`slide-${index + 1}`} />
      ))}
    </div>
  );
};

export default Layout;
