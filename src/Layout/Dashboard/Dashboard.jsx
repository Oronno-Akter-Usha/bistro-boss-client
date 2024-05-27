import { FaCalendarAlt, FaCalendarCheck, FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import DashboardNavLinks from "./DashboardNavLinks";
import { AiFillHome } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BiSolidFoodMenu } from "react-icons/bi";
import useScroll from "../../hooks/useScroll";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  useScroll();
  const [cart] = useCart();
  return (
    <div className="flex ">
      {/* dashboard side bar */}
      <div className="w-64 shadow-xl border border-r-amber-600  pb-20 pt-10 bg-white">
        <Link to={"/"} className="flex flex-col uppercase mb-9 ml-5">
          <h3 className=" text-xl md:text-3xl">BISTRO BOSS</h3>
          <p className="md:tracking-[9px] tracking-[2px]">Restaurant</p>
        </Link>
        <ul className="menu uppercase space-y-5">
          <DashboardNavLinks
            pathName="/dashboard/userHome"
            icon={<AiFillHome />}
            title="User Home"
          ></DashboardNavLinks>
          <DashboardNavLinks
            pathName="/dashboard/reservation"
            icon={<FaCalendarAlt />}
            title="reservation"
          ></DashboardNavLinks>
          <DashboardNavLinks
            pathName="/dashboard/payment history"
            icon={<FaMoneyCheckDollar />}
            title="payment history"
          ></DashboardNavLinks>
          <DashboardNavLinks
            pathName="/dashboard/cart"
            icon={<FaShoppingCart />}
            title={`My Cart ( ${cart.length})`}
          ></DashboardNavLinks>
          <DashboardNavLinks
            pathName="/dashboard/add review"
            icon={<MdReviews />}
            title="add review"
          ></DashboardNavLinks>
          <DashboardNavLinks
            pathName="/dashboard/myBooking"
            icon={<FaCalendarCheck />}
            title="my booking"
          ></DashboardNavLinks>
          <div className="divider"></div>
          <DashboardNavLinks
            pathName="/"
            icon={<AiFillHome />}
            title="Home"
          ></DashboardNavLinks>
          <DashboardNavLinks
            pathName="/ourMenu"
            icon={<BiSolidFoodMenu />}
            title="Our Menu"
          ></DashboardNavLinks>
          <DashboardNavLinks
            pathName="/order/salads"
            icon={<FaShoppingCart />}
            title="order"
          ></DashboardNavLinks>
          <DashboardNavLinks
            pathName="/contactUs"
            icon={<IoIosMail />}
            title="Contact Us"
          ></DashboardNavLinks>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 py-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
