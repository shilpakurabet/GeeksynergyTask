/** @format */

import "./App.css";
import Register from "./Components/Signup/signup";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Signin/signin";
import Home from "./Components/Home/home";
import CompanyInfo from "./Components/Componyinfo/info";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="info" element={<CompanyInfo />} />
    </Routes>
  );
}

export default App;
