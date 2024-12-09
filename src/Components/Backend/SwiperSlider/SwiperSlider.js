import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaYoutube } from '../../../utils/icons';

const defaultImg = "https://i.ibb.co/1qDChXj/cassette-tape-square.jpg";

const SwiperSlider = forwardRef(({ playTrack, attributes }, ref) => {
  const { audioProperties, options } = attributes;
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  useImperativeHandle(ref, () => ({
    slideTo(index) {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    },
  }));


  return <div className="slider">
    <Swiper
      modules={[EffectCoverflow, A11y]}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      onSwiper={(swiper) => { swiperRef.current = swiper; }}
      onActiveIndexChange={(val) => { setActiveSlide(val.activeIndex); playTrack(val.activeIndex) }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={50}
      slidesPerView={3}
    >
      {audioProperties.map((music, index) => (
        <SwiperSlide key={index}>
          <div className={`${activeSlide === index ? 'activeSlide' : ''}`}>
            <img src={music.cover.url ? music.cover.url : defaultImg} alt={music.cover.title ? music.cover.title : "Tony"} />
            {
              options.isOverlayIcon && <>
                {activeSlide === index && <div className="overlay">
                  <span onClick={() => music.link ? window.open(`${music.link}`, options.newTab ? '_blank' : '_self') : {}} >
                    <FaYoutube  className='youtubeIcon'/>
                  </span>
                </div>
                }
              </>
            }

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
});

export default SwiperSlider;