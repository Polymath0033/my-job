import classes from "./Button.module.css";
const Button = ({ value, onClick, type, red }) => {
  return (
    <button
      style={{ backgroundColor: red ? "#e35e5e" : "" }}
      className={classes.button}
      type={type || "button"}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Button;
