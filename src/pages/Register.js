import classes from "../components/auth/Auth.module.css";
import Input from "../components/UI/Input/Input";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button/Button";
const Register = () => {
  return (
    <div className={classes.login}>
      <h2>Create an account</h2>
      <form className={classes.auth}>
        <div className={classes["form-control"]}>
          <label htmlFor="full_name">FullName</label>
          <Input placeholder="Yousouph Olosan" name="full_name" />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="email_hone_number">Email</label>
          <Input placeholder="Email or Phone Number" name="email_hone_number" />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="phone_number">Phone Number</label>
          <Input placeholder="08142206715" name="phone_number" />
        </div>
        <div className={classes.pass}>
          <div className={classes["form-control"]}>
            <label htmlFor="password">Create Password</label>
            <Input type="password" placeholder="Password" name="password" />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="repeat_password">Repeat Password</label>
            <Input
              placeholder="Repeat Password"
              name="repeat_password"
              type="password"
            />
          </div>
        </div>

        <div className={classes["remember-me"]}>
          <h3>
            <input type="checkbox" name="checkbox" id="checkbox" />
            Received update from us
          </h3>
          <h3>
            Have an account?<Link to="/login">Login</Link>
          </h3>
        </div>
        <Button type={"submit"} value={"Subscribe"} />
      </form>
    </div>
  );
};
export default Register;
