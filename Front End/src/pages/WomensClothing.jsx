import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

const WomensClothing = () => {
  const [pages, setPages] = useState();

  useEffect(() => {
   const getPages = async () => {
     const response = await axios.get("./clothing.json");
     setPages(response.data);
   };
   getPages();
  }, []);
  if (!pages) return null;
  return (
    <div className="womens-clothing">
      <Navbar />
      <section>
        <header>
          <div className="bg-theme">
            <div className="w-1/2 min-h-[120vh] flex justify-center flex-col gap-4 pl-[100px]">
              <h1 className="text-[#EEA73D] text-5xl font-bold">
                Biz bilan go'zallik sari ...
              </h1>
              <p className="text-white text-3xl">
                Bu erda sizga mos keladigan so'ngi urfdagi va istalgan uslubdagi
                kiyimlarni ko'rishingiz va o'z imejingizni yaratishingiz mumkun.
              </p>
            </div>
          </div>
        </header>
        <div className="womens-clothing__content flex flex-wrap w-full min-h-[100vh] justify-evenly items-center bg-black gap-5 py-8">
          {pages.map((page) => (
            <div
              key={page.id}
              className="w-[350px] min-h-[700px] flex justify-between items-center flex-col text-center shadow-lg shadow-[#EEA73D] rounded-lg overflow-hidden p-2"
            >
              <img src={page.image} className="w-[340px] rounded-lg" alt={page.id} />
              <h3 className="text-[#EEA73D] text-xl">{page.title}</h3>
              <h1 className="text-[#EEA73D] text-2xl">{page.sum}</h1>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WomensClothing;
