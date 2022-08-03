/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const localStorageData = localStorage.getItem("userData");
    setUserData(JSON.parse(localStorageData));
    console.log("localData", JSON.parse(localStorageData));
  }, []);

  const login = () => {
    if (userName !== userData.username) {
      return (document.getElementById("message").innerHTML =
        "Invalid UserName!");
    }
    if (password !== userData.password) {
      return (document.getElementById("message").innerHTML =
        "Invalid Password!");
    }
    navigate("/home");
  };

  return (
    <div
      className="container col-lg-12 mt-5 "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div className="row  bg-light p-4 col-lg-5 shadow rounded">
        <div
          id="message"
          className="alert alert-danger text-center"
          role="alert">
          Enter Login Credentials
        </div>
        <div className="text-center text-danger fw-bold h2"> Login </div>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
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
        <button type="submit" className="btn btn-primary" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
