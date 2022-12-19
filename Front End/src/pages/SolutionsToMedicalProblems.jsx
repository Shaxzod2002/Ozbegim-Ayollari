import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SolutionsToMedicalProblems = () => {
  return (
    <div>
      <Navbar />
      <section className="solutions-to-medical-problems w-full min-h-[100vh] bg-black">
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
      </section>
      <Footer />
    </div>
  );
};

export default SolutionsToMedicalProblems;
