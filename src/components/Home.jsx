import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fetch(
      `http://localhost:8081/login?userName=${userName}&password=${password}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((response) => {
        localStorage.setItem("token", response.token);
        console.log(response);
        navigate("/first");
      })
      .catch((err) => {
        alert("Invalid user creds");
        console.log(err);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <input
        value={userName}
        type="text"
        onChange={(username) => setUserName(username.target.value)}
        placeholder="UserName"
      />
      <br />
      <input
        value={password}
        type="password"
        onChange={(pass) => setPassword(pass.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={login}>Submit</button>
    </div>
  );
};

export default Home;
