import classes from "./Home.module.css";
import hero from "../assets/hero.png";
import Button from "../components/UI/Button/Button";
import code_village from "../assets/code_village.png";
import item_7 from "../assets/item_7.png";
const Home = ({ toggleRegister }) => {
  return (
    <section className={classes.section}>
      <div className={classes.top}>
        <div className={classes.hero}>
          <img src={hero} alt="Jobs" />
          <h2>Jobs For Every GRADUATE</h2>
        </div>
        <div className={classes["form-input"]}>
          <div className={classes.grid}>
            <input type="text" name="company" placeholder="Company" />
            <select name="filter" id="filter">
              <option value="">Filter</option>
            </select>
          </div>
          <div className={classes.search}>
            <input type="search" name="search" placeholder="Search the web" />
            <i className={classes.icon}>
              <ion-icon name="search"></ion-icon>
            </i>
          </div>
          <div className={classes.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              soluta nisi, atque nemo non iste commodi inventore numquam.
            </p>
            <Button value="Signup" onClick={toggleRegister} />
          </div>
        </div>
      </div>
      <div className={classes.mid}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          commodi sequi nisi quos quasi, distinctio laudantium, et quae
          praesentium porro dolorem laborum rem quia excepturi sed asperiores
          aspernatur quidem! Eius, accusantium minima culpa consectetur nisi
          quaerat itaque expedita dolore. Totam, adipisci. Suscipit, at omnis
          sit consequatur sapiente ipsa. Autem reiciendis ducimus, accusamus
          voluptas voluptatum maiores recusandae cupiditate consequuntur
          expedita adipisci tempora nesciunt ratione iure magnam. Eos ut dolor,
        </p>
      </div>
      <article className={classes.article}>
        <h1>Recently posted jobs</h1>
        <ul className={classes.list}>
          <li>
            <div className={classes.image}>
              <img src={code_village} alt="Code Village" />
              <div className={classes.details}>
                <h2 className={classes.title}>Graphic Designer</h2>
                <h4>code village</h4>
                <p className={classes.location}>Ilorin,Nigeria</p>
                <Button value="more" />
              </div>
            </div>
            <div className={classes.right}>
              <h2 className={classes.title}>Graphic Designer</h2>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                magnam at fuga mollitia corporis. Quam expedita officiis modi
                quis earum?
              </p>
              <h3>Requirements</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                commodi? Magni, eveniet.
              </p>
              <h3>Responsibility</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Itaque, ea.
              </p>
            </div>
          </li>
          <li>
            <div className={classes.image}>
              <img src={item_7} alt="Item 7" />
              <div className={classes.details}>
                <h2 className={classes.title}>Restaurant Manager</h2>
                <h4>code village</h4>
                <p className={classes.location}>Ilorin,Nigeria</p>
                <Button value="more" />
              </div>
            </div>

            <div className={classes.right}>
              <h2 className={classes.title}>Restaurant Manager</h2>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                magnam at fuga mollitia corporis. Quam expedita officiis modi
                quis earum?
              </p>
              <h3>Requirements</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                commodi? Magni, eveniet.
              </p>
              <h3>Responsibility</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Itaque, ea.
              </p>
            </div>
          </li>
          <button className={classes.more}>more updates</button>
        </ul>
      </article>
    </section>
  );
};
export default Home;
