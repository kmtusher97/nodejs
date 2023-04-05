import { useState, useEffect } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productList = await fetch("http://localhost:5000/api/products/");
    // console.log(products);
    setProducts(productList);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      {[products].map((product, index) => {
        <div className="product" key={index}>
          <div className="pname">{product.name}</div>
          <div className="pprice">{product.price}</div>
        </div>;
      })}
    </div>
  );
}
