import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const BackToHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className=" m-[30px] text-[30px] cursor-pointer"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default BackToHome;
