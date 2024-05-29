import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavLinks from "./NavLinks";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  console.log(cart.length);

  const navLinks = (
    <>
      <NavLinks title={"Home"} pathName={"/"}></NavLinks>
      <NavLinks title={"Our Menu"} pathName={"/ourMenu"}></NavLinks>
      <NavLinks title={"Order"} pathName={"/order/salads"}></NavLinks>
      <NavLinks title={"Dashboard"} pathName={"/dashboard"}></NavLinks>
      <NavLinks title={" Contact us"} pathName={"/contactUs"}></NavLinks>
    </>
  );
  return (
    <div className="">
      <div className="navbar pr-5 bg-opacity-80 bg-black md:text-white fixed z-50 top-0 px-5">
        <div className="mr-auto">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            className="flex flex-col justify-center items-center uppercase text-white"
          >
            <h3 className=" text-xl md:text-3xl">BISTRO BOSS</h3>
            <p className="md:tracking-[9px] tracking-[2px]">Restaurant</p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
        </div>
        <Link
          to={"/dashboard/cart"}
          className="text-white hover:text-primary mr-9 relative"
        >
          <FaCartShopping className="text-3xl" />
          <div className="badge absolute bottom-0 -right-3 border-none text-xs bg-red-600 text-white">
            {cart.length}
          </div>
        </Link>

        <div className="text-black">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCJpmc7wNF8Ti2Tuh_hcIRZUGOc23KBTx2A&s"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>

                <li>
                  <button onClick={logOut} className="">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn-color px-3 py-0 md:px-5">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
