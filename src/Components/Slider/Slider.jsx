import "animate.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Slide } from "react-awesome-reveal";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div className="h-[30vh] md:h-[45vh] lg:h-[70vh] relative flex justify-center items-center animate__animated animate__fadeInDownBig rounded-xl shadow-2xl mb-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/CxX0bHDf/daniel-mccullough-FPFq-trr2-Y-unsplash.jpg"
            className="w-full brightness-75 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/C5XPpXLF/europeana-Z3y2-ZGS4-1-M-unsplash.jpg"
            className="w-full brightness-75 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/GhmvkMjf/catherine-kay-greenup-n2-Ic38-Ptn-k-unsplash.jpg"
            className="w-full brightness-75 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/4N8sxTxP/birmingham-museums-trust-9dn-Nn-Tr-Hxm-I-unsplash.jpg"
            className="w-full brightness-75 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute space-y-2 md:space-y-5 py-2 px-0 md:py-10 md:px-0 lg:py-20 bg-white bg-opacity-80 rounded-xl text-center w-[75%] z-20 animate__animated animate__fadeInUpBig">
        <div className="animate__animated animate__fadeInUpBig">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-orange-500">
            Welcome to Craft Canvas!
          </h1>
          <p className="text-sm md:text-[15px] lg:text-xl px-2 md:px-4 md:w-full mx-auto">
            Unleash your creativity and explore limitless possibilities in our
            vibrant community of artisans. Your creative sanctuary where
            imagination thrives and artistic expression knows no bounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
