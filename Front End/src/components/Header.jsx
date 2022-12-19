import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Header = () => {
  const [pages, setPages] = useState();

  useEffect(() => {
    const getPages = async () => {
      const response = await axios.get("./header.json");
      setPages(response.data);
    };
    getPages();
  }, []);
  if (!pages) return false;
  return (
    <div>
      <header className="w-full flex flex-wrap bg-black py-[50px]">
        {pages.map((page) => (
          <div
            key={page.id}
            className="header-page flex justify-center items-center w-full md:w-1/2 min-h-[calc(100vh-80px)] bg-black relative overflow-hidden"
          >
            <img src={page.image} alt={`${page.id}`} />
            <div className="absolute top-0 z-30 left-0 w-full min-h-full bg-black/60 flex justify-between py-[100px] items-center flex-col gap-4 px-8 text-center">
              <h1 className="text-[#EEA73D] text-5xl text-center title">
                {page.title}
              </h1>
              <p className="text-2xl text-white">{page.paragraph}</p>
              <Link
                to={`/${page.url}`}
                className="bg-[#EEA73D] text-2xl py-2 px-4 rounded-xl"
              >
                Ko'proq Ko'rish
              </Link>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
};

export default Header;
