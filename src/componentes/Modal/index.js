import React from 'react'
import './style.css'

const Modal = ({posEliminadas, resetear, puntuacion}) => {
    if(posEliminadas.length===18){
        return (
            <div id="modal">
                <div id='final'>Partida terminada <br></br> Su puntuación es</div>
                <div id='puntos'>{puntuacion}</div>
                <div id='reinicio' onClick={resetear}>Reiniciar</div>
            </div>
          )
    }else{
        return null
    }
  
}

export default Modal