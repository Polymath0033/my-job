import envelope from "../assets/envelope.svg";
import call from "../assets/call.svg";
import two_4 from "../assets/24.svg";
import classes from "./Contact.module.css";
import logo from "../assets/logo.svg";
const Contact = () => {
  return (
    <section className={classes["contact-us"]}>
      <article className={classes.article}>
        <div className={classes["logo-top"]}>
          <div className={classes.logo}>
            <img src={logo} alt="my-job" />
            <div>
              <h1>myJobs</h1>
              <h4>About us</h4>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <h1>Contact us</h1>
          <h3>
            We love catching up with our supporters and want to make speaking
            with us as easy as possible.
          </h3>
        </div>
        <div className={classes.side}>
          <h4>Where you can find us</h4>
          <div>
            <i className="bi bi-geo-alt-fill"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              culpa aliquid eum maxime possimus rem accusamus voluptatem
              veritatis ea aut.
            </p>
          </div>
        </div>
      </article>
      <div className={classes.form}>
        <h1>feel free to drop message for us</h1>
        <form>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="10"
            placeholder="Input Text"
          ></textarea>
        </form>
        <aside>
          <div className={classes.details}>
            <div>
              <img src={envelope} alt="envelope" />
              <h5>info@myjobs.com.ng</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt!
              </small>
            </div>
            <div>
              <img src={call} alt="call" />
              <h5>info@myjobs.com.ng</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt!
              </small>
            </div>
            <div>
              <img src={two_4} alt="24" />
              <h5>info@myjobs.com.ng</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt!
              </small>
            </div>
          </div>
          <button type="submit">Send</button>
        </aside>
      </div>
    </section>
  );
};
export default Contact;
