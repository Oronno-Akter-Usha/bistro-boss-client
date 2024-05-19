import SectionTitle from "../Shared/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item text-white  bg-fixed bg-cover bg-no-repeat bg-center ">
      <div className="bg-gray-900 bg-opacity-70 h-full py-10 md:py-20">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"Featured Item"}
        ></SectionTitle>

        <div className="md:flex justify-center items-center py-8 px-16 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="mt-5 md:ml-10 space-y-3">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where Can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
