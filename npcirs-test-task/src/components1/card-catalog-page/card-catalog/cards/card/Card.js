import React, {useState} from 'react';
import './Card.css';
import CardContacts from "./card-contacts/CardContacts";

const Card = ({person, onClick}) => {

    return (
        <div
            className="card-container"
            onClick={() => onClick(person)}>
            <div>
                <div className="card-fio">
                    {person.personalInformation.fio}
                </div>
                <div className="card-job-position">
                    {person.job.position}
                </div>
                <CardContacts
                    contacts={person.contacts}
                />
            </div>
        </div>
    );
};

export default Card;
