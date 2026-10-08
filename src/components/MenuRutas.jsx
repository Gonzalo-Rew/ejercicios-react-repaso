import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h1>Selecciona un ejercicio</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/bombillas">Bombillas</a>
          </li>
          <li>
            <a href="/sorteo">Sorteo</a>
          </li>
          <li>
            <a href="/tabla-potencias">Tabla de potencias</a>
          </li>
        </ul>
      </div>
    );
  }
}
