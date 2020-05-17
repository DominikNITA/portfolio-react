import React from "react";
import TitleComponent from "./TitleComponent";
import ScrollComponent from "./ScrollComponent";
import AnimationComponent from "./AnimationComponent";
import LinksComponent from "./LinksComponent";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <TitleComponent
        title="Dominik Nita"
        subtitle="Software Engineer Student"
      ></TitleComponent>
      <ScrollComponent></ScrollComponent>
      <AnimationComponent></AnimationComponent>
      <LinksComponent></LinksComponent>
    </div>
  );
};

export default LandingPage;
