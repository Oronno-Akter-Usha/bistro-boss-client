import Banner from "./Banner";
import CallSection from "./CallSection";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div className="space-y-20 md:space-y-36 mb-20 md:mb-36">
      <Banner></Banner>
      <div className="mx-5 md:mx-20 space-y-10 md:space-y-36">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <CallSection></CallSection>
      </div>
      <Featured></Featured>
    </div>
  );
};

export default Home;
