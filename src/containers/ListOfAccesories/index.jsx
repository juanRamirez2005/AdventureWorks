import React from "react";
import "../../styles/components/list.css";
import { Accesories } from "../../components/Accesories";
const ListOfAccesories = () => {
  return (
    <ul>
      {[1, 2, 3, 4].map((accesory) => (
        <li key={accesory}>
          <Accesories />
        </li>
      ))}
    </ul>
  );
};

export { ListOfAccesories };
