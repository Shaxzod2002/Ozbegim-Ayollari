import { Button, TextField } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full min-h-[calc(100vh-80px)] bg-black flex justify-center items-center">
        <form
          action=""
          className="w-[400px] min-h-[500px] shadow-lg shadow-[#EEA73D] rounded-lg flex justify-center items-center flex-col gap-4"
        >
          <h2 className="text-[#EEA73D] text-3xl font-bold">
            Ro'yhatdan o'tish
          </h2>
          <div className="form-group w-[90%] flex flex-col gap-2">
            <label htmlFor="username" className="text-xl text-[#EEA73D]">Ism Familiyangizni kiriting</label>
            <TextField
              type="text"
              id="username"
              name="username"
              label="I.F.SH"
              className="w-full bg-white py-2 px-4 text-2xl rounded-lg"
              variant="filled"
              color="warning"
              required
            />
          </div>
          <div className="form-group w-[90%] flex flex-col gap-2">
            <label htmlFor="email" className="text-xl text-[#EEA73D]">Elektron pochtangizni kiriting</label>
            <TextField
              type="email"
              id="email"
              name="email"
              label="Email"
              className="w-full bg-white py-2 px-4 text-2xl rounded-lg"
              variant="filled"
              color="warning"
              required
            />
          </div>
          <div className="form-group w-[90%] flex flex-col gap-2">
            <label htmlFor="email" className="text-xl text-[#EEA73D]">Elektron pochtangizni kiriting</label>
            <TextField
              type="password"
              id="password"
              name="Password"
              label="Password"
              className="w-full bg-white py-2 px-4 text-2xl rounded-lg"
              variant="filled"
              color="warning"
              required
            />
          </div>
          <Button
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

export default SignUp;
