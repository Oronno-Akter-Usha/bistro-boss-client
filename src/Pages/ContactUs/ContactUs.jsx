import img from "../../assets/contact/banner.jpg";
import useScroll from "../../hooks/useScroll";
import Cover from "../Shared/Cover";
import PageTitle from "../Shared/PageTitle";
import Location from "./Location";

const ContactUs = () => {
  useScroll();
  const style = "space-y-20 md:space-y-36 mb-20 ";
  return (
    <>
      <PageTitle title={"Contact Us"}></PageTitle>
      <div className={`${style} md:mb-36`}>
        <Cover
          img={img}
          title={"Contact Us"}
          description={"Would you like to try a dish?"}
        ></Cover>
        <Location></Location>
      </div>
    </>
  );
};

export default ContactUs;
