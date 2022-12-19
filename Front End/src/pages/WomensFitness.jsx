import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
const WomensFitness = () => {
  const [pages, setPages] = useState();

  useEffect(() => {
    const getPages = async () => {
      const res = await axios.get("/fitness.json");
      setPages(res.data);
    };
    getPages();
  }, []);
  if (!pages) return null;
  return (
    <div className="womens-fitness">
      <Navbar />
      <section className="bg-black">
        <header>
          <div className="bg-theme">
            <div className="w-1/2 min-h-[100vh] flex justify-center flex-col gap-4 pl-[100px]">
              <h1 className="text-[#EEA73D] text-5xl font-bold">
                Biz bilan 18 yoshdagidek ...
              </h1>
              <p className="text-white text-3xl">
                Bu erda fitnesni o'zgartirishni boshlashingizga yordam beradigan
                ayollar uchun bir nechta boshlang'ich fitnes maslahatlari
                mavjud.
              </p>
            </div>
          </div>
        </header>
        <div className="flex flex-wrap justify-center items-center text-center flex-col gap-4 p-4">
          <h1 className="text-3xl font-semibold text-[#EEA73D]">
            AYOLLAR UCHUN ASOSIY <br /> FITNES MASLAHATLARI
          </h1>
          <h4 className="text-white">
            Power Life Team Tomonidan | 2021 Yil 15 Yanvar
          </h4>
          <div className="w-[600px] max-w-[90%] flex flex-col justify-center items-center gap-3 shadow-lg shadow-[#EEA73D] rounded-xl p-3">
            <img
              src={require("../images/womens fitnes/1.png")}
              alt="womens"
              className="rounded-xl"
            />
            <p className="text-xl text-white">
              Ayollar uchun ushbu muhim fitnes maslahatlari bilan
              mashg'ulotlarni muntazam ravishda bajaring. Sizning hozirgi
              fitness maqsadlaringiz yoki qobiliyatingizdan qat'i nazar, har
              qanday ayol (har qanday yoshdagi) sog'lig'i va kuchini mustahkam
              fitnes dasturi bilan qo'llab-quvvatlashi mumkin.
            </p>
          </div>
          <div className="w-full min-h-[60vh] flex justify-evenly items-center flex-wrap">
            {pages.map((page) => (
              <div
                key={page.id}
                className="w-[600px] min-h-[350px] max-w-[90%] flex justify-start items-center gap-3 flex-col"
              >
                <h1 className="text-3xl text-[#EEA73D] font-semibold">
                  {page.title}
                </h1>
                <p className="text-white">{page.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WomensFitness;
