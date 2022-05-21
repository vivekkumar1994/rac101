import React from "react";
import UpperCard from "./UpperCard";
import "./Card.css";
import Middlecard from "./MiddleCard";
import LowerCard from "./LowerCard";

const Card = ({ color, data }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <UpperCard {...data} />
      <Middlecard {...data} />
      <LowerCard {...data} />
    </div>
  );
};
export default Card;