import JobList from "../components/UI/JobList/JobList";
import classes from "./News.module.css";
const News = ({ mobile }) => {
  return (
    <section className={classes.section}>
      <div className={classes.top}>
        <h1>
          Latest news
          <br />& discussion
        </h1>
        <div>
          <h4>our news update</h4>
          <p>The most elegant ...............</p>
          <span>
            -The titanium and the books of life is great ijhsuhuhd
            <br />
            -The titanium and the books of life is great ijhsuhuhd
          </span>
        </div>
      </div>
      <JobList mobile={mobile} />
    </section>
  );
};
export default News;
