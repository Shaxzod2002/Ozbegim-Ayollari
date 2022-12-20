import { useState } from "react";
import Home from "./pages/Home";
import WomensRights from "./pages/WomensRights";
import { Route, Routes } from "react-router-dom";
import WomensOfWomen from "./pages/WomensOfWomen";
import SolutionsToMedicalProblems from "./pages/SolutionsToMedicalProblems";
import WomensFitness from "./pages/WomensFitness";
import WomensClothing from "./pages/WomensClothing";
import CulturalEntertainmentForWomen from "./pages/CulturalEntertainmentForWomen";
import Suggestions from "./pages/Suggestions";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./css/main.css";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <AuthContextProvider>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womens-rights" element={<WomensRights />} />
        <Route path="/womens-of-women" element={<WomensOfWomen />} />
        <Route
          path="/solutions-to-medical-problems"
          element={<SolutionsToMedicalProblems />}
        />
        <Route path="/womens-fitness" element={<WomensFitness />} />
        <Route path="/womens-clothing" element={<WomensClothing />} />
        <Route
          path="/cultural-entertainment-for-women"
          element={<CulturalEntertainmentForWomen />}
        />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/signin" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<SignUp setIsAuth={setIsAuth} />} />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
