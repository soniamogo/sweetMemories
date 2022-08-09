import React, { Component } from 'react'
import Cabecera from '../Cabecera'
import Tablero from '../Tablero'
import './style.css'

export default class SweetMemories extends Component {
  constructor(props) {
      super(props)
      this.state = {
          seleccion1:'algo',
          seleccion2:'algo2',
          puntuacion:0,
      }
  }

  jugada = (seleccion1, seleccion2, puntuacion) =>{
    var {seleccion1, seleccion2, puntuacion} = this.state
    if(seleccion1 === seleccion2){
      puntuacion = puntuacion + 100;
      console.log(puntuacion, seleccion1, seleccion2)
    }
    this.setState({seleccion1:seleccion1, seleccion2:seleccion2, puntuacion:puntuacion})
  }
  render() {
    return (
      <div id='global'>
        <Cabecera puntuacion={this.state.puntuacion}/>
        <Tablero seleccion1={this.state.seleccion1} seleccion2={this.state.seleccion2} jugada={this.jugada} puntuacion={this.state.puntuacion}/>
      </div>
    )
  }
}