import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
// import slid  e5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../Shared/SectionTitle";

const Category = () => {
  const style =
    "bg-opacity-20 bg-gradient-to-b from-[#00000000] to-[#000000b3] w-full md:md:text-4xl uppercase text-center  absolute bottom-0 md:p-5 text-white rounded-lg";

  return (
    <div>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full"
      >
        <SwiperSlide className="w-full mb-10 rounded-lg">
          <img src={slide1} alt="" className="relative w-full rounded-lg" />
          <span className={style}>Salads</span>
        </SwiperSlide>
        <SwiperSlide className="w-full rounded-lg">
          <img src={slide2} alt="" className="relative w-full rounded-lg" />
          <span className={style}>Pizzas</span>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-lg">
          <img src={slide3} alt="" className="relative w-full rounded-lg" />
          <span className={style}>Soups</span>
        </SwiperSlide>
        <SwiperSlide className="w-full rounded-lg">
          <img src={slide4} alt="" className="relative w-full rounded-lg" />
          <span className={style}>desserts</span>
        </SwiperSlide>
        <SwiperSlide className="w-full rounded-lg">
          <img src={slide2} alt="" className="relative w-full rounded-lg" />
          <span className={style}>Pizzas</span>
        </SwiperSlide>

        <SwiperSlide className="w-full rounded-lg">
          <img src={slide3} alt="" className="relative w-full rounded-lg" />
          <span className={style}>Soups</span>
        </SwiperSlide>
        <SwiperSlide className="w-full rounded-lg">
          <img src={slide4} alt="" className="relative w-full rounded-lg" />
          <span className={style}>desserts</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
