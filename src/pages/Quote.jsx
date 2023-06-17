import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { QuoteDataStore } from "../../zustand/QuoteDataStore";
import BackToHome from "../components/button/navigate_button/BackToHome";
const Quote = () => {
  const navigate = useNavigate();
  const {
    quoteData,
    setQuoteData,
    authorShown,
    setAuthorShown,
    authorName,
    setAuthorName,
  } = QuoteDataStore();
  const API_URL = "https://api.quotable.io/quotes/random";
  const SEARCH_URL = `https://google.com/search?q=${authorName}`;
  setTimeout(() => {
    setAuthorShown(true);
  }, 3000);
  const fetchQuote = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;
    setQuoteData(data);
    setAuthorName(data[0]?.author);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-1 justify-center items-center flex-col p-[200px] bg-[#363636] relative">
      <div className="absolute text-white top-10 left-0">
        <BackToHome/>
      </div>
      <div className=" flex flex-1 justify-center items-center flex-col ">
        <h1 className="text-white text-center font-sans font-bold text-[50px] animate-fade w-100">
          {quoteData[0]?.content}
        </h1>
        <div className="text-white font-extralight text-[30px] mt-[40px]">
          <h3
            className={authorShown ? "opacity-1 cursor-pointer" : "opacity-0"}
            onClick={() => window.open(SEARCH_URL, "_blank")}
          >
            {quoteData[0]?.author}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Quote;
