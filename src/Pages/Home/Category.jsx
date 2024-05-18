import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-full mb-24"
    >
      <SwiperSlide className="w-full mb-10">
        <img src={slide1} alt="" className="relative w-full" />
        <span className="bg-opacity-20 bg-gradient-to-b from-[#00000000] to-[#000000b3] w-full md:md:text-4xl uppercase text-center  absolute bottom-0 md:p-5 text-white">
          Salads
        </span>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img src={slide2} alt="" className="relative w-full" />
        <span className="bg-opacity-20 bg-gradient-to-b from-[#00000000] to-[#000000b3] w-full md:text-4xl uppercase text-center  absolute bottom-0 md:p-5 text-white">
          Pizzas
        </span>
      </SwiperSlide>

      <SwiperSlide className="w-full">
        <img src={slide3} alt="" className="relative w-full" />
        <span className="bg-opacity-20 bg-gradient-to-b from-[#00000000] to-[#000000b3] w-full md:text-4xl uppercase text-center  absolute bottom-0 md:p-5 text-white">
          Soups
        </span>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img src={slide4} alt="" className="relative w-full" />
        <span className="bg-opacity-20 bg-gradient-to-b from-[#00000000] to-[#000000b3] w-full md:text-4xl uppercase text-center  absolute bottom-0 md:p-5 text-white">
          desserts
        </span>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img src={slide5} alt="" className="relative w-full" />
        <span className="bg-opacity-20 bg-gradient-to-b from-[#00000000] to-[#000000b3] w-full md:md:text-4xl uppercase text-center  absolute bottom-0 md:p-5 text-white">
          Salads
        </span>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
