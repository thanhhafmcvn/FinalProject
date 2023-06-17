import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../../../zustand/FirebaseAuth";
const SignOut = () => {
  const { loginStatus, setLoginStatus } = firebaseAuth();
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      setLoginStatus(!loginStatus);
      alert("Signed out successfully");
    } catch (error) {
      alert(error.messgae);
    }
  };
  return (
    <div>
      <button onClick={(e) => handleSignOut(e)}>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="w-[30px] h-[30px]"
        />
      </button>
    </div>
  );
};

export default SignOut;
