import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/shared/Navbar";  
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;