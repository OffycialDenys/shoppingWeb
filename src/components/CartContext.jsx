import React, { createContext, useState, useContext } from "react";

// Create the context for the cart
const CartContext = createContext();

// Cart provider to wrap the components that need access to cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Handle add-to-cart action
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotal(
      (prevTotal) =>
        prevTotal + parseFloat(product.price.replace("₦", "").replace(",", ""))
    );
  };

  // Handle checkout action
  const handleCheckout = () => {
    alert(`Checkout successful! Total price: ₦${total.toFixed(2)}`);
    setCartItems([]); // Clear cart after checkout
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, total, handleAddToCart, handleCheckout }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart data
export const useCart = () => {
  return useContext(CartContext);
};
