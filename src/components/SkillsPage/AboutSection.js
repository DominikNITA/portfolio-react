import React from "react";

const AboutSection = () => {
  const scrollTo = (target) => {
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="card">
      <div className="card__hero"></div>
      <div className="card__content">
        Currently studying Computer Science at Polytech Paris-Saclay and looking
        for an <strong>internship and freelance jobs</strong>. <br />I have
        serious passion for
        <strong> algorithms, machine learning and web development.</strong>
        <br /> I always put a lot of effort in
        <strong> writing clean and reusable code</strong> by following the best
        practices. Check my projects below and contact me!
      </div>
      <div className="card__buttons">
        <button id="projects-button" onClick={() => scrollTo("projects-page")}>
          Projects
        </button>
        <button id="contact-button" onClick={() => scrollTo("contact-page")}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
