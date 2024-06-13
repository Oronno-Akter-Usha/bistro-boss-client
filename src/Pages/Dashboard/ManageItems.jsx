import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";
import useMenu from "../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();
  return (
    <>
      <PageTitle title="All Users"></PageTitle>
      <div className="w-full mx-auto">
        <SectionTitle
          subHeading="How many"
          heading="Manage all users"
        ></SectionTitle>
        <div className="bg-white mx-5 md:mx-20 rounded-lg pt-5">
          <h2 className="text-2xl font-bold text-center my-5 uppercase">
            Total Users
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
                      <button
                        // onClick={() => handleMakeAdmin(user)}
                        className="btn bg-primary text-white text-xl hover:text-xl hover:text-primary"
                      >
                        <FaEdit />
                      </button>
                    </th>
                    <th>
                      <button
                        //   onClick={() => handleDeleteUser(user)}
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

      {/* <div className="flex flex-col justify-center h-screen">
        <h2 className="text-center text-3xl font-bold">No Users</h2>
      </div> */}
    </>
  );
};

export default ManageItems;
