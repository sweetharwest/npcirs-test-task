import React, { useState } from 'react';
import './CardCatalogPage.css';
import CardCatalog from "./card-catalog/CardCatalog";
import FullCard from "./full-card/FullCard";


const CardCatalogPage = ({initialPeople}) => {

    const [selectedPerson, setSelectedPerson] = useState(null);
    const [people, setPeople] = useState(initialPeople)

    const handleCardClick = (person) => {
        setSelectedPerson(person);
    };

    return (
        <div className="card-catalog-page">
            {!selectedPerson && (
                <CardCatalog people={people} onClick={handleCardClick} />
            )}
            {selectedPerson && (
                <FullCard person={selectedPerson} onClose={handleCardClick} people={people} setPeople={setPeople}/>
            )}

        </div>
    );
};

export default CardCatalogPage;
