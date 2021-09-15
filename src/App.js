import React from 'react';
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import "../src/components/images/iCamp.png";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
