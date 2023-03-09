import classes from "./Hero.module.css";
import logo from "../../assets/logo.svg";
const Hero = ({ title, children }) => {
  return (
    <div className={classes.top}>
      <div className={classes.hero}>
        <div className={classes.logo}>
          <img src={logo} alt="my-job" />
          <div>
            <h1>myJob</h1>
            <h4>{title}</h4>
          </div>
        </div>
      </div>

      <div className={classes.div}>{children}</div>
    </div>
  );
};
export default Hero;
