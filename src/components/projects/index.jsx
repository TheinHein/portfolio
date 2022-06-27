import React from "react";
import projects from "../../assets/data/projects.json";
import ProjectCard from "../project-card";

const Projects = () => {
  return (
    <section>
      {projects.length > 0 &&
        projects.map(({ title, thumbnail, description, technologies }, i) => (
          <ProjectCard
            key={i}
            title={title}
            thumbnail={thumbnail}
            description={description}
            technologies={technologies}
            reverse={(i + 1) % 2 === 0 && true}
          />
        ))}
    </section>
  );
};

export default Projects;
