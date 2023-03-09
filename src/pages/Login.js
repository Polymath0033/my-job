import Input from "../components/UI/Input/Input";
import classes from "../components/auth/Auth.module.css";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button/Button";
const Login = ({ mobile }) => {
  return (
    <div className={classes.login}>
      <h2>Login</h2>
      <form className={classes.auth}>
        <div className={classes["form-control"]}>
          <label htmlFor="email_hone_number">Email</label>
          <Input placeholder="Email or Phone Number" name="email_hone_number" />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <Input type="password" placeholder="Password" name="password" />
        </div>
        <div className={classes["remember-me"]}>
          <h3>
            <input type="checkbox" name="checkbox" id="checkbox" />
            Remember me
          </h3>
          <h3>Forget Password?</h3>
        </div>
        <Button type={"submit"} value={"Login"} />
        <div className={classes.or}>
          <h3>OR</h3>
        </div>
        <div className={classes.bottom}>
          <h3>Don't have account?</h3>
          <Link to="/register">Subscribe now</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
