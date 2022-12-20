import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = ({ setIsAuth }) => {
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
      setIsAuth(false);
      console.log("You are logged out");
    } catch (error) {
      console.error(error);
    }
  };
  return (
  );
};

export default Account;
