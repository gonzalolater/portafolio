import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './AuditoriasOEntrevistas.css'; // Asegúrate de que este archivo contenga el CSS proporcionado

const AuditoriasOEntrevistas = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iohvlx7', // Tu Service ID
        'template_v9jfdik', // Tu Template ID
        form.current,
        {
          publicKey: 'kwP9r1QFPmCcHszaC', // Tu Public Key
        }
      )
      .then(
        () => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email. Please try again later.');
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <div id="page-wrapper">
      <div className="container"></div>

      <section id="hero">
        <h1 style={{ marginBottom: '30px', marginTop: '25px' }}>Interviews, Technical Interviews & Audits.</h1>
        <form id="form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="email">Email: </label>
          <input
            name="user_email"
            id="email"
            type="email"
            placeholder="Enter your email"
            className="input"
            required
          />
          <label htmlFor="message"> Message: </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message, your contact method, and the reason why you want to contact me through this medium."
            className="input"
            rows="4" // Ajusta el número de filas para que el placeholder sea completamente visible
            required
          ></textarea>
          <input id="submit" type="submit" value="Send" className="btn" />
        </form>
      </section>

      <div className="container">
        <section id="caracteristicas">
          <div className="grid">
            <div className="icon">
              <i className="fa fa-3x fa-clock"></i>
            </div>
            <div className="desc">
              <h2>Complete Training Plan</h2>
              <p>
                From individual training to training sessions lasting 3 months
                or more, to achieve your professional goals.
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="icon">
              <i className="fa fa-3x fa-calendar"></i>
            </div>
            <div className="desc">
              <h2>
                Looking for software developers and engineers for different
                technologies.
              </h2>
              <p>
                I have a wide list of active developers for different projects
                and monetary scope.
              </p>
            </div>
          </div>
        </section>
        <section id="precio">
          <div className="product" id="tenor">
            <div className="level">Interview</div>
            <h2>$10 USD per hour</h2>
            <ol>
              <li>Presentation</li>
              <li>Filling out forms</li>
              <li>Skills test</li>
              <li>Feedback and follow-up</li>
            </ol>
            <button className="btn">Choose</button>
          </div>
          <div className="product" id="bass">
            <div className="level">Technical interviews</div>
            <h2>$20 USD per hour</h2>
            <ol>
              <li>Technical Challenges</li>
              <li>Meetings with Specialists</li>
              <li>Workflow Chart Design</li>
              <li>MVP Development</li>
            </ol>
            <button className="btn">Choose</button>
          </div>
          <div className="product" id="valve">
            <div className="level">Audits</div>
            <h2>$30 USD per hour</h2>
            <ol>
              <li>Conclusion</li>
              <li>Performance improvements</li>
              <li>Technical improvements</li>
              <li>Security improvements</li>
            </ol>
            <button className="btn">Choose</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuditoriasOEntrevistas;