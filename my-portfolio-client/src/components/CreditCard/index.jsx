import React from 'react';
import './CreditCard.css';

const CreditCard = ({ cardNumber, cardHolder, expirationDate, cvv }) => {
    return (
        <div className="credit-card">
            <div className="card-number">{cardNumber}</div>
            <div className="card-holder">
                <span>Card Holder</span>
                <p>{cardHolder}</p>
            </div>
            <div className="card-details">
                <div className="expiration-date">
                    <span>Expires</span>
                    <p>{expirationDate}</p>
                </div>
                <div className="cvv">
                    <span>CVV</span>
                    <p>{cvv}</p>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;