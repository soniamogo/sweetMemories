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




const CartaFrontal = ({carta, selected, disabled, handleSelection, index}) => {
  const giraCarta = () =>{
    handleSelection(index)
  }
  return (
    <div id='carta' className={disabled ? 'disabled' : selected ? 'selected' : null} onClick={giraCarta}>
        {carta === 'Carta1' && <img src={Carta1}/>}
        {carta === 'Carta2' && <img src={Carta2}/>}
        {carta === 'Carta3' && <img src={Carta3}/>}
        {carta === 'Carta4' && <img src={Carta4}/>}
        {carta === 'Carta5' && <img src={Carta5}/>}
        {carta === 'Carta6' && <img src={Carta6}/>}
        {carta === 'Carta7' && <img src={Carta7}/>}
        {carta === 'Carta8' && <img src={Carta8}/>}
        {carta === 'Carta9' && <img src={Carta9}/>}
    </div>
  )
}

export default CartaFrontal