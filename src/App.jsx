import { useState } from "react";

import Nav from "./components/Nav";

import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Page from "./components/Page";
import Accessories from "./components/Accessories";
import Kids from "./components/Kids";
import Men from "./components/Men";
import Women from "./components/Women";
// import Cart from "./components/Cart";
// import { CartProvider } from "./CartContext"; // Import CartProvider to manage cart state

function App() {
  return (
    <main className="App">
      <Nav />
      <Hero />
      <Page />
      <Accessories />
      <Kids />
      <Men />
      <Women />
      {/* <Cart products={{ Accessories, Kids, Men, Women }} /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;
