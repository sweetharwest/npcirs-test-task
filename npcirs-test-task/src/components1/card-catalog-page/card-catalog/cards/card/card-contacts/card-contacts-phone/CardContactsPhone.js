import React from 'react';
import './CardContactsPhone.css';
import phoneImage from '../../../../../../../images/contacts/icon-phone.png';

const CardContactsPhone = ({contact}) => {

    return (
        <div className="card-contact">
            <img
                className="card-contact-image"
                src={phoneImage}
                alt="phone image" />
            {contact}
        </div>
    );
};

export default CardContactsPhone;
