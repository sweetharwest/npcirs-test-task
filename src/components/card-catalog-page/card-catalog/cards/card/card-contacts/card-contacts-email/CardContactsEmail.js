import React from 'react';
import './CardContactsEmail.css';
import emailImage from '../../../../../../../images/contacts/icon-email.png';

const CardContactsEmail = ({contact}) => {

    return (
        <div className="card-contact">
            <img
                className="card-contact-image"
                src={emailImage}
                alt="email image" />
            {contact}
        </div>
    );
};

export default CardContactsEmail;
