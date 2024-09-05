import React from 'react';
import './TestCard.css';

const TestCard = () => {
    return (
        <div className="card">
            <div className="card-content">
                <h2>Иванов Иван Иванович</h2>
                <p>Директор</p>
                <p><span className="phone-icon"></span> +7 (999) 999-99-99</p>
            </div>
        </div>
    );
};

export default TestCard;