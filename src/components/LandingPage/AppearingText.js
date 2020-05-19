import React, { useState, useEffect } from "react";

const AppearingText = ({ targetText, delay, cssClass, cssAnimation }) => {
  const [currentText, setCurrentText] = useState("");
  const [animationClass, setAnimationClass] = useState(cssAnimation);

  //   const updateText = () => {
  //     if (currentText.length == targetText.length) {
  //       setAnimationClass("");
  //       return;
  //     }
  //     let newText = currentText + targetText.charAt(currentText.length);
  //     setCurrentText(newText);
  //     console.log(newText);
  //     console.log(currentText);
  //     const timer = setTimeout(updateText, 1000);
  //   };

  useEffect(() => {
    if (currentText.length === targetText.length) {
      setAnimationClass("");
      return;
    }
    let newText = currentText + targetText.charAt(currentText.length);
    const timer = setInterval(() => {
      setCurrentText(newText);
    }, delay);
    return () => clearInterval(timer);
  }, [currentText, delay, targetText]);

  return <span className={`${cssClass} ${animationClass}`}>{currentText}</span>;
};

export default AppearingText;
