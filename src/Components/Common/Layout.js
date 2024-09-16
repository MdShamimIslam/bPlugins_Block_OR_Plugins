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
    <div className="bBlocksContentSlider">
      <div ref={sliderRef} className="bxslider">
        {slides.map((slide, index) => (
          <div key={index} className="imgContainer">
            <img src={slide.url} alt={`slide-${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Layout;
