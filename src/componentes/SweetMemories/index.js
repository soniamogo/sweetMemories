import React, { Component } from 'react'
import Cabecera from '../Cabecera'
import Tablero from '../Tablero'
import Modal from '../Modal'
import './style.css'

function repartir() {
  var cartaFrontal = ['Carta1', 'Carta2', 'Carta3', 'Carta4', 'Carta5', 'Carta6', 'Carta7', 'Carta8', 'Carta9', 'Carta1', 'Carta2', 'Carta3', 'Carta4', 'Carta5', 'Carta6', 'Carta7', 'Carta8', 'Carta9'];
  cartaFrontal.sort(function() {return Math.random() -0.5})
  return cartaFrontal
} 
export default class SweetMemories extends Component {
  constructor(props) {
      super(props)
      this.state = {
          cartas: repartir(),
          seleccion: null,
          seleccion2: null,
          puntuacion:0,
          posEliminadas:[],
          intentos:0,
      }
  }

  seleccion = (posicion) =>{
    var {seleccion, cartas, posEliminadas, puntuacion, intentos} = this.state
    if(!posEliminadas.includes(posicion)){
      if(seleccion === null){
        this.setState({seleccion:posicion})
      }else{
        this.setState({seleccion2:posicion})
        setTimeout(() => {
          if(cartas[posicion] === cartas[seleccion] && posicion !== seleccion){
            this.setState({posEliminadas: [...posEliminadas,seleccion,posicion], puntuacion: puntuacion + 100 - intentos, seleccion: null, intentos:0, seleccion2:null})
          }else{
            this.setState({seleccion:null, intentos:intentos + 10, seleccion2:null})
          }
        },1000) 
      }
    }
  }


  resetear = () =>{
    this.setState({ cartas:repartir(), seleccion:null, puntuacion:0, posEliminadas:[], intentos:0 })
  }

  
  render() {
    var { puntuacion, seleccion, posEliminadas, cartas, seleccion2} = this.state;
    return (
      <div id='global'>
        <Cabecera puntuacion={puntuacion}/>
        <Tablero seleccion={seleccion} handleSelection={this.seleccion} disabled={posEliminadas} cartas={cartas} seleccion2={seleccion2}/>
        <Modal posEliminadas={posEliminadas} puntuacion={puntuacion} resetear={this.resetear} />
      </div>
    )
  }
}