import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { authContext } from "../context/AuthProvider";

const Login = () => {
  const {SignInUser, loading} =useContext(authContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const handleLoginSubmit = (e) =>{
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email") 
    const password = form.get("password") 
    console.log(email, password)

    SignInUser(email, password)
    .then(res =>{
      console.log(res)
      navigate(location?.state ? location.state : "/")
    })
    .catch(err => console.log(err))
  } 
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLoginSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">
            {
              loading ? <span className="loading loading-ring loading-md"></span> : "Login"
            }
          </button>
        </div>
        <p className="text-center">Do not have any Account! Please <Link to={"/register"} className="text-primary underline font-bold">Register</Link></p>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login
