import img from "../../assets/contact/banner.jpg";
import Location from "./Location";

const ContactUs = () => {
  return (
    <div className="space-y-20 md:space-y-36 mx-5 md:mx-20">
      <img src={img} alt="" />
      <Location></Location>
    </div>
  );
};

export default ContactUs;
