import React, { Component } from "react";

export default class Sorteo extends Component {
  state = {
    listaNumers: [],
  };
  generarNumerosAleatorios = () => {
    let listaAux = [];
    for (let i = 0; i < 6; i++) {
      listaAux.push(Math.floor(Math.random() * 100));
    }
    this.setState({
      listaNumers: listaAux,
    });
  };

  generarNuevoNumero = () => {
    let nuevoNumero = Math.floor(Math.random() * 100);
    this.setState({
      listaNumers: [...this.state.listaNumers, nuevoNumero],
    });
  };

  componentDidMount() {
    this.generarNumerosAleatorios();
  }

  render() {
    return (
      <div>
        <h1>Sorteo</h1>
        <button onClick={this.generarNuevoNumero}>Generar nuevo número</button>
        <p>Números del sorteo:</p>
        <ul>
          {this.state.listaNumers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    );
  }
}
