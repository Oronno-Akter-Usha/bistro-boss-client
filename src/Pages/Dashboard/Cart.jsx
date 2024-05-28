import { MdDelete } from "react-icons/md";
import useCart from "../../hooks/useCart";
import SectionTitle from "../Shared/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#808080",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully deleted",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="w-full mx-auto">
          <SectionTitle
            subHeading={"My Cart"}
            heading={"WANNA ADD MORE?"}
          ></SectionTitle>
          <div className="bg-white mx-5 md:mx-20 rounded-lg">
            <div className="uppercase flex justify-between items-center p-5 md:px-12">
              <h2 className="text-2xl font-bold">
                Total orders: {cart.length}{" "}
              </h2>
              <h2 className="text-2xl font-bold">total price: ${totalPrice}</h2>
              <button className="btn bg-amber-600 text-white uppercase">
                pay
              </button>
            </div>
            <div className="overflow-x-auto p-5 md:px-12">
              <table className="table">
                {/* head */}
                <thead className="bg-amber-600 text-white">
                  <tr>
                    <th></th>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, i) => (
                    <tr key={item._id}>
                      <td>{i + 1}</td>
                      <td>
                        <div className="avatar">
                          <div className="w-12 h-12 rounded-lg">
                            <img src={item.image} alt="food image" />
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <th>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn bg-red-600 text-white text-2xl hover:text-2xl hover:text-red-600"
                        >
                          <MdDelete />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center h-screen">
          <h2 className="text-center text-3xl font-bold">
            You did not added any food item
          </h2>
          <Link
            to={"/order/salads"}
            className="btn btn-outline bg-white px-10 uppercase text-amber-600 border-0  border-b-4 border-amber-600 hover:border-amber-600 w-fit mx-auto mt-10"
          >
            Add your favourite food
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
