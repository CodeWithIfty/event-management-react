import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { SignInUser, loading, setLoading, SignInWithGoogle } =
    useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    SignInUser(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
        toast("Successfully Logged in!");
      })
      .catch(() => {
        setLoading(false);
        setLoginError("Invalid login details!");
      });
  };

  const handleSignInWithGoogle = () => {
    SignInWithGoogle()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("Successfully Logged in!");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLoginSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {loginError && (
                <p className="text-xs text-error mt-2">{loginError}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {loading ? (
                  <span className="loading loading-ring loading-md"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <div className="flex justify-center mb-3 ">
            <button className="btn " onClick={handleSignInWithGoogle}>
              <FcGoogle className="text-2xl" /> Login With Google
            </button>
          </div>
          <p className="text-center pb-4 mx-10">
            Do not have any Account! Please{" "}
            <Link to={"/register"} className="text-primary underline font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
