import { Button } from "@mui/material";
import React from "react";

const Suggestions = () => {
  return (
    <div>
      <section className="w-full min-h-[100vh] bg-black flex justify-center items-center">
        <form className="w-[400px] min-h-[500px] shadow-lg shadow-[#EEA73D] rounded-lg flex justify-center items-center flex-col gap-4">
          <h2 className="text-[#EEA73D] text-3xl font-bold">
            Taklif Bildirish
          </h2>
          <textarea
            type="password"
            name="comment"
            className="w-[90%] h-[200px] bg-white py-2 px-4 text-lg rounded-lg resize-none"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="warning"
            className="w-[90%] h-[50px]"
          >
            Yuborish
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Suggestions;
