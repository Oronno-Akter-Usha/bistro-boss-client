import { useEffect } from "react";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu";

const OurMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const style = "space-y-20 md:space-y-36 mb-20 ";
  return (
    <div className={`${style} md:mb-36`}>
      <Cover
        img={menuImg}
        title={"our menu"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default OurMenu;
