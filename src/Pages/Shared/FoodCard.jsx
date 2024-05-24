import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { name, image, price, recipe, _id } = item;

  // navigation
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      // TODO: send cart item to the database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axios.post("http://localhost:3000/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to you cart`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f59e0b",
        cancelButtonColor: "#808080",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card md:w-[400px] h-[600px] bg-white pb-10 rounded-lg">
      <figure className="w-full relative">
        <img src={image} alt="food image" className="w-full" />
        <p className="absolute top-5 right-5 px-4 py-2 bg-black text-white">
          $ {price}
        </p>
      </figure>
      <div className="p-10  card-body">
        <h2 className="font-semibold text-2xl mb-4">{name}</h2>
        <p className="">{recipe}</p>
      </div>
      <div className="">
        <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-outline bg-[#E8E8E8] px-10 uppercase text-amber-600 border-0  border-b-4 border-amber-600 hover:border-amber-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
