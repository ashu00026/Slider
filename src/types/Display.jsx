import React, { useEffect, useState } from "react";
import { longList } from "../data";
import Person from "./Person";

function Display() {
  const [previousIndex, setPreviousIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const details = longList.filter((item) => {
    return item.id == previousIndex + 1;
  });
  const rightDetails = longList.filter((item) => {
    return item.id == currentIndex + 1;
  });
  // console.log(details);
  const handleLeft = () => {
    setCurrentIndex((oldIndex) => {
      const result = (oldIndex + longList.length - 1) % longList.length;
      return result;
    });
    setPreviousIndex((oldIndex) => {
      const result = (oldIndex + longList.length - 1) % longList.length;
      return result;
    });
  };
  const handleRight = () => {
    setCurrentIndex((oldIndex) => {
      const result = (oldIndex + 1) % longList.length;
      return result;
    });
    setPreviousIndex((oldIndex) => {
      const result = (oldIndex + 1) % longList.length;
      return result;
    });
  };
  console.log(previousIndex);
  console.log(currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="slider-container">
        {details.map((detail, index) => {
          return (
            <div key={index}>
              <Person {...detail} />;
            </div>
          );
        })}
        {rightDetails.map((detail, index) => {
          return (
            <div key={index}>
              <Person {...detail} />;
            </div>
          );
        })}
        <button className="btn " onClick={handleLeft}>
          left
        </button>
        <button className="btn" onClick={handleRight}>
          Right
        </button>
      </div>
    </div>
  );
}

export default Display;
