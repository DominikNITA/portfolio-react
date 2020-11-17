import React from "react";
import Carousel from "./Carousel";
import "./projectTemplate.css";

const ProjectTemplate = (props) => {
  const { project } = props;
  //TODO: style the template
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__title">{project.title}</div>
        <div className="project__technologies">
          {project.technologies.map((techno) => (
            <span className="project__technology">{techno}</span>
          ))}
        </div>
        <p className="project__description">{project.description}</p>
      </div>
      <div className="project__content">
        <Carousel photos={project.photos}></Carousel>
        <div className="project__buttons">
          {project.links.code && project.links.code !== "" && (
            <a href={project.links.code} target="blank">
              <button className="project__button project__button--code">
                Code
              </button>
            </a>
          )}
          {project.links.live && project.links.live !== "" && (
            <a href={project.links.live} target="blank">
              <button className="project__button project__button--live">
                LIVE
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
