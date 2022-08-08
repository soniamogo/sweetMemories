import React from 'react'
import Carta1 from '../../img/1.png'
import Carta2 from '../../img/2.png'
import Carta3 from '../../img/3.png'
import Carta4 from '../../img/4.png'
import Carta5 from '../../img/5.png'
import Carta6 from '../../img/6.png'
import Carta7 from '../../img/7.png'
import Carta8 from '../../img/8.png'
import Carta9 from '../../img/9.png'


const CartaFrontal = ({carta}) => {
  return (
    <div>
        {carta === 'Carta1' && <img src={Carta1}/>}
    </div>
  )
}

export default CartaFrontal