import React from "react";

function Person({ image, name, quote, title }) {
  //   console.log(image, name, quote, title);
  return (
    <div>
      <img src={image} alt={name} style={{ width: "50px" }} />
      <h4>{title}</h4>
      <h5>{name}</h5>
      <p>{quote}</p>
    </div>
  );
}

export default Person;
