/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  const clearData = () => {
    setUserName("");
    setPassword("");
    setEmail("");
    setNumber("");
    setProfession("");
  };

  const register = () => {
    const obj = {
      username: userName,
      password: password,
      email: email,
      number: number,
      profession: profession,
    };
    localStorage.setItem("userData", JSON.stringify(obj));
    clearData();
    navigate("/login");
  };

  return (
    <div
      className="container col-lg-12 mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div className="row  bg-light p-4 col-lg-5 shadow rounded">
        <div className="text-center text-danger  fw-bold h2">Register Here</div>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label>Mobile</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <select
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="form-select">
            <option>Select Profession</option>
            <option>Developer</option>
            <option>Tester</option>
            <option>Designer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={register}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
