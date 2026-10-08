import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PadreBombillas from "./PadreBombillas";
import Sorteo from "./Sorteo";
import TablaPotencias from "./TablaPotencias";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bombillas" element={<PadreBombillas />} />
          <Route path="/sorteo" element={<Sorteo />} />
          <Route path="/tabla-potencias" element={<TablaPotencias />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
