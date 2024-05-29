import "../Login/Login.css";
import img from "../../assets/others/authentication2.png";
import PageTitle from "../Shared/PageTitle";
import useScroll from "../../hooks/useScroll";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin";

const SignUp = () => {
  useScroll();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photoURL).then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              navigate(from);
              Swal.fire({
                title: "Register Successfully",
                confirmButtonText: "Ok",
                confirmButtonColor: "#ea580c",
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
          });
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <PageTitle title={"Sign Up"}></PageTitle>
      <div className="w-full h-full flex justify-center items-center py-10 px-5">
        <div className="shadow-2xl md:w-3/4">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 bgImg p-5 md:p-24">
            <div className="md:w-1/2">
              <img src={img} alt="" />
            </div>
            <div className="card  md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold text-center">
                Sign Up
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Type your name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600 mt-1">Name is required.</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Enter your photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600 mt-1">
                      Photo URL is required.
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Type your email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600 mt-1">
                      Email is required.
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                    placeholder="Type your password"
                    className="input input-bordered"
                  />
                  {errors.password?.type == "required" && (
                    <span className="text-red-600 mt-1">
                      Password is required
                    </span>
                  )}
                  {errors.password?.type == "minLength" && (
                    <span className="text-red-600 mt-1">
                      Password must be 6 characters.
                    </span>
                  )}
                  {errors.password?.type == "maxLength" && (
                    <span className="text-red-600 mt-1">
                      Password must be less than 20 characters.
                    </span>
                  )}
                  {errors.password?.type == "pattern" && (
                    <span className="text-red-600 mt-1">
                      Password must have one uppercase, one lowercase, one
                      number and one special character.
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-primary text-white">Sign Up</button>
                </div>
              </form>
              <div className="space-y-4 mt-5 text-center">
                <p className="text-primary">
                  Already register?
                  <Link to="/login" className="font-bold ml-2">
                    Go to log in
                  </Link>
                </p>

                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
