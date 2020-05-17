import React, { useEffect, useState } from "react";
// import data from "../../../public/configuration/landingLinks.json";

const LinksComponent = () => {
  const [config, setConfig] = useState([]);
  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
          setConfig(JSON.parse(xhttp.responseText));
          console.log(config);
        } 
    };
    
    xhttp.open("GET", `${process.env.PUBLIC_URL}/configuration/landingLinks.json`, true);
    xhttp.send();
  },[])

  return (
    <div className="links">
      {config.map((data) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <a href={data.url} title={data.hoverName} target="blank">
            <img
              src={process.env.PUBLIC_URL + "/images/" + data.imageName}
              alt={data.hoverName}
            />
          </a>
        );
      })}
    </div>
  );
};

export default LinksComponent;
