import { useEffect } from "react";
import img from "../../assets/contact/banner.jpg";
import Location from "./Location";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const style = "space-y-20 md:space-y-36 mb-20 ";
  return (
    <div className={`${style} md:mb-36`}>
      <img src={img} alt="" />
      <div className={`mx-5 md:mx-10 ${style}`}>
        <Location></Location>
      </div>
    </div>
  );
};

export default ContactUs;
