import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory";
import SectionTitle from "../Shared/SectionTitle";

// image
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useScroll from "../../hooks/useScroll";
import PageTitle from "../Shared/PageTitle";

const OurMenu = () => {
  useScroll();
  const style = "space-y-20 mb-20 ";
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category == "soup");

  return (
    <>
      <PageTitle title={"Our Menu"}></PageTitle>
      <div className={`${style} md:mb-36`}>
        <Cover
          img={menuImg}
          title={"our menu"}
          description={"Would you like to try a dish?"}
        ></Cover>
        <SectionTitle
          subHeading={"Don't miss"}
          heading={"today's offer"}
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory
          items={desserts}
          title={"desserts"}
          img={dessertImg}
        ></MenuCategory>

        <MenuCategory
          items={pizzas}
          title={"pizzas"}
          img={pizzaImg}
        ></MenuCategory>

        <MenuCategory
          items={salads}
          title={"salads"}
          img={saladImg}
        ></MenuCategory>
        <MenuCategory
          items={soups}
          title={"soups"}
          img={soupImg}
        ></MenuCategory>
      </div>
    </>
  );
};

export default OurMenu;
