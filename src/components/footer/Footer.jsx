import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>No Tomato, você encontra sabores irresistíveis, ingredientes selecionados e praticidade para pedir seus pratos favoritos. Escolha o que deseja, faça seu pedido e aproveite uma experiência deliciosa do começo ao fim.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>Sobre Nós</li>
                    <li>Delivery</li>
                    <li>privacy Policy</li>
                </ul>
                </div>

                <div className="footer-content-right">
                    <h2>ENTRE EM CONTATO</h2>
                    <ul>
                        <li>+55 11 9999-9999</li>
                        <li>contato@tomato.com</li>
                    </ul>
                </div>

            </div>
               <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com — Todos os direitos reservados.</p>
          
        </div>
    )
}

export default Footer
