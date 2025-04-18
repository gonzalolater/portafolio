import React, { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import './AuditoriasOEntrevistas.css'; // Make sure this CSS file exists

initMercadoPago('YOUR_PUBLIC_KEY'); // Replace with your Mercado Pago public key

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
                            title: 'Technical Audit or Interview',
                            quantity: 1,
                            currency_id: 'USD',
                            unit_price: 50, // Price in USD
                        },
                    ],
                }),
            });

            const preference = await response.json();
            setPreferenceId(preference.id); // Save the preferenceId in the state
        } catch (error) {
            console.error('Error creating payment preference:', error);
        }
    };

    useEffect(() => {
        handlePayment(); // Call the function to get the preferenceId when the component mounts
    }, []);

    return (
        <div id="page-wrapper" className="auditorias-wrapper">
            <header id="header" className="auditorias-header">
                <div className="logo">
                    <img
                        id="header-img"
                        src="/favicon.ico" // Correct path for files in the public folder
                        alt="personal professional logo"
                    />
                </div>
                <nav id="nav-bar" className="auditorias-nav">
                    <ul>
                        <li>
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#how-it-works">How it works</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="container auditorias-container">
                <section id="hero" className="auditorias-hero">
                    <h2>Audits, Interviews, Technical Interviews</h2>
                    <form
                        id="form"
                        action="https://www.freecodecamp.com/email-submit"
                        className="auditorias-form"
                    >
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Enter your Email"
                            required
                        />
                        <input id="submit" type="submit" value="Submit" className="btn" />
                    </form>
                </section>

                <section id="development" className="auditorias-development">
                    <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#6200ea' }}>
                        This page is still under development
                    </h2>
                    <a href="/" className="btn-home">Go to Home</a>
                </section>

                <section id="pricing" className="auditorias-precio">
                    <div className="product" id="tenor">
                        <div className="level">Technical Audits or Interviews</div>
                        <h2>$50 USD</h2>
                        <p>
                            Make the payment to schedule your technical audit or interview.
                        </p>
                        {preferenceId ? (
                            <Wallet initialization={{ preferenceId }} />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </section>

                <section className="extra-section">
                    <h3>Do you have questions?</h3>
                    <p>
                        Contact us to get more information about our audits and technical interviews.
                    </p>
                    <a href="#contact" className="btn btn-secondary">
                        Contact us
                    </a>
                </section>
            </div>

            <footer className="auditorias-footer">
                <ul>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Contact</li>
                </ul>
                <span>Copyright 2025, Page created by Gonzalo Daniel Aguilar.</span>
            </footer>
        </div>
    );
};

export default AuditoriasOEntrevistas;