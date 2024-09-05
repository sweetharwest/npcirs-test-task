import React from 'react';
import phoneImage from '../../../../../images/contacts/icon-phone.png';

const Phone = ({contact}) => {

    return (
        <div className="contact">
            <img
                className="contact-image"
                src={phoneImage}
                alt="phone image" />
            {contact}
        </div>
    );
};

export default Phone;
