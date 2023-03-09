import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.jpg";
import { NavLink } from "react-router-dom";
import LoginBtn from "../auth/LoginBtn";
import { useState } from "react";
import Aside from "../Aside/Aside";
const Header = ({ mobile, tablet }) => {
  const [aside, setAside] = useState(false);
  const linkActiveClass = (nav) => (nav.isActive ? classes.active : "");
  const toggleSide = () => {
    setAside((prev) => (prev = !aside));
  };
  return (
    <header className={classes.header}>
      {tablet && (
        <button className={classes.tab} onClick={toggleSide}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      )}
      {aside && tablet && <Aside toggleSide={toggleSide} />}
      <div className={classes.head}>
        <div className={classes.logo}>
          <img src={logo} alt="myJob" />
          <h2> myJob </h2>
        </div>
        {!tablet && (
          <div className={classes.profile}>
            <img src={profile} alt="Profile" />
            <div>
              <h2>Yousouph</h2>
              <p>Profile</p>
            </div>
          </div>
        )}
      </div>

      <nav className={classes.nav}>
        {!tablet && (
          <ul>
            <li>
              <NavLink className={linkActiveClass} to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={linkActiveClass} to="/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink className={linkActiveClass} to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink className={linkActiveClass} to="/about-us">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink className={linkActiveClass} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        )}
        <div>
          <LoginBtn value="Login" mobile={mobile} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
