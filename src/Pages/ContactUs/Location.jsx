import SectionTitle from "../Shared/SectionTitle";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import Card from "./Card";
import { FaClock } from "react-icons/fa";

const Location = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Visit Us"}
        heading={"Our Location"}
      ></SectionTitle>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mb-36">
        <Card
          icon={<FaPhone />}
          heading={"phone"}
          subHeading={"+38 (012) 34 56 789"}
        ></Card>
        <Card
          icon={<FaLocationDot />}
          heading={"ADDRESS"}
          subHeading={"+38 (012) 34 56 789"}
        ></Card>
        <Card
          icon={<FaClock />}
          heading={"WORKING HOURS"}
          subHeading={"Mon - Fri: 08:00 - 22:00"}
          subHeading2={"Sat - Sun: 10:00 - 23:00"}
        ></Card>
      </div>
    </div>
  );
};

export default Location;
