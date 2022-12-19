import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTelegram, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="w-full min-h-[50vh] bg-[#000] pt-4 border border-[#EEA73D]">
      <div className="w-full min-h-[50vh] flex gap-3 justify-evenly items-start">
        <div className="brand flex items-center min-h-[250px]">
          <Link exact to="/">
            <img
              src={require("../images/Home/icon.png")}
              className="rounded-sm w-[300px]"
              alt="O'zbegim ayollari"
            />
          </Link>
        </div>
        <div className="contact w-[300px] flex flex-col gap-2">
          <h3 className="text-2xl text-[#EEA73D] font-semibold mb-4">
            Biz Bilan Bog'lanish
          </h3>
          <a
            href="tel:+998911054305"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            +998 (91) 105 43 05
          </a>
          <a
            href="tel:+998907750201"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            +998 (90) 775 02 01
          </a>
          <a
            href="tel:+998973009899"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            +998 (97) 300 98 99
          </a>
          <div className="social-media w-[200px] min-h-[120px] flex justify-between items-center">
            <a
              href="https://t.me/webshohdev"
              target={"_blank"}
              rel="noreferrer"
              className="text-3xl text-[#eea73d]"
            >
              <BsTelegram />
            </a>
            <a
              href="https://www.instagram.com/webshohdev_uz/"
              target={"_blank"}
              rel="noreferrer"
              className="text-3xl text-[#eea73d]"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/webshohdev"
              target={"_blank"}
              rel="noreferrer"
              className="text-3xl text-[#eea73d]"
            >
              <BsFacebook />
            </a>
          </div>
        </div>
        <div className="links flex flex-col">
          <h3 className="text-2xl text-[#EEA73D] font-semibold mb-4">
            Bizning Sahifalar
          </h3>
          <Link
            to="/womens-rights"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            Huquq
          </Link>
          <Link
            to="/womens-of-women"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            Psixologiya
          </Link>
          <Link
            to="/solutions-to-medical-problems"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            Tibbiy muammolar
          </Link>
          <Link
            to="/womens-fitness"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            Fitnes
          </Link>
          <Link
            to="/womens-clothing"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            Kiyimlar
          </Link>
          <Link
            to="/cultural-entertainment-for-women"
            className={"text-[#EEA73D] text-2xl menu-link"}
          >
            Madaniy hordiq
          </Link>
          <Link
            className={"text-[#EEA73D] text-2xl menu-link"}
            to="/suggestions"
          >
            Takliflar
          </Link>
        </div>
        <div className="register flex items-start flex-col gap-4">
          <h3 className="text-2xl text-[#EEA73D] font-semibold mb-4">
            Yangiliklardan xabardor bo'ling
          </h3>
          <p className={"text-[#EEA73D] text-2xl"}>
            Buning uchun ro'yhatdan o'ting
          </p>
          <input
            type={"email"}
            className="bg-white w-[300px] rounded-md px-3 py-2 text-lg"
            placeholder="Elektron manzilingizni kiriting"
          />
          <input
            type={"password"}
            className="bg-white w-[300px] rounded-md px-3 py-2 text-lg"
            placeholder="Parolingizni kiriting"
          />
          <button
            type="submit"
            className="bg-[#EEA73D] py-2 px-4 text-2xl rounded-lg"
          >
            Ro'yxatdan o'tish
          </button>
        </div>
      </div>
      <div className="w-full min-h-[80px] flex justify-around items-center">
        <h4 className="text-xl text-[#EEA73D]">
          Mualliflik huquqi © 2022 Wednesday.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
