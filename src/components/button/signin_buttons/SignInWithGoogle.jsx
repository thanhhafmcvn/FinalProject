import React from "react";
import { auth } from "../../../../firebase/firebase.config.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "../../../../zustand/FirebaseAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons"
const SignInWithGoogle = () => {
  const { loginStatus, setLoginStatus } = firebaseAuth();
  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      if (response?.user) {
        alert("Signed in successfully");
        setLoginStatus(!loginStatus); 
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <button onClick={(e) => handleSignInWithGoogle(e)}>
        <div className="flex justify-center items-center w-[35vw] h-[10vh] rounded my-3 p-[25px] text-[24px] bg-[#3e70dd] text-white">
          <FontAwesomeIcon icon={faGoogle} className='mx-3' />
          Sign in with Google
        </div>
      </button>
    </div>
  );
};

export default SignInWithGoogle;
