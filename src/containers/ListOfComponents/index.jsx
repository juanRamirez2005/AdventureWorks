import React from "react";
import "../../styles/components/list.css";
import { BikesComponents } from "../../components/BikesComponents/index.jsx";
const ListOfComponents = () => {
  return (
    <ul>
      {[1, 2, 3, 4].map((component) => (
        <li key={component}>
          <BikesComponents />
        </li>
      ))}
    </ul>
  );
};

export { ListOfComponents };
