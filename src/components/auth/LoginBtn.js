import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./LoginModal";
import Button from "../UI/Button/Button";
const LoginBtn = ({ mobile }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => (prev = !prev));
  };
  return (
    <>
      {mobile ? (
        <NavLink
          className={(nav) => (nav.isActive ? "active" : "")}
          to={"login"}
        >
          Login
        </NavLink>
      ) : (
        <Button value="Login" red={true} onClick={toggleHandler} />
      )}
      {toggle && <LoginModal toggleLogin={toggleHandler} mobile={mobile} />}
    </>
  );
};

export default LoginBtn;
