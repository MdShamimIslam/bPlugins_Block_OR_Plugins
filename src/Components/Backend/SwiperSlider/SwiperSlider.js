import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaYoutube } from '../../../utils/icons';

const SwiperSlider = forwardRef(({ playTrack, attributes }, ref) => {
  const { musics, options } = attributes;
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
 

  useImperativeHandle(ref, () => ({
    slideTo(index) {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    },
  }));

  return <div className="swiper">
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
      slidesPerView={5}
    >
      {musics.map((music, index) => (
        <SwiperSlide  key={index}>
          <div className={`${activeSlide === index ? 'activeSlide' : ''}`}>
            <img src={music.thumbnail.url} alt={music.title} />
            {
              options.isOverlayIcon && <>
               {activeSlide === index && <div className="overlay">
              <span onClick={() => music.link ? window.open(`${music.link}`, options.newTab ? '_blank' : '_self') : {}} >
                <FaYoutube style={{ color: "red", cursor: "pointer", width: "20px" }} className='youtubeIcon' />
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