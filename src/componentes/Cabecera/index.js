import React from 'react'
import './style.css'

const Cabecera = ({puntuacion}) => {
  return (
    <div id="cabecera">
        <div id='izquierda'>
            SWEETMEMORIES
        </div>
        <div id='derecha'>
            <div>SCORE</div>
            <div id='puntuacion'>{puntuacion}</div>
        </div>
    </div>
  )
}

export default Cabecera