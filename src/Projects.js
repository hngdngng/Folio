import React from "react";
import Hero from "./components/Hero";
import Tile from "./components/Tile";
import PGrid from "./components/Grid";

const projects = require("./projects.json");
const featureProject = projects[0];
const ind = [1, 2, 3, 4, 5]
const subProjects = ind.map(i => projects[i]);

function Projects(props) {
  return (
    <div>
      <Hero />
      <div id="projects">
        <Tile github={featureProject.github} image={process.env.PUBLIC_URL + featureProject.image} index="0" role={featureProject.role} summary={featureProject.summary} title={featureProject.title} url={featureProject.url} />
        {subProjects.map((project, index) => {
          return (
            <PGrid id={`project${index}`} github={project.github} image={process.env.PUBLIC_URL + project.image} index={index} role={project.role} summary={project.summary} title={project.title} url={project.url} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects;