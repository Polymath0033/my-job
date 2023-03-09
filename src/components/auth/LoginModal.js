import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
const LoginModal = ({ toggleLogin, mobile }) => {
  return (
    <Modal closeModal={toggleLogin} title={"Login"}>
      <form className={classes.auth}>
        <Input placeholder="Email or Phone Number" name="email_hone_number" />
        <Input type="password" placeholder="Password" name="Password" />
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
          {mobile ? (
            <Link to="register">Subscribe now</Link>
          ) : (
            <h3>Subscribe now</h3>
          )}
        </div>
      </form>
    </Modal>
  );
};
export default LoginModal;
