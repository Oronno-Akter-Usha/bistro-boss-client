import "./Login.css";
import img from "../../assets/others/authentication2.png";
import PageTitle from "../Shared/PageTitle";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useScroll from "../../hooks/useScroll";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  useScroll();

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <PageTitle title={"Login"}></PageTitle>
      <div className="w-full h-full flex justify-center items-center py-10">
        <div className="shadow-2xl md:w-3/4">
          <div className="hero-content flex-col lg:flex-row bgImg p-10 md:p-24">
            <div className="md:w-1/2">
              <img src={img} alt="" />
            </div>
            <div className="card  md:w-1/2  text-center">
              <h2 className="text-2xl md:text-4xl font-bold">Login</h2>
              <form onSubmit={handleLogin} className="card-body">
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
                    type="text"
                    ref={captchaRef}
                    name="captcha"
                    placeholder="Type the captcha above"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-outline btn-xs mt-5"
                  >
                    Validate
                  </button>
                </div>

                <div className="form-control mt-6">
                  <button
                    disabled={disabled}
                    className="btn bg-amber-600 text-white"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
