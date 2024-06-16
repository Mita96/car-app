import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Find from "./components/find/Find";
import Driver from "./components/driver/Driver";
import Price from "./components/price/Price";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Find></Find>
      <Driver></Driver>
      <Price></Price>
      <Footer></Footer>
    </div>
  );
}

export default App;
