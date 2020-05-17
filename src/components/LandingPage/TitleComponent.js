import React from "react";
import AppearingText from "./AppearingText";

const TitleComponent = ({ title, subtitle }) => {
  return (
    <header>
      <div className="header__content">
        <h1 className="header__title">{title}</h1>
        <AppearingText
          targetText={subtitle}
          delay={100}
          cssClass="header__subtitle"
          cssAnimation="text-appearing"
        ></AppearingText>
      </div>
    </header>
  );
};

export default TitleComponent;
