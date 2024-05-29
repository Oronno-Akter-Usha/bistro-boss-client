import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaList,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import DashboardNavLinks from "./DashboardNavLinks";
import { AiFillHome } from "react-icons/ai";
import { FaBook, FaMoneyCheckDollar, FaUtensils } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BiSolidFoodMenu } from "react-icons/bi";
import useScroll from "../../hooks/useScroll";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  useScroll();
  const [cart] = useCart();

  // Todo: get isAdmin value from the database
  const isAdmin = true;

  return (
    <div className="flex ">
      {/* dashboard side bar */}
      <div className="w-64 shadow-xl border border-r-primary  pb-20 pt-10 bg-white">
        <Link to={"/"} className="flex flex-col uppercase mb-9 ml-5">
          <h3 className=" text-xl md:text-3xl">BISTRO BOSS</h3>
          <p className="md:tracking-[9px] tracking-[2px]">Restaurant</p>
        </Link>
        <ul className="menu uppercase space-y-5">
          {isAdmin ? (
            <>
              <DashboardNavLinks
                pathName="/dashboard/adminHome"
                icon={<AiFillHome />}
                title="Admin Home"
              ></DashboardNavLinks>
              <DashboardNavLinks
                pathName="/dashboard/addItems"
                icon={<FaUtensils />}
                title="Add Items"
              ></DashboardNavLinks>
              <DashboardNavLinks
                pathName="/dashboard/manageItems"
                icon={<FaList />}
                title="manage items"
              ></DashboardNavLinks>
              <DashboardNavLinks
                pathName="/dashboard/manageBookings"
                icon={<FaBook />}
                title="Manage bookings"
              ></DashboardNavLinks>
              <DashboardNavLinks
                pathName="/dashboard/allUsers"
                icon={<FaUsers />}
                title="All Users"
              ></DashboardNavLinks>
            </>
          ) : (
            <>
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
                pathName="/dashboard/paymentHistory"
                icon={<FaMoneyCheckDollar />}
                title="payment history"
              ></DashboardNavLinks>
              <DashboardNavLinks
                pathName="/dashboard/cart"
                icon={<FaShoppingCart />}
                title={`My Cart ( ${cart.length})`}
              ></DashboardNavLinks>
              <DashboardNavLinks
                pathName="/dashboard/addReview"
                icon={<MdReviews />}
                title="add review"
              ></DashboardNavLinks>
              <DashboardNavLinks
                pathName="/dashboard/myBooking"
                icon={<FaCalendarCheck />}
                title="my booking"
              ></DashboardNavLinks>
            </>
          )}

          {/* shared nav links */}
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
