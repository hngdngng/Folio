import React from "react";
import Hero from "./components/Hero";
import Tile from "./components/Tile";
const projects = require("./projects.json");

function Projects(props) {
  return (
    <div>
      <Hero />
      <div id="projects">
        {projects.map((project, index) => {
          return (
              <Tile id={`project${index}`} github={project.github} image={process.env.PUBLIC_URL + project.image} index={index} role={project.role} summary={project.summary} title={project.title} url={project.url} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects;