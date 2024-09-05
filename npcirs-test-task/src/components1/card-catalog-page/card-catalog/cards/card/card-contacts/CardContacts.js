import React from 'react';
import './CardContacts.css';
import CardContactsPhone from "./card-contacts-phone/CardContactsPhone";
import CardContactsEmail from "./card-contacts-email/CardContactsEmail";
import CardContactsTelegram from "./card-contacts-telegram/CardContactsTelegram";

const CardContacts = ({contacts}) => {

    return (
        <div className="card-contacts">
            {contacts.phoneNumber && <CardContactsPhone contact={contacts.phoneNumber} />}
            {contacts.email && <CardContactsEmail contact={contacts.email} />}
            {contacts.telegram && <CardContactsTelegram contact={contacts.telegram} />}
        </div>
    );
};

export default CardContacts;
