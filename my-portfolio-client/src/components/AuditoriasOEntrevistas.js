import React, { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import './AuditoriasOEntrevistas.css'; // Asegúrate de crear este archivo CSS

initMercadoPago('YOUR_PUBLIC_KEY'); // Reemplaza con tu clave pública de Mercado Pago

const AuditoriasOEntrevistas = () => {
    const [preferenceId, setPreferenceId] = useState(null);

    const handlePayment = async () => {
        try {
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
            setPreferenceId(preference.id); // Guarda el preferenceId en el estado
        } catch (error) {
            console.error('Error al crear la preferencia de pago:', error);
        }
    };

    useEffect(() => {
        handlePayment(); // Llama a la función para obtener el preferenceId al montar el componente
    }, []);

    return (
      <div id="page-wrapper" className="auditorias-wrapper">
        <header id="header" className="auditorias-header">
          <div className="logo">
            <img
              id="header-img"
              src="/favicon.ico" // Ruta correcta para archivos en la carpeta public
              alt="logo profesional personal"
            />
          </div>
          <nav id="nav-bar" className="auditorias-nav">
            <ul>
              <li>
                <a className="nav-link" href="#caracteristicas">
                  Caracteristicas
                </a>
              </li>
              <li>
                <a className="nav-link" href="#como-funciona">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a className="nav-link" href="#precio">
                  Precios
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="container auditorias-container">
          <section id="hero" className="auditorias-hero">
            <h2>Auditorías, Entrevistas, Entrevistas Tecnicas</h2>
            <form
              id="form"
              action="https://www.freecodecamp.com/email-submit"
              className="auditorias-form"
            >
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

          <section id="precio" className="auditorias-precio">
            <div className="product" id="tenor">
              <div className="level">Auditorías o Entrevistas Técnicas</div>
              <h2>$50 USD</h2>
              <p>
                Realiza el pago para agendar tu auditoría o entrevista técnica.
              </p>
              {preferenceId ? (
                <Wallet initialization={{ preferenceId }} />
              ) : (
                <p>Cargando...</p>
              )}
            </div>
          </section>

          <section className="extra-section">
            <h3>¿Tienes preguntas?</h3>
            <p>
              Contáctanos para obtener más información sobre nuestras auditorías
              y entrevistas técnicas.
            </p>
            <a href="#contacto" className="btn btn-secondary">
              Contáctanos
            </a>
          </section>
        </div>

        <footer className="auditorias-footer">
          <ul>
            <li>Privacidad</li>
            <li>Términos</li>
            <li>Contacto</li>
          </ul>
          <span>Copyright 2021, Página creada por Gonzalo Daniel Aguilar.</span>
        </footer>
      </div>
    );
};

export default AuditoriasOEntrevistas;