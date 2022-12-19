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

function App() {
  return (
    <>
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
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
