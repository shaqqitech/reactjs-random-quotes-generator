import React, { useState, useEffect } from "react";
import { IoIosRefresh } from "react-icons/io";

const Quotes = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const fetchRandomQuote = async () => {
   await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote({ text: data.content, author: data.author }))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white flex justify-center items-center flex-col p-8 space-y-9">
      <h1 className="text-center text-3xl font-bold">Random Quotes Generator</h1>
      <div className=" flex justify-center items-center flex-col relative">
        <div className="max-w-md px-5 py-10 space-y-3 bg-gray-800 rounded-lg shadow-lg shadow-gray-700">
          <blockquote className="font-semibold font-IBMPLEX">{quote.text}</blockquote>
          <p className="w-full flex justify-end">~ {quote.author}</p>
        </div>
        <div
          className="w-12 h-12 cursor-pointer shadow-lg bg-green-600 shadow-green-600 p-3 text-white font-bold py-2 px- absolute -bottom-5 flex justify-center items-center rounded-full"
          onClick={fetchRandomQuote}
        >
          <IoIosRefresh size={35} />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
