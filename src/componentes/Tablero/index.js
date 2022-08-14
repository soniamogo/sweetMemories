import React from 'react'
import Trasera from '../CartaTrasera'
import CartaFrontal from '../CartaFrontal'
import './style.css'


const Tablero = ({cartas, seleccion, handleSelection, disabled, seleccion2}) => {
  
  return (
    <div id='tableroCartas'>
        {/* <div id='cartaTras'>
          {cartas.map(carta =>{
          return <CartaTrasera key={carta}/>
          })}
        </div> */}
        <div id='cartaFron'>
          {cartas.map((carta, index) =>{
            return <CartaFrontal carta={carta} key={`${index}-${carta}`} seleccion={seleccion} handleSelection={handleSelection} disabled={disabled.includes(index) ? true : false} selected={(index===seleccion || index===seleccion2) ? true : false} index={index}/>
          })}
        </div>
    </div>
  )
}

export default Tablero