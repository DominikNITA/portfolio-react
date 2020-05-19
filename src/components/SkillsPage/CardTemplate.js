import React from "react";

const CardTemplate = (props) => {
  const { skillDetails } = props;
  return (
    <div className="card">
      <div className="card__title">{skillDetails.title}</div>
      <ul>
        {skillDetails.skillsList.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardTemplate;
