import React from "react";

const Nav = () => {
  return (
    <section className="nav">
      <div className="firstnav">
        <h1>buyCheap</h1>
        <h4>Home </h4>
        <h4>Products</h4>
        <h4>Offers</h4>
        <h4>Service</h4>
        <h4>About</h4>
      </div>
      <div className="secondnav">
        <h4>Help</h4>
        <h4>Contact</h4>
        <h4 id="login">Login</h4>
        <h4 id="signup">Sign up</h4>
      </div>
    </section>
  );
};

export default Nav;
