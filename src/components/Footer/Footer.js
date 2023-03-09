import classes from "./Footer.module.css";
import transparent_logo from "../../assets/transparent_logo.png";
import facebook from "../../assets/facebook_.png";
import twitter from "../../assets/Path.png";
import instagram from "../../assets/instagram.png";
const Footer = () => {
  const year = new Date().getFullYear();
  const icons = [
    {
      name: "facebook",
      icon: facebook,
    },
    { name: "instagram", icon: instagram },
    {
      name: "twitter",
      icon: twitter,
    },
  ];
  return (
    <footer className={classes.footer}>
      <div className={classes.foot}>
        <div className={classes.logo}>
          <img src={transparent_logo} alt="my Job" />
          <h1>myJob</h1>
        </div>
        <p>
          myJob provide real opportunities to graduates and unemployed
          individuals to search and acquire jobs in their career and areas of
          interest
        </p>
      </div>

      <ul>
        <li>Recruitment</li>
        <li>Become Affiliate</li>
        <li>Go Unlimited</li>
        <li>Services</li>
      </ul>

      <ul>
        <li>Major Careers</li>
        <li>Business Stories</li>
        <li>Digital Store</li>
        <li>Learning</li>
        <li>Social Media</li>
      </ul>
      <ul>
        <li>Most recruiting companies</li>
        <li>Design Systems</li>
        <li>Themes & Templates</li>
        <li>Mockups</li>
        <li>Presentations</li>
        <li>Wireframes Kits</li>
        <li>UI Kits</li>
      </ul>
      <ul>
        <li>Who got jobs here</li>
        <li>License</li>
        <li>Refund Policy</li>
        <li>About Us</li>
        <li>Contacts</li>
      </ul>
      <div className={classes.copyright}>
        <h4>
          Copyright@
          {year}
        </h4>
        <div className={classes["footer-image"]}>
          {icons.map((icon) => (
            <div key={icon.name}>
              <img src={icon.icon} alt={icon.name} key={icon.name} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
