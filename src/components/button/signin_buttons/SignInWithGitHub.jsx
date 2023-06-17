import React from "react";
import { auth } from "../../../../firebase/firebase.config";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { firebaseAuth } from "../../../../zustand/FirebaseAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const SignInWithGitHub = () => {
  const { loginStatus, setLoginStatus } = firebaseAuth();
  const handleSignInWithGitHub = async (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();
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
      <button onClick={(e) => handleSignInWithGitHub(e)}>
        <div className="flex justify-center items-center w-[35vw] h-[10vh] bg-[#3e70dd] rounded my-3 py-[25px] text-[24px] text-white">
    <FontAwesomeIcon icon={faGithub} className='mx-3'/>
          Sign in with GitHub
        </div>
      </button>
    </div>
  );
};

export default SignInWithGitHub;
