import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import PropTypes from "prop-types"

export const authContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
const SignInUser = (email, password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}
const SignOutUser = () =>{
  setLoading(true)
  return signOut(auth)
}
  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, currenUser =>{
      setUser(currenUser)
      setLoading(false)
    })
    return () => {
      unSubscribe();
    }
  },[])

  console.log(user)

  const authInfo = {user, createUser, SignInUser, SignOutUser, loading };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes ={
  children: PropTypes.node
}