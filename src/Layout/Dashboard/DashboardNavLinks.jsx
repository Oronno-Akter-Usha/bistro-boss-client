import { NavLink } from "react-router-dom";

const DashboardNavLinks = ({ pathName, icon, title }) => {
  return (
    <NavLink
      to={pathName}
      className={({ isActive }) =>
        isActive
          ? "font-bold  text-amber-600 hover:bg-gray-200  flex p-2  items-center gap-2 rounded-lg"
          : " hover:bg-gray-200 flex p-2 items-center gap-2 rounded-lg"
      }
    >
      <p className="text-2xl"> {icon}</p>
      <p className="font-medium">{title}</p>
    </NavLink>
  );
};

export default DashboardNavLinks;
