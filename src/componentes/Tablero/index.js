import React from 'react'
import CartaTrasera from '../CartaTrasera'
import CartaFrontal from '../CartaFrontal'
import './style.css'
import Carta1 from '../../img/1.png'


var cartaTrasera = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
var cartaFrontal = ['Carta1', 'Carta2', 'Carta3', 'Carta4', 'Carta5', 'Carta6', 'Carta7', 'Carta8', 'Carta9']


const Tablero = () => {
  return (
    <div id='tableroCartas'>
        {/* <div id='cartaTras'>
          {cartaTrasera.map(carta =>{
          return <CartaTrasera key={carta}/>
          })}
        </div> */}
        <div id='cartaFron'>
          {cartaFrontal.map(carta =>{
          return <CartaFrontal carta={carta}/>
          })}
        </div>
    </div>
  )
}

export default Tablero