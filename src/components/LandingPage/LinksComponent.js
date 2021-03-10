import React, { useEffect, useState } from "react";

const LinksComponent = () => {
  const [config, setConfig] = useState([]);
  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Typical action to be performed when the document is ready:
        setConfig(JSON.parse(xhttp.responseText));
        console.log(JSON.parse(xhttp.responseText));
      }
    };

    xhttp.open(
      "GET",
      `${process.env.PUBLIC_URL}/configuration/landingLinks.json`,
      true
    );
    xhttp.send();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="links">
      {config.map((data, index) => {
        return (
          <a
            key={index}
            href={data.url}
            title={data.hoverName}
            target="_blank"
            rel="noopener noreferrer"
          >
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
