import React, { Component } from "react";

export default class TablaPotencias extends Component {
  state = {
    numerosSeleccion: [],
    tablaPotencias: [],
  };
  inputNumeroSeleccionado = React.createRef();
  generarNumeros = () => {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
      numeros.push(Math.floor(Math.random() * 10));
    }
    this.setState({
      numerosSeleccion: numeros,
    });
  };
  mostrarPotencias = (event) => {
    event.preventDefault();
    const numeroSeleccionado = Number(
      this.inputNumeroSeleccionado.current.value,
    );
    const potencias = [];
    for (let i = 2; i < 12; i++) {
      potencias.push(Math.pow(numeroSeleccionado, i));
    }
    this.setState({
      tablaPotencias: potencias,
    });
  };

  render() {
    return (
      <div>
        <h1>Tabla Potencias</h1>
        <button onClick={this.generarNumeros}>Generar Números</button>
        <form>
          <label>Número Seleccionado:</label>
          <select ref={this.inputNumeroSeleccionado}>
            {this.state.numerosSeleccion.map((num, index) => (
              <option key={index} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button onClick={this.mostrarPotencias}>Mostrar Potencias</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Operación</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tablaPotencias.map((potencia, index) => (
              <tr key={index}>
                <td>
                  {this.inputNumeroSeleccionado.current.value +
                    " ^ " +
                    (index +
                    2)}
                </td>
                <td>{potencia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
