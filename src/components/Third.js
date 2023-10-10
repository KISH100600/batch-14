import React from "react";
import { Outlet } from "react-router-dom";

const Third = () => {
  return (
    <>
      <div>Third</div>
      <Outlet />
    </>
  );
};

export default Third;
