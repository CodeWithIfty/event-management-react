import { useContext, useState } from "react";
import { authContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { auth } = useContext(authContext);
  const [updateMsg, setUpdateMsg] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;

    if (name) {
      updateProfile(auth.currentUser, { displayName: name })
        .then(() => {
          setUpdateMsg("Your name has been Updated :)");
        })
        .catch((error) => console.log(error.message));
    } else if (photoUrl) {
      updateProfile(auth.currentUser, { photoURL: photoUrl })
        .then(() => {
          setUpdateMsg("Your Profile Picture has been Updated :)");
        })
        .catch((error) => console.log(error.message));
    } 
    
   
  };
  return (
    <div className="hero py-20 bg-base-200 ">
      <div className=" bg-white p-5 rounded-xl">
        <form className="card-body w-96 " onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photourl"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Profile</button>
          </div>
          {updateMsg ? (
            <p className="text-success font-bold mt-3 text-center">{updateMsg}</p>
          ) : (
            " "
          )}

        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
