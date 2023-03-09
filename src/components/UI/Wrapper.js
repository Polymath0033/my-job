import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div style={{ position: "relative", top: 100 + "px" }}>{children}</div>
  );
};

export default Wrapper;
