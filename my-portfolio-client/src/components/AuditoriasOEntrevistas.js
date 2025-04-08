import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

initMercadoPago('YOUR_PUBLIC_KEY'); // Reemplaza con tu clave pública de Mercado Pago

const AuditoriasOEntrevistas = () => {
    const handlePayment = async () => {
        const response = await fetch('/api/create-preference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: [
                    {
                        title: 'Auditoría o Entrevista Técnica',
                        quantity: 1,
                        currency_id: 'USD',
                        unit_price: 50, // Precio en dólares
                    },
                ],
            }),
        });

        const preference = await response.json();
        return preference.id;
    };

    return (
        <div id="page-wrapper">
            <header id="header">
                <div className="logo">
                    <img
                        id="header-img"
                        src="https://scontent.fluq1-1.fna.fbcdn.net/v/t1.0-9/142546402_1004947263370966_2667725116191369017_o.png?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=pArTvcC7ImMAX9I1NiR&_nc_ht=scontent.fluq1-1.fna&oh=2e5950c6fbb269a3016350afd2955418&oe=60341B9A"
                        alt="logo profesional personal"
                    />
                </div>
                <nav id="nav-bar">
                    <ul>
                        <li><a className="nav-link" href="#caracteristicas">Caracteristicas</a></li>
                        <li><a className="nav-link" href="#como-funciona">Cómo funciona</a></li>
                        <li><a className="nav-link" href="#precio">Precios</a></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <section id="hero">
                    <h2>Coaching Individual, Análisis de partidas, Coaching en mentalidad, Coaching a equipos.</h2>
                    <form id="form" action="https://www.freecodecamp.com/email-submit">
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Ingrese su Email"
                            required
                        />
                        <input id="submit" type="submit" value="Enviar" className="btn" />
                    </form>
                </section>

                <section id="precio">
                    <div className="product" id="tenor">
                        <div className="level">Auditorías o Entrevistas Técnicas</div>
                        <h2>$50 USD</h2>
                        <p>Realiza el pago para agendar tu auditoría o entrevista técnica.</p>
                        <Wallet initialization={{ preferenceId: handlePayment }} />
                    </div>
                </section>
            </div>

            <footer>
                <ul>
                    <li><a href="#">Privacidad</a></li>
                    <li><a href="#">Términos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <span>Copyright 2021, Página creada por Gonzalo Daniel Aguilar.</span>
            </footer>
        </div>
    );
};

export default AuditoriasOEntrevistas;