import React from 'react'
import './style.css'

const CartaTrasera = (disabled, selected) => {
  return (
    <div id='carta' className={selected ? 'seleccionada' : disabled ? 'desactivada' : null}  />
  )
}

export default CartaTrasera