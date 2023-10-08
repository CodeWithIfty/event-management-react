import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
const Register = () => {
  const { createUser, SignInWithGoogle, updateUserProfile } =
    useContext(authContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("The password is less than 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("The password don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError("The password don't have a capital letter");
      return;
    } else {
      setPasswordError("");
    }

    console.log(name, email, password);
    createUser(email, password)
      .then((res) => {
        updateUserProfile(name)
        navigate("/");
        console.log(res);
      })
      .catch((error) => {
        if (error.message.match(/email-already-in-use/g))
          setEmailError("This email already in use");
        console.log(error.message);
      });


  };
  const handleSignInWithGoogle = () => {
    SignInWithGoogle()
      .then((res) => {
        navigate(location?.state ? location.state : "/");
        toast("Successfully Logged in!");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form className="card-body " onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && (
                <p className="text-xs text-error mt-2">{emailError}</p>
              )}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && (
                <p className="text-xs text-error mt-2">{passwordError}</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <div className="flex justify-center mb-2 ">
            <button className="btn " onClick={handleSignInWithGoogle}>
              <FcGoogle className="text-2xl" /> Register With Google
            </button>
          </div>
          <p className="text-center pb-5">
            Do not have any Account! Please{" "}
            <Link to={"/login"} className="text-primary underline font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
