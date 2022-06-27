import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./project-card.module.css";

const ProjectCard = (props) => {
  const { title, thumbnail, description, technologies, reverse } = props;
  const [transform, setTransform] = React.useState("w_600,h_600");

  const cloudinary = "https://res.cloudinary.com/dpe9ysnle/image/upload/";

  React.useEffect(() => {
    if (window.innerWidth <= 600) {
      setTransform("w_300,h_300");
    }
  }, []);

  return (
    <article className={styles["project-card"]}>
      <div
        role="presentation"
        className={clsx(reverse && styles.last, styles["button-group"])}
      >
        <button className={styles.button}>
          <span>View Detail</span>
        </button>
        <hr />
        <button className={styles.button}>
          <span>Source Code</span>
        </button>
        <hr />
        <button className={styles.button}>
          <span>Live Demo</span>
        </button>
        <hr />
      </div>
      <div role="presentation" className={styles["description-wrapper"]}>
        <header>
          <h3>{title}</h3>
        </header>
        <p>{description}</p>
      </div>
      {/* https://res.cloudinary.com/dpe9ysnle/image/upload/portfolio/images/battleship_fse4qk.png */}
      <div
        role="presentation"
        className={clsx(reverse && styles.first, styles["image-wrapper"])}
      >
        <img
          src={cloudinary + transform + "/portfolio/images/" + thumbnail}
          alt={thumbnail}
          width={600}
          height={600}
        />
      </div>
    </article>
  );
};

ProjectCard.defaultProps = {
  reverse: false,
};

ProjectCard.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
};

export default ProjectCard;
