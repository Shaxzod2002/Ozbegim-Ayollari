import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full min-h-[80px] flex justify-between px-3 items-center bg-black">
      <div className="brand">
        <NavLink exact to="/">
          <img
            src={require("../images/Home/icon.png")}
            className="rounded-sm w-[150px]"
            alt="O'zbegim ayollari"
          />
        </NavLink>
      </div>
      <div className="menu flex gap-4 items-center">
        <NavLink
          to="/womens-rights"
          className={"text-[#EEA73D] text-2xl menu-link"}
        >
          Huquq
        </NavLink>
        <NavLink
          to="/womens-of-women"
          className={"text-[#EEA73D] text-2xl menu-link"}
        >
          Psixologiya
        </NavLink>
        <NavLink
          to="/solutions-to-medical-problems"
          className={"text-[#EEA73D] text-2xl menu-link"}
        >
          Tibbiy muammolar
        </NavLink>
        <NavLink
          to="/womens-fitness"
          className={"text-[#EEA73D] text-2xl menu-link"}
        >
          Fitnes
        </NavLink>
        <NavLink
          to="/womens-clothing"
          className={"text-[#EEA73D] text-2xl menu-link"}
        >
          Kiyimlar
        </NavLink>
        <NavLink
          to="/cultural-entertainment-for-women"
          className={"text-[#EEA73D] text-2xl menu-link"}
        >
          Madaniy hordiq
        </NavLink>
        <NavLink
          className={"text-[#EEA73D] text-2xl menu-link"}
          to="/suggestions"
        >
          Takliflar
        </NavLink>
      </div>
      <div className="login flex items-center gap-3">
        <Link
          className="duration-300 border border-[#EEA73D] text-2xl text-[#EEA73D] py-1 px-4 rounded-lg hover:bg-[#EEA73D] hover:text-[#000]"
          to={"/signin"}
        >
          Kirish
        </Link>
        <Link
          className="border border-[#000] bg-[#EEA73D] text-2xl text-[#000] py-1 px-4 rounded-lg hover:border-[#EEA73D] hover:text-[#EEA73D] hover:bg-transparent"
          to={"/signup"}
        >
          Ro'yxatdan o'tish
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
