import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
import Header from "./Shared/Header";
import "./tailwind.output.css";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
     <Routes>
      <Route exact path="/" element={<Home />}/>
        </Routes>
        <Routes>
      <Route exact path="/skills" element={<Skills />}/>
        </Routes>
        <Routes>
      <Route exact path="/work" element={<Work />}/>
        </Routes>
        <Routes>
      <Route exact path="/contact" element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;
