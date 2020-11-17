import React from "react";
import TitleComponent from "./TitleComponent";
import ScrollComponent from "./ScrollComponent";
import LinksComponent from "./LinksComponent";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div id="landing-page" class="topology-background">
      <TitleComponent
        title="Dominik Nita"
        subtitle="Software Engineer Student"
      ></TitleComponent>
      <LinksComponent></LinksComponent>
      <div id="landing-page__bottom">
        <ScrollComponent></ScrollComponent>
      </div>
      {/* <svg
        class="blob"
        id="blob1"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ff7675"
          d="M36,-55.5C46.6,-49.1,55.1,-39.1,62.1,-27.3C69.1,-15.6,74.5,-2,71.7,9.6C69,21.3,58.2,31.2,47.9,39.7C37.7,48.3,28.1,55.6,15.6,64.5C3.1,73.4,-12.3,83.9,-26.1,82.7C-39.9,81.5,-52,68.5,-63.2,55C-74.4,41.6,-84.7,27.6,-84.9,13.4C-85,-0.8,-75.1,-15.3,-67.6,-30.6C-60.2,-46,-55.4,-62.3,-44.5,-68.6C-33.7,-74.9,-16.8,-71.3,-2.1,-68C12.7,-64.8,25.3,-62,36,-55.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        class="blob"
        id="blob2"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FAB1A0"
          d="M42.4,-11.7C48.6,5.4,43,28.4,27.1,40.9C11.1,53.3,-15.1,55.1,-36.7,41.6C-58.2,28,-75,-0.9,-68.2,-19C-61.3,-37,-30.6,-44.2,-6.3,-42.2C18.1,-40.1,36.2,-28.9,42.4,-11.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        class="blob"
        id="blob3"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#00A5CE"
          d="M50.5,-42.7C57.6,-31.4,50.1,-10.8,45.5,10.9C41,32.6,39.4,55.5,27.4,64C15.4,72.6,-6.9,66.7,-15.4,54.1C-23.8,41.5,-18.3,22.2,-24.4,3.3C-30.5,-15.6,-48.2,-34.1,-46.1,-44.3C-44,-54.6,-22,-56.5,-0.1,-56.4C21.7,-56.3,43.4,-54.1,50.5,-42.7Z"
          transform="translate(100 100)"
        />
      </svg> */}
    </div>
  );
};

export default LandingPage;
