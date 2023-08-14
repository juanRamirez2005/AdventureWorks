import React from "react";
import Slider from "react-slick";
import { Bikes } from "../../components/Bikes";

import "../../styles/components/list.css";
const ListOfBikes = () => {
  return (
    <div>
      <ul className="listOfProducts">
        {[1, 2, 3, 4].map((bike) => (
          <li key={bike}>
            <Bikes />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ListOfBikes };
