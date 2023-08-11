import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { UserInformation } from "../UserInformation";
import "../../styles/components/ProductInformation.css";

const ProductInformation = () => {
  const {
    products,
    productsCategories,
    subCategoryProducts,
    singleProduct,
    user,
    postProductOrder,
    getParentID,
    getSubcategoryID,
    setSingleProduct,
    getUser,
  } = useFetch();
  const [tag, setTag] = React.useState(true);
  const [quantity, setQuantity] = React.useState(0);
  function formSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    getUser(
      `https://localhost:7135/api/AdventureWorks/GetUser/${data.FirstName}/${data.EmailAddress}`
    );
    postProductOrder(
      "https://localhost:7135/api/AdventureWorks/PostProduct",
      data,
      quantity
    );
  }

  return (
    <section>
      <form onSubmit={formSubmit}>
        <h1>Register Purchase</h1>
        <div className="register-container">
          <h1>Select the product</h1>
          <div className="form-container">
            <div className="form-group">
              <select
                onChange={() => {
                  getParentID();
                  setTag(true);
                  setSingleProduct([]);
                }}
              >
                {productsCategories.slice(0, 4).map((product) => (
                  <option key={product.productCategoryID}>
                    {product.name}
                  </option>
                ))}
              </select>
              <label>Select Category</label>
            </div>
            <div className="form-group">
              <select
                onChange={() => {
                  getSubcategoryID();
                  setTag(true);
                  setSingleProduct([]);
                }}
              >
                {subCategoryProducts.map((product) => (
                  <option key={product.productCategoryID}>
                    {product.name}
                  </option>
                ))}
              </select>
              <label>Select Subcategory</label>
            </div>
            <div className="form-group">
              <select
                onChange={() => {
                  getSubcategoryID();
                  setTag(false);
                }}
                name="product"
              >
                {tag && <option>Select Product</option>}
                {products.map((product) => (
                  <option key={product.productID}>{product.name}</option>
                ))}
              </select>
              <label>Select Product</label>
            </div>
            <div className="form-group">
              <select name="product-size">
                {singleProduct.map((product) => (
                  <option key={product.productID}>{product.size}</option>
                ))}
              </select>
              <label>Size</label>
            </div>
            <div className="form-group">
              <select disabled>
                {singleProduct.map((product) => (
                  <option key={product.productID}>{product.color}</option>
                ))}
              </select>
              <label>Color</label>
            </div>
            <div className="form-group">
              <select name="product_order_price">
                {singleProduct.map((product) => (
                  <option key={product.productID}>
                    {product.price * quantity}
                  </option>
                ))}
              </select>
              <label>Price</label>
            </div>
            <div className="form-group amount">
              <button
                type="button"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity > 0 ? false : true}
                className="minus"
              >
                -
              </button>
              <span name="order-quantity">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="plus"
              >
                +
              </button>
              <label className="amount-label">Amount</label>
            </div>
          </div>
        </div>
        <UserInformation />
      </form>
    </section>
  );
};

export { ProductInformation };
