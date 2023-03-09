import classes from "./Aside.module.css";
import logo from "../../assets/logo.svg";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { AboutIcon, ContactIcon, HomeIcon, JobsIcon, NewsIcon } from "../icon";
import { NavLink } from "react-router-dom";
const Aside = ({ toggleSide }) => {
  const Backdrop = ({ toggleSide }) => {
    return <div className={classes.backdrop} onClick={toggleSide}></div>;
  };
  const Overlay = () => {
    const linkActiveClass = (nav) => (nav.isActive ? classes.active : "");

    return (
      <>
        <aside className={classes.aside}>
          <div className={classes.logo}>
            <img src={logo} alt="my-jobs" />
            <h3>myJobs</h3>
          </div>
          <nav className={classes.nav}>
            <ul>
              <li onClick={toggleSide}>
                <NavLink to="/home" className={linkActiveClass}>
                  <i className="icon">
                    <HomeIcon />
                  </i>
                  Home
                </NavLink>
              </li>
              <li onClick={toggleSide} className={linkActiveClass}>
                <NavLink to="/news">
                  <i className="icon">
                    <NewsIcon />
                  </i>
                  News
                </NavLink>
              </li>
              <li onClick={toggleSide} className={linkActiveClass}>
                <NavLink to="/jobs">
                  <i className="icon">
                    <JobsIcon />
                  </i>
                  Jobs
                </NavLink>
              </li>
              <li onClick={toggleSide}>
                <NavLink to="/about-us" className={linkActiveClass}>
                  <i className="icon">
                    <AboutIcon />
                  </i>
                  About us
                </NavLink>
              </li>

              <li onClick={toggleSide}>
                <NavLink to="/contact" className={linkActiveClass}>
                  <i className="icon">
                    <ContactIcon />
                  </i>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={classes["footer-logo"]}>
            <img src={logo} alt="my_job" />
            <h3>myJobs</h3>
          </div>
        </aside>
      </>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop toggleSide={toggleSide} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(<Overlay />, document.getElementById("modal"))}
    </Fragment>
  );
};
export default Aside;
