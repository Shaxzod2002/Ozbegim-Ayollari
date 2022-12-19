import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

const SolutionsToMedicalProblems = () => {
  const [pages, setPages] = useState();

  useEffect(() => {
    const getPages = async () => {
      const response = await axios.get(
        "http://127.0.0.1:8000/tibbiy-muammolar/"
      );
      setPages(response.data);
    };
    getPages();
  }, []);
  if (!pages) return null;
  return (
    <div>
      <Navbar />
      <section className="solutions-to-medical-problems w-full min-h-[100vh] bg-black">
        <header>
          <div className="bg-theme">
            <div className="w-1/2 min-h-[100vh] flex justify-center flex-col gap-4 pl-[100px]">
              <h1 className="text-[#EEA73D] text-5xl font-bold">
                Ayollar salomatligini saqlash uchun muhim bo‘lgan tibbiy
                tekshiruvlar
              </h1>
              <p className="text-white text-3xl">
                Salomatlikda muammolar paydo bo‘lishiga yosh bilan bog‘liq
                o‘zgarishlar ham sabab bo‘ladi. Turli kasalliklarning oldini
                olish uchun esa shifokor ko‘rigidan o‘tib turish kerak.
              </p>
            </div>
          </div>
        </header>
        <div className="w-full min-h-[100vh] flex justify-center items-center flex-wrap gap-8 p-8">
          {pages.map((page) => (
            <div
              key={page.id}
              className="shadow-lg shadow-[#EEA73D] rounded-lg w-[90%] p-8"
            >
              <h2 className="text-[#EEA73D] text-2xl">{page.title}</h2>
              <p className="text-[#fff] text-lg">{page.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SolutionsToMedicalProblems;
