import "./Login.css";
import img from "../../assets/others/authentication2.png";
import PageTitle from "../Shared/PageTitle";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useScroll from "../../hooks/useScroll";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";
import "../Shared/Button.css";

const Login = () => {
  useScroll();

  const { signIn } = useAuth();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
        Swal.fire({
          title: "Login Successfully",
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
      })
      .catch((error) => console.error(error));
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <PageTitle title={"Login"}></PageTitle>
      <div className="w-full h-full flex justify-center items-center py-10 p-5">
        <div className="shadow-2xl md:w-3/4">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 bgImg p-5 md:p-24">
            <div className="md:w-1/2">
              <img src={img} alt="" />
            </div>
            <div className="card  md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold text-center">
                Login
              </h2>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type your password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Type the captcha above"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  {/* TODO: apply disabled for re captcha */}
                  <button disabled={false} className="btn-color text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="space-y-4 mt-5 text-center">
                <p className="text-primary">
                  New here?
                  <Link to="/signUp" className="font-bold ml-1">
                    Create a New Account
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

export default Login;
