import React, { useEffect, useState } from "react";
import Person from "./person";
import { shortList, longList, list } from "../data";

function Display() {
  console.log(longList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const details = longList.filter((detail) => {
    return detail.id === currentIndex + 1;
  });
  const handleLeft = () => {
    setCurrentIndex((oldIndex) => {
      console.log(oldIndex);
      console.log(oldIndex + longList.length - 1);
      const result = (oldIndex + longList.length - 1) % longList.length;
      console.log(result);
      return result;
    });
  };
  //   console.log(currentIndex);
  const handleRight = () => {
    setCurrentIndex((oldIndex) => {
      const result = (oldIndex + 1) % longList.length;
      return result;
    });
  };
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       handleRight();
  //     }, 5000);
  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, [currentIndex]);
  return (
    <div>
      <div>
        <button className="btn " onClick={handleLeft}>
          left
        </button>
      </div>
      <Person {...details[0]} />
      <div>
        <button className="btn" onClick={handleRight}>
          right
        </button>
      </div>
    </div>
  );
}

export default Display;
