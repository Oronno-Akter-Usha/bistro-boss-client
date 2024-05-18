import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center h-[300px] text-gray-200">
        <div className="text-center bg-gray-700 w-full h-full pt-10">
          <h2 className="mb-6 text-xl md:text-2xl">CONTACT US</h2>
          <div className="space-y-1">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="text-center bg-gray-900 w-full h-full pt-10">
          <h2 className=" text-xl md:text-2xl mb-6">Follow US</h2>
          <p className="md:text-xl mb-8">Join us on social media</p>
          <div className="flex items-center justify-center gap-8 text-2xl">
            <FaFacebookF />
            <FaInstagram />
            <IoLogoTwitter />
          </div>
        </div>
      </div>
      <div className="text-center p-4 bg-black text-gray-200">
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
