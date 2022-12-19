import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

const WomensRights = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const getPages = async () => {
      const response = await axios.get("http://127.0.0.1:8000/huquqlar/");
      setPages(response.data);
    };
    getPages();
  }, []);
  return (
    <div>
      <Navbar />
      <section className="womens-rights w-full min-h-[100vh] bg-black flex justify-between items-center flex-wrap gap-3 p-3 flex-col">
        <header>
          <div className="bg-theme">
            <div className="w-1/2 min-h-[120vh] flex justify-center flex-col gap-4 pl-[100px]">
              <h1 className="text-[#EEA73D] text-5xl font-bold">
                Konstitutsiya xotin-qizlarni qanday himoya qiladi?
              </h1>
              <p className="text-white text-3xl">
                Mamlakatimiz aholisining qariyb 50 foizini xotin-qizlar tashkil
                etadi. Lekin ular o'z huquqlaridan habardormi?
              </p>
            </div>
          </div>
        </header>
        <div className="w-full min-h-[100vh] flex justify-center items-center flex-wrap gap-8 p-4">
          {pages.map((page) => (
            <div className="shadow-lg shadow-[#EEA73D] rounded-lg w-[90%] p-8 flex flex-col gap-3">
              <h1 className="text-[#EEA73D] text-3xl font-semibold">
                {page.title}
              </h1>
              <p className="text-xl text-white/80">{page.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WomensRights;
