import React, { useEffect, useState } from "react";
import axios from "axios";

const WomensOfWomen = () => {
  const [pages, setPages] = useState();

  useEffect(() => {
    const getPages = async () => {
      const res = await axios.get("http://127.0.0.1:8000/psixlar/");
      setPages(res.data);
    };
    getPages();
  }, []);
  if (!pages) return null;
  return (
    <div>
      <section className="womens-of-women w-full min-h-[100vh] bg-black">
        <header>
          <div className="bg-theme">
            <div className="w-1/2 min-h-[120vh] flex justify-center flex-col gap-4 pl-[100px]">
              <h1 className="text-[#EEA73D] text-5xl font-bold">
                Biz o'zingizni anglashga yordam beramiz
              </h1>
              <p className="text-white text-3xl">
                Ayollarning psixologiyasi ko'pincha erkaklar uchun sir bo'lib
                qoladi. Bu biologik va psixologik farqlarga asoslanadi. Ayollar
                va erkaklar har xil fikrlash, xatti-harakatlar va muloqot
                uslubiga ega. Shu sababli, munosabatlarda juda ko'p
                kelishmovchiliklar paydo bo'ladi
              </p>
            </div>
          </div>
        </header>
        <div className="w-full min-h-[100vh] p-10 flex flex-col gap-8">
          {pages.map((page) => (
            <div
              key={page.id}
              className="shadow-lg shadow-[#EEA73D] rounded-md p-4"
            >
              <h2 className="text-[#EEA73D] text-2xl">{page.title}</h2>
              <p className="text-[#fff] text-lg">{page.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WomensOfWomen;
