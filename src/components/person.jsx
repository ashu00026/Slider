import React from "react";

function person({ id, image, name, quote, title }) {
  console.log(id, name);
  return (
    <div>
      <h4 className="name">{name}</h4>
      <img src={image} alt={name} className="person-img" />
      <h5 className="title">{title}</h5>
      <p className="text"> {quote}</p>
    </div>
  );
}

export default person;
