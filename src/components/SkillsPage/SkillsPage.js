import React from "react";
import AboutSection from "./AboutSection";

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h2>About Me</h2>
      <div className="header-bar"></div>
      <div className="skills-page__content">
        <AboutSection></AboutSection>
        <AboutSection></AboutSection>
        <AboutSection></AboutSection>
        <AboutSection></AboutSection>
      </div>
    </div>
  );
};

export default SkillsPage;
