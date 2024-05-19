import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItmes = data.filter((item) => item.category === "popular");
        setMenu(popularItmes);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
