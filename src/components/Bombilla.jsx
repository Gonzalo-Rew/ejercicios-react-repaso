import React, { Component } from "react";

export default class Bombilla extends Component {
  bombilla = {
    nombre: this.props.nombre,
    potencia: Number(this.props.potencia),
  };

  state = {
    encendida: false,
    consumoTotal: 0,
  };

  generarMensajeEstado = () => {
    if (this.state.encendida) {
      return "La bombilla está encendida";
    } else {
      return "La bombilla está apagada";
    }
  };

  alternarEstado = () => {
    this.setState({
      encendida: !this.state.encendida,
    });
  };

  usarUnaHora = () => {
    if (this.state.encendida) {
      this.setState({
        consumoTotal: this.state.consumoTotal + this.bombilla.potencia,
      });
      this.mandarConsumo();
    } else {
      alert("La bombilla debe estar encendida para usarla");
    }
  };


  mandarConsumo = () => {
    this.props.onUsarUnaHora(this.bombilla.potencia);
  };

  render() {
    return (
      <div>
        <h1>{this.bombilla.nombre}</h1>
        <p>{this.generarMensajeEstado()}</p>
        <p>Consumo total: {this.state.consumoTotal} W</p>
        <button onClick={this.alternarEstado}>Alternar</button>
        <button onClick={this.usarUnaHora}>Usar una hora</button>
        <button onClick={this.props.onEliminar}>Eliminar</button>
      </div>
    );
  }
}
