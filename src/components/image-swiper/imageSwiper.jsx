import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./imageSwiper.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";
import five from "./images/five.jpg";
import six from "./images/six.jpg";
import seven from "./images/seven.jpg";
import eight from "./images/eight.jpg";
import nine from "./images/nine.jpg";
export default function ImageSwiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={one} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eight} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nine} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
