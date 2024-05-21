import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
import { useState } from "react";
import PageTitle from "../Shared/PageTitle";

const Order = () => {
  useScroll();
  const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const style = "space-y-20 ";
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category == "soup");

  return (
    <>
      <PageTitle title={"Order"}></PageTitle>
      <div className={`${style} md:mb-36 `}>
        <Cover
          img={orderCoverImg}
          title={"Order"}
          description={"Would you like to try a dish?"}
        ></Cover>

        <div className="mx-5 md:mx-20">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className={"uppercase text-center"}
          >
            <TabList classID="">
              <Tab>salad</Tab>
              <Tab>pizza</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </TabList>
            <TabPanel>
              <OrderTab items={salads}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizzas}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soups}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={desserts}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks}></OrderTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Order;
