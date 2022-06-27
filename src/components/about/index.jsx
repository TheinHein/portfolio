import React from "react";
import styles from "./about.module.css";
import skillList from "../../assets/data/skills.json";
import IconGroup from "../icon-group.jsx";
import ReactMarkdown from "react-markdown";
import about from "../../assets/markdown/about.md";

const About = (props) => {
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    fetch(about)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <section className={styles.about} id="about">
      <header className="header">
        <h2>About</h2>
      </header>
      <div role="presentation" className={styles.body}>
        <ReactMarkdown children={content} />
      </div>
      <IconGroup list={skillList} />
    </section>
  );
};

export default About;
