import Banner from "./Banner";
import CallSection from "./CallSection";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";
import useScroll from "../../hooks/useScroll";
import PageTitle from "../Shared/PageTitle";

const Home = () => {
  useScroll();
  const style = "space-y-20 mb-20";
  return (
    <>
      <PageTitle title={"Home"}></PageTitle>
      <div className={`${style} md:mb-36`}>
        <Banner></Banner>
        <div className={`mx-5 md:mx-20 ${style}`}>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <CallSection></CallSection>
        </div>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
    </>
  );
};

export default Home;
