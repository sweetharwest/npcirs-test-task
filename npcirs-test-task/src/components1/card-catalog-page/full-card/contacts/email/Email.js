import React from 'react';
import emailImage from '../../../../../images/contacts/icon-email.png';

const Email = ({contact}) => {

    return (
        <div className="contact">
            <img
                className="contact-image"
                src={emailImage}
                alt="email image" />
            {contact}
        </div>
    );
};

export default Email;
