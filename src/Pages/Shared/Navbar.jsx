import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-9 text-amber-600" : "mr-9"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/contactUs"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-9 text-amber-600" : "mr-9"
        }
      >
        Contact us
      </NavLink>
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-9 text-amber-600" : "mr-9"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to={"/ourMenu"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-9 text-amber-600" : "mr-9"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to={"/ourShop"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-9 text-amber-600" : "mr-9"
        }
      >
        Our Shop
      </NavLink>
      <NavLink
        to={"/logout"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-9 text-amber-600" : "mr-9"
        }
      >
        Sign Out
      </NavLink>
    </>
  );
  return (
    <div>
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
          <div className="flex flex-col justify-center items-center uppercase text-white">
            <h3 className=" text-xl md:text-3xl">BISTRO BOSS</h3>
            <p className="md:tracking-[9px] tracking-[2px]">Restaurant</p>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
        </div>
        <div className="flex justify-center items-center bg-amber-500 rounded-full w-10 h-10 text-gray-200 ">
          <a className="">
            <FaCartShopping className="text-2xl" />
          </a>
        </div>
        <div className="">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
