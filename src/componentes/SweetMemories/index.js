import React, { Component } from 'react'
import Cabecera from '../Cabecera'
import Tablero from '../Tablero'
import './style.css'

export default class SweetMemories extends Component {
  constructor(props) {
      super(props)
      this.state = {
          seleccion1:'',
          seleccion2:'',
          puntuacion:0,
      }
  }

  seleccion = (select) =>{
    console.log('ejecutando inicio')
    console.log(seleccion1, seleccion2)
    var {seleccion1, seleccion2} = this.state
    if(seleccion1 === ''){
      seleccion1 = select
    }else{
      seleccion2 = select
    }
    console.log(seleccion1, seleccion2)
    this.setState({seleccion1:seleccion1, seleccion2:seleccion2})
    if(seleccion1 !=='' && seleccion2 !==''){
      this.jugada(seleccion1, seleccion2)
    }
  }

  jugada = (select1, select2) =>{
    var {seleccion1, seleccion2, puntuacion} = this.state
    console.log('ejecutando jugada')
    console.log(seleccion1, seleccion2, puntuacion)
      if(select1 === 'Carta1' && select2 === 'Carta10' ||
          select1   === 'Carta2' && select2 === 'Carta11' ||
          select1 === 'Carta3' && select2 === 'Carta12' ||
          select1 === 'Carta4' && select2 === 'Carta13' ||
          select1 === 'Carta5' && select2 === 'Carta14' ||
          select1 === 'Carta6' && select2 === 'Carta15' ||
          select1 === 'Carta7' && select2 === 'Carta16' ||
          select1 === 'Carta8' && select2 === 'Carta17' ||
          select1 === 'Carta9' && select2 === 'Carta18'){
            puntuacion = puntuacion + 100;
           console.log(seleccion1, seleccion2, puntuacion)
      // }else{
      //   console.log(seleccion1, seleccion2, puntuacion)
      }
      
    this.setState({seleccion1:'', seleccion2:'', puntuacion:puntuacion})
    
  }
  render() {
    return (
      <div id='global'>
        <Cabecera puntuacion={this.state.puntuacion}/>
        <Tablero seleccion1={this.state.seleccion1} seleccion={this.seleccion} puntuacion={this.state.puntuacion} seleccion2={this.state.seleccion2}/>
      </div>
    )
  }
}