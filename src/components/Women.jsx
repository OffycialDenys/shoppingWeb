import React from "react";
import "./women.css";
import woman1 from "../assets/images/woman1.png";
import woman2 from "../assets/images/woman2.png";
import woman3 from "../assets/images/woman3.png";
import woman4 from "../assets/images/woman4.png";
import woman5 from "../assets/images/woman5.png";
import woman6 from "../assets/images/woman6.png";
import woman7 from "../assets/images/woman7.png";
const Women = () => {
  const products = [
    { name: "Product 1", price: "₦75,000.99", image: woman1 },
    { name: "Product 2", price: "₦203,000.99", image: woman2 },
    { name: "Product 3", price: "₦92,000.99", image: woman3 },
    { name: "Product 4", price: "₦35,000.99", image: woman4 },
    { name: "Product 5", price: "₦45,000.99", image: woman5 },
    { name: "Product 6", price: "₦105,000", image: woman6 },
    { name: "Product 7", price: "₦70,000.99", image: woman7 },
  ];

  return (
    <main>
      <section className="products">
        <h2>Kids</h2>
        <ul className="women-category">
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

export default Women;
