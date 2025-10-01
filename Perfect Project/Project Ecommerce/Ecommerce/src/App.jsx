import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./pages/WishList";
import Home from "./pages/Home";
function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Wishlist" element={<Wishlist />} />

    </Routes>
    </>
  )
}
export default App;
