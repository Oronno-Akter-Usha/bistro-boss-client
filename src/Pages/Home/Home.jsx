import SectionTitle from "../Shared/SectionTitle";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Category></Category>
    </div>
  );
};

export default Home;
