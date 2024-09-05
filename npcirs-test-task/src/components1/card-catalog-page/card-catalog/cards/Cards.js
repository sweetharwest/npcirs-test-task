import React, {useState} from 'react';
import './Cards.css';
import Card from "./card/Card";


const Cards = ({people, onClick}) => {

    return (
        <div className="cards-container">
            <div className="">
                {people.map((person) => (
                    <Card
                        key={person.id}
                        person={person}
                        onClick={onClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
