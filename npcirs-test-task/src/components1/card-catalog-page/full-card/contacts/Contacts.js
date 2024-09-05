import React from 'react';
import './Contacts.css';
import Email from "./email/Email";
import Phone from "./phone/Phone";
import Telegram from "./telegram/Telegram";

const CardContacts = ({contacts}) => {

    return (
        <div className="contacts">
            <div className="contacts-header">
                Контакты
            </div>
            <div className="contacts-content">
                {contacts.phoneNumber && <Phone contact={contacts.phoneNumber}/>}
                {contacts.email && <Email contact={contacts.email}/>}
                {contacts.telegram && <Telegram contact={contacts.telegram}/>}
            </div>
        </div>

    );
};

export default CardContacts;
