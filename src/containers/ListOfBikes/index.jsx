import React from "react";
import { Bikes } from "../../components/Bikes";

import "../../styles/components/list.css";
const ListOfBikes = () => {
  return (
    <div>
      <ul>
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
