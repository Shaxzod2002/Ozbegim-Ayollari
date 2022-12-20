import React, { useState } from "react";
import { useNavigate } from "react-router";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
      localStorage.setItem("isAuth", true);
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      <section className="w-full min-h-[calc(100vh-80px)] bg-black flex justify-center items-center">
        <form
          onClick={handleSubmit}
          className="w-[450px] max-w-[90%] min-h-[500px] shadow-lg shadow-[#EEA73D] rounded-lg flex justify-center items-center flex-col gap-4 py-6"
        >
          <h2 className="text-[#EEA73D] text-3xl font-bold">Tizimga kirish</h2>
          <div className="form-group w-[90%] flex flex-col gap-2">
            <label htmlFor="email" className="text-xl text-[#EEA73D]">
              Elektron pochtangizni kiriting
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-white py-2 px-4 text-2xl rounded-lg"
              required
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group w-[90%] flex flex-col gap-2">
            <label htmlFor="email" className="text-xl text-[#EEA73D]">
              Elektron pochtangizni kiriting
            </label>
            <input
              type="password"
              name="Password"
              label="Password"
              className="w-full bg-white py-2 px-4 text-2xl rounded-lg"
              placeholder="Password..."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <input
            type={"submit"}
            className="w-[90%] h-[50px] bg-[#EEA73D] rounded-lg text-center text-xl cursor-pointer"
            value={"Yuborish"}
          />
          <p className="text-md text-[#EEA73D] text-center">
            Sizning avval ro'yhatdan o'tmagan bo'lsangiz
            <br />
            <Link to={"/signup"} className="text-blue-500">
              Ro'yhatdan o'tish
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
