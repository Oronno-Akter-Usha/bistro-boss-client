import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Shared/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
      {users.length > 0 ? (
        <div className="w-full mx-auto">
          <SectionTitle
            subHeading="How many"
            heading="Manage all users"
          ></SectionTitle>
          <div className="bg-white mx-5 md:mx-20 rounded-lg pt-5">
            <h2 className="text-2xl font-bold text-center my-5 uppercase">
              Total Users: {users.length}
            </h2>
            <div className="overflow-x-auto p-5 md:px-12">
              <table className="table">
                {/* head */}
                <thead className="bg-primary text-white">
                  <tr className="uppercase">
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr key={user._id}>
                      <td className="font-semibold">{i + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <th>
                        {user.role === "admin" ? (
                          "Admin"
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn bg-primary text-white text-2xl hover:text-2xl hover:text-primary"
                          >
                            <FaUsers />
                          </button>
                        )}
                      </th>
                      <th>
                        <button
                          onClick={() => handleDeleteUser(user)}
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
          <h2 className="text-center text-3xl font-bold">No Users</h2>
        </div>
      )}
    </>
  );
};

export default AllUsers;
