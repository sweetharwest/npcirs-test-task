import React from 'react';
import './CardContactsTelegram.css';
import telegramImage from '../../../../../../../images/contacts/icon-telegram.png';

const CardContactsTelegram = ({contact}) => {

    return (
        <div className="card-contact">
            <img
                className="card-contact-image"
                src={telegramImage}
                alt="telegram image" />
            {contact}
        </div>
    );
};

export default CardContactsTelegram;
