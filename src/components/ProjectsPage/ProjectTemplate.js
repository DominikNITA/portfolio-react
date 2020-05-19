import React from "react";
import Carousel from "./Carousel";

const ProjectTemplate = (props) => {
  const { project } = props;

  return (
    <div className="project">
      <div className="project__title">{project.title}</div>
      <div className="project__technologies">
        {project.technologies.map((techno) => (
          <span className="technology">{techno}</span>
        ))}
      </div>
      <div className="project__description">{project.description}</div>
      <div className="project__carousel">
        <Carousel photos={project.photos}></Carousel>
      </div>
    </div>
  );
};

export default ProjectTemplate;
