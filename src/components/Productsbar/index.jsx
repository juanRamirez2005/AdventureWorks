import React from "react";
import "../../styles/components/Navbar.css";
import "../../styles/components/Productsbar.css";
import { ListOfBikes } from "../../containers/ListOfBikes";
import { ListOfAccesories } from "../../containers/ListOfAccesories";
import { ListOfClothes } from "../../containers/ListOfClothes";
import { ListOfComponents } from "../../containers/ListOfComponents";
const Productsbar = () => {
  return (
    <div>
      <nav className="products-container" role="navigation">
        <ul className="products__links">
          <li>
            <a href="/bikes">Bikes</a>
          </li>
          <ListOfBikes />
          <li>
            <a href="/components">Components</a>
          </li>
          <ListOfComponents />

          <li>
            <a href="/clothing">Clothing</a>
          </li>
          <ListOfClothes />

          <li>
            <a href="/accesories">Accesories</a>
          </li>
          <ListOfAccesories />
        </ul>
      </nav>
    </div>
  );
};

export { Productsbar };
