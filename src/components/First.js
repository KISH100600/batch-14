import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const First = ({ navigation }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8081/getData?token=${token}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => setData(response))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button
        className="btn btn-danger col-3 "
        onClick={() => navigate("second", { state: { id: 2, name: "kish" } })}
      >
        second
      </button>
      <button
        className="btn btn-danger col-3 "
        onClick={() => navigate("third")}
      >
        third
      </button>
      <button
        className="btn btn-danger col-3 "
        onClick={() => navigate("fourth")}
      >
        fourth
      </button>
      <button
        className="btn btn-danger col-3 "
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Logout
      </button>
      <Outlet></Outlet>
    </>
  );
};

export default First;
