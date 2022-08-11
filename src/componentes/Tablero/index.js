import React from 'react'
import CartaTrasera from '../CartaTrasera'
import CartaFrontal from '../CartaFrontal'
import './style.css'

const Tablero = ({cartas, handleSelection, seleccion, disabled}) => {
  
  return (
    <div id='tableroCartas'>
        {/* <div id='cartaTras'>
          {cartaTrasera.map(carta =>{
          return <CartaTrasera key={carta}/>
          })}
        </div> */}
        <div id='cartaFron'>
          {cartas.map((carta,index) =>{
            return <CartaFrontal carta={carta} disabled={disabled.includes(index) ? true : false} selected={index===seleccion ? true : false} index={index} key={`${index}-${carta}`} handleSelection={handleSelection}/>
          })}
        </div>
    </div>
  )
}

export default Tablero