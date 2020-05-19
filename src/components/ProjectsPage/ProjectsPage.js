import React, { useEffect, useState } from "react";
import ProjectTemplate from "./ProjectTemplate";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Typical action to be performed when the document is ready:
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
    <div id="projects-page">
      <h2>Projects</h2>
      <div className="header-bar"></div>
      <div id="projects__content">
        {projects.map((project) => (
          <ProjectTemplate project={project}></ProjectTemplate>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
