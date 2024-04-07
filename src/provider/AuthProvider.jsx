import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider=new TwitterAuthProvider();
const facebookProvider=new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => setPhoto(result.user.photoURL))
      .catch((error) => console.log(error));
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const twitterLogin = () => {
    return signInWithPopup(auth, twitterProvider);
  };
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updatePassWord=(newPassword)=>{
    const client = auth.currentUser;
    return updatePassword(client,newPassword)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setPhoto(currentUser.photoURL);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    createUser,
    user,
    logOut,
    logIn,
    loading,
    googleSignIn,
    photo,
    githubLogin,
    passwordReset,
    updatePassWord,
    twitterLogin,
    facebookLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
