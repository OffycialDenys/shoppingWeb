import React from "react";
import { useCart } from "./CartContext"; // Import the custom hook to access cart data

const Cart = () => {
  const { cartItems, total, handleAddToCart, handleCheckout } = useCart(); // Access cart data

  return (
    <div className="cart-container">
      <h2>Products</h2>
      <div className="products">
        {/* Products will be rendered dynamically from the category components */}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
        <p>Total: ₦{total.toFixed(2)}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
