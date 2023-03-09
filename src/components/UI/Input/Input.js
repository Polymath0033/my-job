//const { forwardRef } = require("react");
import { forwardRef } from "react";
import classes from "./Input.module.css";
const Input = forwardRef(({ type, placeholder, name, ref }) => {
  return (
    <input
      ref={ref}
      type={type || "text"}
      placeholder={placeholder}
      className={classes.input}
      name={name}
      id={name}
    />
  );
});
export default Input;
