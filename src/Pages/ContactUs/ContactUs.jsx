import img from "../../assets/contact/banner.jpg";
import useScroll from "../../hooks/useScroll";
import PageTitle from "../Shared/PageTitle";
import Location from "./Location";

const ContactUs = () => {
  useScroll();
  const style = "space-y-20 md:space-y-36 mb-20 ";
  return (
    <>
      <PageTitle title={"Contact Us"}></PageTitle>
      <div className={`${style} md:mb-36`}>
        <img src={img} alt="" />
        <div className={`mx-5 md:mx-10 ${style}`}>
          <Location></Location>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
