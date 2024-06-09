import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import "./Button.css";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();

  // navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSocialLogin = (socilaSignIn) => {
    socilaSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then(() => {
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
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <p>Or sign in with</p>
      <div className="flex justify-center items-center gap-5 text-2xl mt-4">
        <button>
          <FaFacebookF />
        </button>
        <button onClick={() => handleSocialLogin(googleSignIn)}>
          <FaGoogle />
        </button>
        <button>
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
