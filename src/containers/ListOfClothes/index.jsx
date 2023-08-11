import React from "react";
import { Clothes } from "../../components/Clothes/index.jsx";
import "../../styles/components/list.css";
const ListOfClothes = () => {
  return (
    <ul>
      {[1, 2, 3, 4].map((chain) => (
        <li key={chain}>
          <Clothes />
        </li>
      ))}
    </ul>
  );
};

export { ListOfClothes };
