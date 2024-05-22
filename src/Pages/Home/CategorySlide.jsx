import { SwiperSlide } from "swiper/react";

const CategorySlide = ({ img, title }) => {
  return (
    <SwiperSlide className="w-full mb-10 rounded-lg">
      <img src={img} alt="" className="relative w-full rounded-lg" />
      <span className="bg-opacity-20 bg-gradient-to-b from-[#00000000] to-[#000000b3] w-full md:md:text-4xl uppercase text-center  absolute bottom-0 md:p-5 text-white rounded-lg">
        {title}
      </span>
    </SwiperSlide>
  );
};

export default CategorySlide;
