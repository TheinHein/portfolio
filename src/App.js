import "./App.css";
import projects from "./data/projects.json";
import ReactMarkdown from "react-markdown";

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
            <img src={p.thumbnail} alt="thumbnail" />
            <ReactMarkdown children={p.content} />
          </article>
        ))}
    </div>
  );
}

export default App;
