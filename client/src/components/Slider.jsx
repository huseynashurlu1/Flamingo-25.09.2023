import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const Slider = () => {
  return (
    <div className='slider'>
         <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[EffectFade]} effect="fade"
        >
        <SwiperSlide>
            <img src="http://joomla.vinagecko.net/t/vina_betashop/images/sampledata/slideshow/slider22.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="http://joomla.vinagecko.net/t/vina_betashop/images/sampledata/slideshow/slider21.jpg" alt="" />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider