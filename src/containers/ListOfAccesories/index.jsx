import React from "react";
import { Accesories } from "../../components/Accesories";
const ListOfAccesories = () => {
  return (
    <ul className="listOfProducts">
      {[1, 2, 3, 4].map((accesory) => (
        <li key={accesory}>
          <Accesories />
        </li>
      ))}
    </ul>
  );
};

export { ListOfAccesories };
