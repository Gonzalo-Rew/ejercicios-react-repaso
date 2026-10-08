import React, { Component } from "react";
import Bombilla from "./Bombilla";

export default class PadreBombillas extends Component {

    state = {
        consumoTotal: 0,
        bombillas: [
            { id: 1, nombre: "Salón", potencia: 60 },
            { id: 2, nombre: "Cocina", potencia: 40 },
            { id: 3, nombre: "Baño", potencia: 100 },
        ],
    }
    
    calcularConsumoTotal = (consumo) => {
        this.setState({
            consumoTotal: this.state.consumoTotal + consumo,
        });
    }

    eliminarBombilla = (id) => {
        this.setState({
            bombillas: this.state.bombillas.filter((bombilla) => bombilla.id !== id),
        });
    }


  render() {
    return (
      <div>
        <h1>Padre Bombillas</h1>
        <p>Consumo total: {this.state.consumoTotal} W</p>
        {this.state.bombillas.map((bombilla) => (
          <Bombilla
            key={bombilla.id}
            nombre={bombilla.nombre}
            potencia={bombilla.potencia}
            onUsarUnaHora={this.calcularConsumoTotal}
            onEliminar={() => this.eliminarBombilla(bombilla.id)}
          />
        ))}
      </div>
    );
  }
}
