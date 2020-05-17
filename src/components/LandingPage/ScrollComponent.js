import React from "react";

const ScrollComponent = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight - window.scrollY,
      behavior: "smooth",
    });
  };

  return (
    // eslint-disable-next-line
    <div className="scroll" onClick={scrollDown} role="scroll">
      <div className="scroll__wheel"></div>
    </div>
  );
};

export default ScrollComponent;
