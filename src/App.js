// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import useNavbarHeight from "./hooks/useNavbarHeight";
import "./App.css"; // Incluye los estilos generales
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useNavbarHeight(setNavbarHeight);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div
          className="content-wrapper"
          style={{ paddingTop: `${navbarHeight}px` }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
