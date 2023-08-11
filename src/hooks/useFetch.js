import React from "react";

const useFetch = () => {
  const [productsCategories, setProductsCategories] = React.useState([]);
  const [subCategoryProducts, setsubCategoryProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [parentID, setParentID] = React.useState(1);
  const [productID, setProductID] = React.useState(5);
  const [singleProduct, setSingleProduct] = React.useState([]);
  React.useEffect(() => {
    // getProductCategory();
    // getSubcategory(parentID);
    // getProducts(productID);
    //

    handleGetFetch(
      "https://localhost:7135/api/AdventureWorks/GetProductCategory",
      setProductsCategories
    );
    handleGetFetch(
      `https://localhost:7135/api/AdventureWorks/GetParentID/${parentID}`,
      setsubCategoryProducts
    );
    handleGetFetch(
      `https://localhost:7135/api/AdventureWorks/GetProductID/${productID}`,
      setProducts
    );
  }, [parentID, productID]);

  function handleGetFetch(url, method) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => method(data))
      .catch(() =>
        console.log("No se pudo completar la solicitud, intente más tarde")
      );
  }
  function getUser(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }
  async function postUser(url, form) {
    const data = form;
    data.customerID = "";
    const resp = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    handleGetFetch(
      `https://localhost:7135/api/AdventureWorks/GetUser/${data.firstName}/${data.email}`,
      setUser
    );
  }

  async function postProductOrder(url, form, quantity) {
    const data = form;
    const salesOrder = {
      ProductID: singleProduct[0].productID,
      OrderQty: quantity,
      UnitePrice: parseFloat(data.product_order_price),
    };
    const nose = {
      productID: 858,
      orderQty: 12,
      unitPrice: 293,
    };
    console.log(parseFloat(data.product_order_price));
    const resp = fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(salesOrder),
    });
  }
  function getSubcategoryID(evt) {
    subCategoryProducts.map((subCategoryProduct) => {
      if (evt.target.value === subCategoryProduct.name) {
        setProductID(subCategoryProduct.productCategoryID);
      }
    });

    products.map((product) => {
      if (evt.target.value === product.name) {
        setSingleProduct([
          {
            productID: product.productID,
            size: product.size,
            color: product.color,
            price: product.listPrice,
          },
        ]);
      }
    });
  }
  function getParentID(evt) {
    switch (evt.target.value) {
      case "Bikes":
        setParentID(1);
        break;
      case "Components":
        setParentID(2);
        setProductID(8);
        break;
      case "Clothing":
        setParentID(3);
        setProductID(22);
        break;
      case "Accessories":
        setParentID(4);
        setProductID(30);
        break;
      default:
        break;
    }
  }

  return {
    productsCategories,
    subCategoryProducts,
    products,
    singleProduct,
    user,
    getUser,
    getParentID,
    getSubcategoryID,
    setSingleProduct,
    postUser,
    postProductOrder,
    handleGetFetch,
  };
};

export { useFetch };
