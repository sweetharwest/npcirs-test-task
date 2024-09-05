import React from 'react';
import telegramImage from '../../../../../images/contacts/icon-telegram.png';

const Telegram = ({contact}) => {

    return (
        <div className="contact">
            <img
                className="contact-image"
                src={telegramImage}
                alt="telegram image" />
            {contact}
        </div>
    );
};

export default Telegram;
