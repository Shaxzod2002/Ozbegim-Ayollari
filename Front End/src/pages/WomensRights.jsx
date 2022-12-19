import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const WomensRights = () => {
  return (
    <div>
      <Navbar />
      <section className="womens-rights w-full min-h-[100vh] bg-black flex justify-between items-center flex-wrap gap-3 p-3 flex-col"></section>
      <Footer />
    </div>
  );
};

export default WomensRights;
