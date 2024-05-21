import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {title && (
        <Cover
          img={img}
          title={title}
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 mx-5 md:mx-20 mt-20">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-9">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
