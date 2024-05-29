import { NavLink } from "react-router-dom";

const NavLinks = ({ pathName, title }) => {
  return (
    <NavLink
      to={pathName}
      className={({ isActive }) =>
        isActive ? "font-bold mr-9 text-primary" : "mr-9"
      }
    >
      {title}
    </NavLink>
  );
};

export default NavLinks;
