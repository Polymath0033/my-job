import classes from "./JobList.module.css";
import code_village from "../../../assets/code_village.png";
// import share from "../../../assets/Icon.png";
import Button from "../Button/Button";
const JobList = ({ mobile }) => {
  return (
    <>
      <ul className={classes.ul}>
        <li>
          <div className={classes.head}>
            {mobile && <img src={code_village} alt="code_village" />}
            <div className={classes.txt}>
              <h3>Graphics Design</h3>
              <div>
                <p className={classes.location}>Ilorin</p>
                <p>Full time</p>
              </div>
              <ul className={classes["inner-ul"]}>
                <li>Web development</li>
                <li>Negotiable</li>
                <li>N 40,0000</li>
                <li>2 months ago</li>
              </ul>
            </div>
            <address>
              <h4>Code village limited</h4>
              <span>
                Software development
                <br />
                Ilorin,Nigeria
              </span>
            </address>
          </div>
          <div className={classes.bottom}>
            {!mobile && <img src={code_village} alt="code_village" />}
            <summary className={classes.summary}>
              <h4>Job Summary</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                dignissimos porro, consequatur mollitia, odit rem quae, placeat
                nemo voluptatibus perspiciatis unde! Saepe pariatur minus
                dolores et maxime ratione quae sint?
              </p>
              <div className={classes["bottom-details"]}>
                <dl className={classes["description-list"]}>
                  <div>
                    <dt>Minimum Qualification</dt>
                    <dd>Diploma</dd>
                  </div>
                  <div>
                    <dt>Experience Level</dt>
                    <dd>Mid level</dd>
                  </div>
                  <div>
                    <dt>Experience length</dt>
                    <dd>4 years</dd>
                  </div>
                </dl>
                <div className={classes.share}>
                  <i>
                    <ion-icon name="share"></ion-icon>
                  </i>
                  <Button value="see more" />
                </div>
              </div>
            </summary>
          </div>
        </li>
      </ul>
      <ul className={classes.ul}>
        <li>
          <div className={classes.head}>
            {mobile && <img src={code_village} alt="code_village" />}
            <div>
              <h3>Graphics Design</h3>
              <div>
                <p className={classes.location}>Ilorin</p>
                <p>Full time</p>
              </div>
              <ul className={classes["inner-ul"]}>
                <li>Web development</li>
                <li>Negotiable</li>
                <li>N 40,0000</li>
                <li>2 months ago</li>
              </ul>
            </div>
            <address>
              <h4>Code village limited</h4>
              <span>
                Software development
                <br />
                Ilorin,Nigeria
              </span>
            </address>
          </div>
          <div className={classes.bottom}>
            {!mobile && <img src={code_village} alt="code_village" />}
            <summary className={classes.summary}>
              <h4>Job Summary</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                dignissimos porro, consequatur mollitia, odit rem quae, placeat
                nemo voluptatibus perspiciatis unde! Saepe pariatur minus
                dolores et maxime ratione quae sint?
              </p>
              <div className={classes["bottom-details"]}>
                <dl className={classes["description-list"]}>
                  <div>
                    <dt>Minimum Qualification</dt>
                    <dd>Diploma</dd>
                  </div>
                  <div>
                    <dt>Experience Level</dt>
                    <dd>Mid level</dd>
                  </div>
                  <div>
                    <dt>Experience length</dt>
                    <dd>4 years</dd>
                  </div>
                </dl>
                <div className={classes.share}>
                  <i>
                    <ion-icon name="share"></ion-icon>
                  </i>
                  <Button value="see more" />
                </div>
              </div>
            </summary>
          </div>
        </li>
      </ul>
    </>
  );
};
export default JobList;
