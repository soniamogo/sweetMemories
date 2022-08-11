import React, { Component } from "react";
import Cabecera from "../Cabecera";
import Tablero from "../Tablero";
import "./style.css";

function tableroRandom() {
  var cartaFrontal = [
    "Carta1",
    "Carta2",
    "Carta3",
    "Carta4",
    "Carta5",
    "Carta6",
    "Carta7",
    "Carta8",
    "Carta9",
    "Carta1",
    "Carta2",
    "Carta3",
    "Carta4",
    "Carta5",
    "Carta6",
    "Carta7",
    "Carta8",
    "Carta9",
  ];
  cartaFrontal.sort(function () {
    return Math.random() - 0.5;
  });
  return cartaFrontal;
}

export default class SweetMemories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartas: tableroRandom(),
      posicionesEliminadas: [],
      seleccion1: null,
      puntuacion: 0,
    };
  }

  seleccion = (posicion) => {
    const { seleccion1, cartas, posicionesEliminadas, puntuacion } = this.state;
    if (!posicionesEliminadas.includes(posicion)) {
      if (seleccion1 === null) {
        this.setState({ seleccion1: posicion });
      } else {
        if (
          cartas[posicion] === cartas[seleccion1] &&
          posicion !== seleccion1
        ) {
          this.setState({
            posicionesEliminadas: [
              ...posicionesEliminadas,
              seleccion1,
              posicion,
            ],
            puntuacion: puntuacion + 100,
            seleccion1: null,
          });
        } else {
          this.setState({ seleccion1: null });
        }
      }
    } else {
    }
  };

  render() {
    const { puntuacion, seleccion1, cartas, posicionesEliminadas } = this.state;
    return (
      <div id="global">
        <Cabecera puntuacion={puntuacion} />
        <Tablero
          cartas={cartas}
          disabled={posicionesEliminadas}
          handleSelection={this.seleccion}
          seleccion={seleccion1}
        />
      </div>
    );
  }
}
