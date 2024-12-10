import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p>@buyCheap.com Copyright, {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
