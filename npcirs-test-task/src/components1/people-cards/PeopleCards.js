import React, { useState } from 'react';
import './PeopleCards.css';
import {getPeople} from "../../services/api";
import PersonCard from "./person-card/PersonCard";


const PeopleCards = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleCardClick = (person) => {
        setSelectedPerson(person);
    };

    const people = getPeople();

    /*const people = [
        {id: 1, name: "penis1", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 2, name: "penis2", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 3, name: "penis3", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 4, name: "penis4", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 5, name: "penis5", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 6, name: "penis6", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 1, name: "penis1", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 2, name: "penis2", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 3, name: "penis3", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 4, name: "penis4", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 5, name: "penis5", email: "penisJob", phone: "penis1", address: "penisJob"},
        {id: 6, name: "penis6", email: "penisJob", phone: "penis1", address: "penisJob"},
    ]*/

    return (
        <div className="people-cards-main">
            {selectedPerson && (
                <div className="selected-person-info">
                    <h2>{selectedPerson.personalInformation.fio}</h2>
                    <p>{selectedPerson.contacts.phoneNumber}</p>
                </div>
            )}



            <div className={`people-cards ${selectedPerson ? 'expanded' : ''}`}>
            {people.map((person) => (
                    <PersonCard
                        key={person.id}
                        person={person}
                        onClick={() => handleCardClick(person)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PeopleCards;


/*
import React, { useState } from 'react';
import './PeopleCards.css';

const PeopleCard = ({ person }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`people-card ${isExpanded ? 'expanded' : ''}`} onClick={handleClick} >
            <h2>{person.name}</h2>
            <p>{person.job}</p>
            {isExpanded && <p>{person.bio}</p>}
        </div>
    );
};

const PeopleCards = () => {
    const people = [
        {id: 1, name: "penis1", job: "penisJob"},
        {id: 2, name: "penis2", job: "penisJob"},
        {id: 3, name: "penis3", job: "penisJob"},
        {id: 4, name: "penis4", job: "penisJob"},
        {id: 5, name: "penis5", job: "penisJob"},
        {id: 6, name: "penis6", job: "penisJob"},
        {id: 7, name: "penis7", job: "penisJob"},
        {id: 8, name: "penis8", job: "penisJob"},
        {id: 1, name: "penis1", job: "penisJob"},
        {id: 2, name: "penis2", job: "penisJob"},
        {id: 3, name: "penis3", job: "penisJob"},
        {id: 4, name: "penis4", job: "penisJob"},
        {id: 5, name: "penis5", job: "penisJob"},
        {id: 6, name: "penis6", job: "penisJob"},
        {id: 7, name: "penis7", job: "penisJob"},
        {id: 1, name: "penis1", job: "penisJob"},
        {id: 2, name: "penis2", job: "penisJob"},
        {id: 3, name: "penis3", job: "penisJob"},
        {id: 4, name: "penis4", job: "penisJob"},
        {id: 5, name: "penis5", job: "penisJob"},
        {id: 6, name: "penis6", job: "penisJob"},
        {id: 7, name: "penis7", job: "penisJob"},
        {id: 8, name: "penis8", job: "penisJob"},
        {id: 1, name: "penis1", job: "penisJob"},
        {id: 2, name: "penis2", job: "penisJob"},
        {id: 3, name: "penis3", job: "penisJob"},
        {id: 4, name: "penis4", job: "penisJob"},
        {id: 5, name: "penis5", job: "penisJob"},
        {id: 6, name: "penis6", job: "penisJob"},
        {id: 7, name: "penis7", job: "penisJob"},
    ]
    return (
        <div className="people-cards">
            {people.map((person) => (
                <PeopleCard key={person.id} person={person} />
            ))}
        </div>
    );
};

export default PeopleCards;*/
