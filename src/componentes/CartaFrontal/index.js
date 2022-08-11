import React from 'react'
import './style.css'
import Carta1 from '../../img/1.png'
import Carta2 from '../../img/2.png'
import Carta3 from '../../img/3.png'
import Carta4 from '../../img/4.png'
import Carta5 from '../../img/5.png'
import Carta6 from '../../img/6.png'
import Carta7 from '../../img/7.png'
import Carta8 from '../../img/8.png'
import Carta9 from '../../img/9.png'
import Trasera from '../../img/candyBack.png'


const CartaFrontal = ({carta, handleSelection, index, selected, disabled}) => {
  const giraCarta = () =>{
    handleSelection(index);
  }
  return (
    <div id='carta' className={disabled ? 'disabled' : selected ? 'selected' : null}>
        {carta === 'Carta1' && <img src={Carta1} onClick={giraCarta}/>}
        {carta === 'Carta2' && <img src={Carta2} onClick={giraCarta}/>}
        {carta === 'Carta3' && <img src={Carta3} onClick={giraCarta}/>}
        {carta === 'Carta4' && <img src={Carta4} onClick={giraCarta}/>}
        {carta === 'Carta5' && <img src={Carta5} onClick={giraCarta}/>}
        {carta === 'Carta6' && <img src={Carta6} onClick={giraCarta}/>}
        {carta === 'Carta7' && <img src={Carta7} onClick={giraCarta}/>}
        {carta === 'Carta8' && <img src={Carta8} onClick={giraCarta}/>}
        {carta === 'Carta9' && <img src={Carta9} onClick={giraCarta}/>}
    </div>
  )
}

export default CartaFrontal