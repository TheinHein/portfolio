import "./App.css";
import projects from "./data/projects.json";
import ReactMarkdown from "react-markdown";

const cloudinary =
  "https://res.cloudinary.com/dpe9ysnle/image/upload/portfolio/images/";

function App() {
  console.log(projects);
  return (
    <div className="App">
      {projects.length > 0 &&
        projects.map((p, i) => (
          <article key={i}>
            <header>
              <h3>{p.title}</h3>
            </header>
            {/* https://res.cloudinary.com/dpe9ysnle/image/upload/portfolio/images/battleship_fse4qk.png */}
            <img src={p.thumbnail} alt={p.thumbnail} />
            <ReactMarkdown children={p.content} />
          </article>
        ))}
    </div>
  );
}

export default App;
