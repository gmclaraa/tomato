import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Informações de Entrega</p>
        <div className="multi-fields">
          <input type="text" placeholder='Primeiro Nome' name="" id="" />
          <input type="text" placeholder='Último nome' name="" id="" />
        </div>
        <input type="email" placeholder='Email' name="" id="" />
        <input type="text" placeholder='Rua' name="" id="" />
        <div className="multi-fields">
          <input type="text" placeholder='Cidade' name="" id="" />
          <input type="text" placeholder='Estado' name="" id="" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Cep' name="" id="" />
          <input type="text" placeholder='País' name="" id="" />
        </div>
        <input type="text" placeholder='Telefone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">

          <h2>Total</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>R${getTotalCartAmount()}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <p>Entrega</p>
            <p>R$15</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <b>R${getTotalCartAmount() + 15}</b>
          </div>

          <button >
            Prosseguir para o pagamento
          </button>

        </div>
      </div>
    </form>
  )

}
export default PlaceOrder
