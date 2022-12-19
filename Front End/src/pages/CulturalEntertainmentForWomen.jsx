import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CulturalEntertainmentForWomen = () => {
  const [pages, setPages] = useState();

  useEffect(() => {
    const getPages = async () => {
      const res = await axios.get("http://127.0.0.1:8000/hordiqlar/");
      setPages(res.data);
    };
    getPages();
  }, []);
  if (!pages) return null;
  return (
    <div>
      <Navbar />
      <section className="cultural-entertainment-for-women w-full min-h-[100vh] bg-black">
        <header>
          <div className="bg-theme">
            <div className="w-1/2 min-h-[100vh] flex justify-center flex-col gap-4 pl-[100px]">
              <h1 className="text-[#EEA73D] text-5xl font-bold">
                Va nihoyat, bu yerda maroqli hordiq olishingiz mumkin.
              </h1>
              <p className="text-white text-3xl">
                Eng mashhur o'zbek filmlarni bizning kanalda tomosha qiling
              </p>
            </div>
          </div>
        </header>
        <div className="w-full min-h-[100vh] flex justify-around items-center flex-wrap gap-8 p-10">
          {pages.map((page) => (
            <div
              key={page.id}
              className="w-[600px] min-h-[600px] shadow-lg shadow-[#EEA73D] rounded-xl flex justify-center items-center gap-4 flex-col p-4"
            >
              <iframe
                width="560"
                height="315"
                src={page.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
              <h3 className="text-xl text-[#EEA73D]">{page.nom}</h3>
              <p className="text-white text-lg">{page.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CulturalEntertainmentForWomen;
