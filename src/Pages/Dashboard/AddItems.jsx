import { useForm } from "react-hook-form";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          title: `${data.name} is added to the menu`,
          confirmButtonText: "Ok",
          customClass: {
            confirmButton: "btn-primary",
          },
          buttonsStyling: false,
          showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
          },
          hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
          },
        });
      }
    }
    console.log(res.data);
  };
  return (
    <>
      <PageTitle title="Add Items"></PageTitle>
      <div>
        <SectionTitle
          subHeading="What's new?"
          heading="ADD AN ITEM"
        ></SectionTitle>
        <div>
          <div className="bg-white mx-5 md:mx-20 rounded-lg p-5 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Recipe name*
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Recipe name"
                  className="input input-bordered"
                />
              </div>

              <div className="md:flex gap-6">
                {/* Category */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Category*
                    </span>
                  </label>
                  <select
                    defaultValue="default"
                    {...register("category")}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled value="default">
                      Select a Category
                    </option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drink">Drink</option>
                  </select>
                </div>

                {/* price */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Price*
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register("price")}
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
              </div>

              {/* Recipe Details* */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Recipe Details*
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Recipe Details"
                ></textarea>
              </div>

              <input
                {...register("image")}
                type="file"
                className="file-input w-full max-w-xs"
              />
              <div>
                <button className="btn-color text-white">
                  Add Item <FaUtensils></FaUtensils>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;
