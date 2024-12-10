import React from "react";
import "./men.css";
import men1 from "../assets/images/men1.png";
import men2 from "../assets/images/men2.png";
import men3 from "../assets/images/men3.png";
import men4 from "../assets/images/men4.png";
import men5 from "../assets/images/men5.png";
import men6 from "../assets/images/men6.png";
import men7 from "../assets/images/men7.png";

const Men = () => {
  const products = [
    { name: "Product 1", price: "₦66,000.99", image: men1 },
    { name: "Product 2", price: "₦45,000.99", image: men2 },
    { name: "Product 3", price: "₦98,000.99", image: men3 },
    { name: "Product 4", price: "₦80,000.99", image: men4 },
    { name: "Product 5", price: "₦350,000.99", image: men5 },
    { name: "Product 6", price: "₦85,000.99", image: men6 },
    { name: "Product 7", price: "₦750,000.99", image: men7 },
  ];

  return (
    <main>
      <section className="products">
        <h2>Kids</h2>
        <ul className="men-category">
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
export default Men;
