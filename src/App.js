import React from "react";
import "./App.css";
import Header from "./components/Header";
import Start from "./components/Start";
import Services from "./components/Services";
import PetLover from "./components/PetLover";
import Device from "./components/Device";
import Feedback from "./components/Feedback";
import Adopt from "./components/Adopt";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Start />
      <Services />
      <PetLover />
      <Device />
      <Feedback />
      <Adopt />
      <Footer />
    </div>
  );
}

export default App;
