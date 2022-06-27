import Banner from "../banner";
import Nav from "../nav";
import About from "../about";
import Projects from "../projects";
import Contact from "../contact";
import styles from "./app.module.css";
import NavContainer from "../../containers/nav-container";

const App = () => {
  return (
    <div role="presentation" className={styles.app}>
      <Banner />
      <NavContainer />
      <main>
        <About />
        <div role="presentation" id="my-works" />
        <header className="header">
          <h2>My Works</h2>
        </header>
        <Projects />
      </main>
      <Contact />
    </div>
  );
};

export default App;
