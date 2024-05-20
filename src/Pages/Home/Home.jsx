import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CallSection from "./CallSection";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const style = "space-y-20 md:space-y-36 mb-20 ";
  return (
    <div className={`${style} md:mb-36`}>
      <Helmet>
        <title></title>
      </Helmet>
      <Banner></Banner>
      <div className={`mx-5 md:mx-20 ${style}`}>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <CallSection></CallSection>
      </div>
      <Featured></Featured>
      <div className={`mx-5 md:mx-20 ${style}`}>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
