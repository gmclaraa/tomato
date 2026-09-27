
import React, { useState } from 'react'

import './LoginPopup.css'

import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState('Login')

    return (
        <div className="login-popup">

            <form className="login-popup-container">

                <div className="login-popup-title">
                    <h2>{currState}</h2>

                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt="Fechar"
                    />
                </div>

                <div className="login-popup-input">

                    {currState === "Login" ? (
                        <></>
                    ) : (
                        <input
                            type="text"
                            placeholder="Seu nome"
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Seu Email"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        required
                    />

                </div>

                <button type="submit">
                    {currState === 'Login' ? 'Entrar' : 'Criar Conta'}
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>
                        Li e concordo com os termos de uso e a política de privacidade.
                    </p>
                </div>

                {currState === "Login" ? (
                    <p>
                        Ainda não tem uma conta?{' '}
                        <span onClick={() => setCurrState('Criar Conta')}>
                            Criar conta
                        </span>
                    </p>
                ) : (
                    <p>
                        Já tem uma conta?{' '}
                        <span onClick={() => setCurrState('Login')}>
                            Entre aqui
                        </span>
                    </p>
                )}

            </form>

        </div>
    )
}

export default LoginPopup

