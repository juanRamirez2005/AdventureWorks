import React from "react";
import { Bikes } from "../../components/Bikes";

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
