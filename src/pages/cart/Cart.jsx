import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const navigate = useNavigate()

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className='cart'>

            <div className="cart-items">

                <div className="cart-items-title">
                    <p>Itens</p>
                    <p>Título</p>
                    <p>Preço</p>
                    <p>Quantidade</p>
                    <p>Total</p>
                    <p>Remover</p>
                </div>

                <hr />

                {food_list.map((item, index) => {

                    if (cartItems[item._id] > 0) {

                        return (
                            <div key={index}>

                                <div className="cart-items-title cart-items-item">

                                    <img src={item.image} alt="" />

                                    <p>{item.name}</p>

                                    <p>R${item.price}</p>

                                    <p>{cartItems[item._id]}</p>

                                    <p>
                                        R${item.price * cartItems[item._id]}
                                    </p>

                                    <p
                                        onClick={() => removeFromCart(item._id)}
                                        className="cart-remove"
                                    >
                                        x
                                    </p>

                                </div>

                                <hr />

                            </div>
                        )
                    }
                })}

            </div>

            <div className="cart-bottom">

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

                    <button onClick={() => navigate('/order')}>
                        Finalizar pedido
                    </button>

                </div>

                <div className="cart-promocode">

                    <p>
                        Se você tiver um código promocional, <span>Clique aqui</span>
                    </p>

                    <div className="cart-promocode-input">

                        <input
                            type="text"
                            placeholder="Código Promocional"
                        />

                        <button>Enviar</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cart