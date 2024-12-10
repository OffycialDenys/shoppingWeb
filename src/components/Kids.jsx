import React from "react";
import "./kids.css";
import kid1 from "../assets/images/kid1.png";
import kid2 from "../assets/images/kid2.png";
import kid3 from "../assets/images/kid3.png";
import kid4 from "../assets/images/kid4.png";
import kid5 from "../assets/images/kid5.png";
import kid6 from "../assets/images/kid6.png";
import kid7 from "../assets/images/kid7.png";
const Kids = () => {
  const products = [
    { name: "Product 1", price: "₦20,000.99", image: kid1 },
    { name: "Product 2", price: "₦35,000.99", image: kid2 },
    { name: "Product 3", price: "₦32,000.99", image: kid3 },
    { name: "Product 4", price: "₦85,000.99", image: kid4 },
    { name: "Product 5", price: "₦6,000.99", image: kid5 },
    { name: "Product 6", price: "₦620,000.99", image: kid6 },
    { name: "Product 7", price: "₦3,500.99", image: kid7 },
  ];

  return (
    <main>
      <section className="products">
        <h2>Kids</h2>
        <ul className="kids-category">
          {products.map((product, index) => (
            <li key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                Price: <data value="1999.99">{product.price}</data>
              </p>
              <button>Add to cart</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Kids;
