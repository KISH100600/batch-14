import React from "react";

const Second = ({ data, bgTrue, callBack }) => {
  return (
    <div
      style={{
        background: bgTrue ? "yellow" : "red",
        padding: "100px",
        borderRadius: "5px",
      }}
    >
      {data}
      {/* <button onClick={callBack}>Child Button</button> */}
    </div>
  );
};

export default Second;
