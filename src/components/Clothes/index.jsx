import React from "react";
import Clothing from "../../assets/Clothes.png";
import "../../styles/components/item.css";
const Clothes = () => {
  return (
    <a href="#">
      <img className="item" src={Clothing} alt="Clothes" />
    </a>
  );
};

export { Clothes };
