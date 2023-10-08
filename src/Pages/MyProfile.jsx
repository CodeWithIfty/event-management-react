import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { GoVerified, GoUnverified } from 'react-icons/go';

const MyProfile = () => {
  const { user, loading ,SignOutUser } = useContext(authContext);
  const handleLogout = () => {
    SignOutUser()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-4">
      <div className="p-8 bg-white shadow mt-24">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {" "}
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            {" "}
            <div>
              {" "}
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">Friends</p>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="font-bold text-gray-700 text-xl">10</p>{" "}
              <p className="text-gray-400">Photos</p>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="font-bold text-gray-700 text-xl">89</p>{" "}
              <p className="text-gray-400">Comments</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="relative">
            {" "}
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img
                src={`${
                  user.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co/rHzPb0S/icon-256x256.png"
                }`}
                alt=""
                className="w-48 h-48  rounded-full"
              />
            </div>{" "}
          </div>{" "}
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <Link to={'/update-profile'}>
              <button className="text-white py-4 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Edit Profile
              </button>
            </Link>
            <button onClick={handleLogout} className="text-white py-2 px-4 uppercase rounded bg-error hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              {" "}
              Log Out
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-20 text-center border-b pb-12">
          {" "}
          {loading ? (
            <span className="loading loading-ring loading-md scale-150 mr-5"></span>
          ) : (
            <h1 className="text-4xl font-medium text-gray-700 flex justify-center items-start">
              {user?.displayName}{" "}
              <span className="font-light text-gray-500">{
                user.emailVerified ? <GoVerified className="text-blue-600 text-2xl ml-2"/> : <GoUnverified className="text-gray-600 text-2xl ml-2"/>
              }</span>
            </h1>
          )}
          {loading ? (
            <span className="loading loading-ring loading-md scale-150 mr-5"></span>
          ) : (
            <p className=" text-gray-600 mt-3">{user.email}</p>
          )}
          <p className="mt-8 text-gray-500">
            Front-End Developer
          </p>{" "}
          <p className="mt-2 text-gray-500">Programming Hero Community</p>{" "}
        </div>{" "}
        <div className="mt-12 flex flex-col justify-center">
          {" "}
          <p className="text-gray-600 text-center text-base  lg:px-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis consectetur obcaecati soluta deleniti iusto dignissimos ipsam eveniet ex aspernatur dolorem asperiores unde modi similique, placeat fugit? Delectus, quis repellendus.
          </p>{" "}
          <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
            {" "}
            Show more
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
