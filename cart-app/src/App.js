import React from "react";
import AppNavbar from "./components/AppNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  return(
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;