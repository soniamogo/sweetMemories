import React from 'react'
import CartaTrasera from '../CartaTrasera'
import CartaFrontal from '../CartaFrontal'
import './style.css'
import Carta1 from '../../img/1.png'


var cartaTrasera = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
var cartaFrontal = ['Carta1', 'Carta2', 'Carta3', 'Carta4', 'Carta5', 'Carta6', 'Carta7', 'Carta8', 'Carta9', 'Carta10', 'Carta11', 'Carta12', 'Carta13', 'Carta14', 'Carta15', 'Carta16', 'Carta17', 'Carta18']
var cartaFrontalDes = cartaFrontal.sort(function() {return Math.random() -0.5})


const Tablero = ({seleccion, seleccion1, seleccion2, puntuacion}) => {
  
  return (
    <div id='tableroCartas'>
        {/* <div id='cartaTras'>
          {cartaTrasera.map(carta =>{
          return <CartaTrasera key={carta}/>
          })}
        </div> */}
        <div id='cartaFron'>
          {cartaFrontalDes.map(carta =>{
            return <CartaFrontal carta={carta} key={carta} seleccion={seleccion} seleccion1={seleccion1} puntuacion={puntuacion} seleccion2={seleccion2}/>
          })}
        </div>
    </div>
  )
}

export default Tablero