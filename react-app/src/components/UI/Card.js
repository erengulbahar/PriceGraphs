import "./Card.css";
import React from "react";

function Card(data) {
  const classes = "card " + data.className;

  return <div className={classes}>{data.children}</div>;
}

export default Card;
