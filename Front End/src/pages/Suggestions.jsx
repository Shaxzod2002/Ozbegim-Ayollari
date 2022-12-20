import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Suggestions = () => {
  const [userName, setUserName] = useState("");
  const [textarea, setTextarea] = useState("");
  const [user, setUser] = useState([]);
  const userLoginRef = collection(db, "comments");
  const createUser = async () => {
    await addDoc(userLoginRef, {
      userName,
      textarea,
    });
  };
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userLoginRef);
      setUser(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUser();
    if (!user) return null;
  });
  const navigate = useNavigate();
  return (
    <div>
      <section className="w-full min-h-[100vh] flex-col gap-5 py-8 bg-black flex justify-center items-center">
        <div className="w-[90%] min-h-0 flex justify-around flex-wrap items-center gap-10 py-6">
          {user.map((item, index) =>
            index >= user.length - 10 ? (
              <div
                className=" bg-black text-white w-[400px] min-h-[100px] py-3 shadow-lg shadow-[#EEA73D] rounded-lg flex flex-col gap-2 p-2"
                key={item.id}
              >
                <h2 className="text-3xl text-center">{item.textarea}</h2>
                <p className="text-lg text-end">{item.userName}</p>
              </div>
            ) : null
          )}
        </div>
        <form className="w-[400px] min-h-[500px] shadow-lg shadow-[#EEA73D] rounded-lg flex justify-center items-center flex-col gap-4">
          <h2 className="text-[#EEA73D] text-3xl font-bold">
            Taklif Bildirish
          </h2>
          <input
            type="email"
            name="email"
            className="w-[90%] h-[40px] bg-white py-2 px-4 text-lg rounded-lg resize-none"
            required
            placeholder="Ismingiz"
            onChange={(e) => setUserName(e.target.value)}
          />
          <textarea
            type="password"
            name="comment"
            className="w-[90%] h-[200px] bg-white py-2 px-4 text-lg rounded-lg resize-none"
            required
            placeholder="Taklif bildiring"
            onChange={(e) => setTextarea(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="warning"
            className="w-[90%] h-[50px]"
            onClick={() => {
              if (userName && textarea) {
                createUser();
                navigate("/");
              }
            }}
          >
            Yuborish
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Suggestions;
