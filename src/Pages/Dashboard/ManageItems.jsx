import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#808080",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `{item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <>
      <PageTitle title="All Users"></PageTitle>

      {menu.length > 0 ? (
        <div className="w-full mx-auto">
          <SectionTitle
            subHeading="Hurry Up"
            heading="MANAGE ALL ITEMS"
          ></SectionTitle>
          <div className="bg-white mx-5 md:mx-20 rounded-lg pt-5">
            <h2 className="text-2xl font-bold text-center my-5 uppercase">
              Total Items: {menu.length}
            </h2>
            <div className="overflow-x-auto rounded-lg p-5 md:px-12">
              <table className="table border">
                {/* head */}
                <thead className="bg-primary text-white rounded-lg">
                  <tr className="uppercase rounded-lg">
                    <th></th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.map((item, i) => (
                    <tr key={item._id}>
                      <td className="font-semibold">{i + 1}</td>
                      <td>
                        <img src={item.image} alt="" className="w-14 h-14" />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <th>
                        <Link to={`/dashboard/updateItem/${item._id}`}>
                          <button className="btn bg-primary text-white text-xl hover:text-xl hover:text-primary">
                            <FaEdit />
                          </button>
                        </Link>
                      </th>
                      <th>
                        <button
                          onClick={() => handleDeleteItem(item)}
                          className="btn btn-md bg-red-600 text-white text-xl hover:text-xl hover:text-red-600"
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
          <h2 className="text-center text-3xl font-bold">No Item</h2>
        </div>
      )}
    </>
  );
};

export default ManageItems;
