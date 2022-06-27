import React from "react";
import PropTypes from "prop-types";
import collection from "../../assets/data/icons.json";
import styles from "./icon-group.module.css";
import horizontalLoop from "../../utils/horizontal-loop";

const iconSrcBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

const IconGroup = (props) => {
  const { list } = props;

  const icons = collection.filter((icon) => {
    return list.includes(icon.name);
  });

  const iconRefs = React.useRef([]);

  React.useEffect(() => {
    const loop = horizontalLoop(iconRefs.current, {
      paused: false,
      repeat: -1,
    });
    return () => loop.kill();
  }, []);

  return (
    <ul className={styles["icon-group"]}>
      {icons.map(({ name, versions }, i) => (
        <li
          key={i}
          className={styles["image-wrapper"]}
          ref={(el) => iconRefs.current.push(el)}
        >
          <img
            alt={name}
            width={64}
            height={64}
            src={
              iconSrcBaseUrl +
              name +
              "/" +
              name +
              "-" +
              versions.svg[0] +
              ".svg"
            }
          />
        </li>
      ))}
    </ul>
  );
};

IconGroup.propTypes = {
  list: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default IconGroup;
