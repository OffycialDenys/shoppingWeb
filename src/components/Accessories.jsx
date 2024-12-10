import React from "react";
import phone1 from "../assets/images/phone1.png";
import phone2 from "../assets/images/phone2.png";
import phone3 from "../assets/images/phone3.png";
import watch1 from "../assets/images/watch1.png";
import watch2 from "../assets/images/watch2.png";
import watch3 from "../assets/images/watch3.png";
import watch4 from "../assets/images/watch4.png";
import "./acc.css";

const Accessories = () => {
  const products = [
    { name: "Product 1", price: "₦2,660,000.99", image: phone1 },
    { name: "Product 2", price: "₦650,120.99", image: phone2 },
    { name: "Product 3", price: "₦870,000.99", image: phone3 },
    { name: "Product 4", price: "₦97,000.99", image: watch1 },
    { name: "Product 5", price: "₦80,000.99", image: watch2 },
    { name: "Product 6", price: "₦700,000.99", image: watch3 },
    { name: "Product 7", price: "₦1,457,000.99", image: watch4 },
  ];

  return (
    <main>
      <section className="products">
        <h2>Accessories</h2>
        <ul className="acc-category">
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

export default Accessories;
