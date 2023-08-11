import React from "react";
import Bicycle from "../../assets/Bicicleta.png";
import "../../styles/components/item.css";
const Bikes = () => {
  return (
    <a href="#">
      <img className="item" src={Bicycle} />
    </a>
  );
};

export { Bikes };
