import { useForm } from "react-hook-form";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                  {...register("name", { required: true })}
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
                    {...register("category")}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
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
                    {...register("price", { required: true })}
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
