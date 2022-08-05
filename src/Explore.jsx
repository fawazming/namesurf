import { Swiper, SwiperSlide } from "swiper/react"

import './App.css';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from "swiper";

function Explore() {

  return (
    <div className="Explore">
      <h1>Name Card</h1>
      <Swiper 
        loop={true}
        effect={"cards"} 
        grabCursor={true} 
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-blue">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-yellow">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-green">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-brown">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-black">Slide 6</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Explore
