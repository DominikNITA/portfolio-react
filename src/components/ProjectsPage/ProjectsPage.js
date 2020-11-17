import React, { useEffect, useState } from "react";
import ProjectTemplate from "./ProjectTemplate";
import "./projectsPage.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setProjects(JSON.parse(xhttp.responseText));
      }
    };
    xhttp.open(
      "GET",
      `${process.env.PUBLIC_URL}/configuration/projects.json`,
      true
    );
    xhttp.send();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="projects-page" class="topology-background">
      <h2>Projects</h2>
      <div className="header-bar"></div>
      <div id="projects__content">
        {projects.map((project) => (
          <div className="project-container">
            <ProjectTemplate project={project}></ProjectTemplate>
            <span className="projects__spacer"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
