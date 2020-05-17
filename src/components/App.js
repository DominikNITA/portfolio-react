import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import SkillsPage from "./SkillsPage/SkillsPage";
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import ContactPage from "./ContactPage/ContactPage";

const App = () => {
  return (
    <div class="app">
      <LandingPage></LandingPage>
      <SkillsPage></SkillsPage>
      <ProjectsPage></ProjectsPage>
      <ContactPage></ContactPage>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById("root"));
export default App;
