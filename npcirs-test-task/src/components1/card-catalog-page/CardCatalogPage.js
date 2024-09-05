import React, { useState } from 'react';
import './CardCatalogPage.css';
import CardCatalog from "./card-catalog/CardCatalog";
import FullCard from "./full-card/FullCard";


const CardCatalogPage = ({people}) => {

    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleCardClick = (person) => {
        setSelectedPerson(person);
    };

    return (
        <div className="card-catalog-page">
            {!selectedPerson && (
                <CardCatalog people={people} onClick={handleCardClick} />
            )}
            {selectedPerson && (
                <FullCard person={selectedPerson} onClose={handleCardClick}/>
            )}

        </div>
    );
};

export default CardCatalogPage;
