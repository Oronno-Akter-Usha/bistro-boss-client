import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Contact us</a>
      </li>

      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Our Menu</a>
      </li>
      <li>
        <a>Our Shop</a>
      </li>

      <li>
        <a>Sign Out</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar pr-5 bg-opacity-50 bg-black  text-white fixed z-50 top-0 px-5">
        <div className="mr-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          <div className="flex flex-col justify-center items-center uppercase">
            <p className="text-3xl">BISTRO BOSS</p>
            <p style={{ letterSpacing: "10px" }}>Restaurant</p>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
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
