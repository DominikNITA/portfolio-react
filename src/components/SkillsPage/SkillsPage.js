import React, { useState, useEffect } from "react";
import AboutSection from "./AboutSection";
import CardTemplate from "./CardTemplate";

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Typical action to be performed when the document is ready:
        setSkills(JSON.parse(xhttp.responseText));
        console.log(JSON.parse(xhttp.responseText));
      }
    };

    xhttp.open(
      "GET",
      `${process.env.PUBLIC_URL}/configuration/skills.json`,
      true
    );
    xhttp.send();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="skills-page" class="circles-background">
      <h2>About Me</h2>
      <div className="header-bar"></div>
      <div id="skills-page__content">
        <AboutSection></AboutSection>
        {skills.map((skill, index) => (
          <CardTemplate key={index} skillDetails={skill}></CardTemplate>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
