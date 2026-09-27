import React, { useContext } from 'react'

import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const{cartItems,fodd_list,removeFromCart} =useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Itens</p>
          <p>Titulo</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
          <p>Remover</p>
        </div>
        <br />
        <hr />
      </div>
    </div>
  )
}

export default Cart