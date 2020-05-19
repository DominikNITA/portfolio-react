import React from "react";
import TitleComponent from "./TitleComponent";
import ScrollComponent from "./ScrollComponent";
import AnimationComponent from "./AnimationComponent";
import LinksComponent from "./LinksComponent";

const LandingPage = () => {
  return (
    <div id="landing-page">
      <TitleComponent
        title="Dominik Nita"
        subtitle="Software Engineer Student"
      ></TitleComponent>
      <LinksComponent></LinksComponent>
      <AnimationComponent></AnimationComponent>
      <div id="landing-page__bottom">
        <ScrollComponent></ScrollComponent>
      </div>
    </div>
  );
};

export default LandingPage;
