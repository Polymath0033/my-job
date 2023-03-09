import classes from "./About.module.css";
//import logo from "../assets/logo.svg";
import about from "../assets/about.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import Hero from "../components/UI/Hero";
const About = () => {
  return (
    <section className={classes.section}>
      <Hero title={"About us"}>
        <h4>our news update</h4>
        <p>The most elegant ...............</p>
        <span>
          -The titanium and the books of life is great ijhsuhuhd
          <br />
          -The titanium and the books of life is great ijhsuhuhd
        </span>
      </Hero>
      {/* <div className={classes.top}>
        <div className={classes.hero}>
          <div className={classes.logo}>
            <img src={logo} alt="my-job" />
            <div>
              <h1>myJob</h1>
              <h4>About us</h4>
            </div>
          </div>
        </div>

        <div className={classes.div}>
          <h4>our news update</h4>
          <p>The most elegant ...............</p>
          <span>
            -The titanium and the books of life is great ijhsuhuhd
            <br />
            -The titanium and the books of life is great ijhsuhuhd
          </span>
        </div>
      </div> */}
      <article className={classes.article}>
        <img src={about} alt="about-us" />
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          repellendus aspernatur. Excepturi, iure quod sapiente consequuntur
          ducimus harum! Beatae labore reiciendis voluptatem vero fugit ipsum
          cupiditate exercitationem nisi praesentium! Alias praesentium nam odit
          reprehenderit inventore facilis commodi ducimus. Exercitationem
          perferendis quia adipisci temporibus quidem nihil excepturi expedita
          iusto sequi voluptatibus placeat explicabo nam id quaerat, voluptate
          iure architecto illum alias dolores, quod quasi dicta asperiores?
          Aliquam dolorum laboriosam, tenetur sint, esse odio eveniet vitae
        </p>
      </article>
      <article className={classes.article}>
        <img src={vision} alt="vision" />
        <h1>Vision</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          repellendus aspernatur. Excepturi, iure quod sapiente consequuntur
          ducimus harum! Beatae labore reiciendis voluptatem vero fugit ipsum
          cupiditate exercitationem nisi praesentium! Alias praesentium nam odit
          reprehenderit inventore facilis commodi ducimus. Exercitationem
          perferendis quia adipisci temporibus quidem nihil excepturi expedita
          iusto sequi voluptatibus placeat explicabo nam id quaerat, voluptate
          iure architecto illum alias dolores, quod quasi dicta asperiores?
          Aliquam dolorum laboriosam, tenetur sint, esse odio eveniet vitae
        </p>
      </article>
      <article className={classes.article}>
        <img src={mission} alt="mission" />
        <h1>Mission</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          repellendus aspernatur. Excepturi, iure quod sapiente consequuntur
          ducimus harum! Beatae labore reiciendis voluptatem vero fugit ipsum
          cupiditate exercitationem nisi praesentium! Alias praesentium nam odit
          reprehenderit inventore facilis commodi ducimus. Exercitationem
          perferendis quia adipisci temporibus quidem nihil excepturi expedita
          iusto sequi voluptatibus placeat explicabo nam id quaerat, voluptate
          iure architecto illum alias dolores, quod quasi dicta asperiores?
          Aliquam dolorum laboriosam, tenetur sint, esse odio eveniet vitae
        </p>
      </article>
    </section>
  );
};
export default About;
