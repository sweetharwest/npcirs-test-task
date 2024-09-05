import React, { useState } from 'react';
import './CardCatalog.css';
import Filter from "./filter/Filter";
import Cards from "./cards/Cards";


const CardCatalog = ({people, onClick}) => {
    const [filteredPeople, setFilteredPeople] = React.useState(people);

    return (
        <div className="card-catalog">
            <Filter
                people={people}
                setFilteredPeople={setFilteredPeople}
            />
            <Cards
                people={filteredPeople}
                onClick={onClick}
            />
        </div>
    );
};

export default CardCatalog;

/*const CardCatalog = ({people, onClick}) => {
    const [filteredPeople, setFilteredPeople] = React.useState(people);
    const sexVariants = [...new Set(people.map((person) => person.personalInformation.sex))];

    const filterPeopleSex = (currentVariant) => {
        const newPeople = people.filter((newPerson) => {
            return newPerson.personalInformation.sex === currentVariant;
        });
        setFilteredPeople(newPeople);
    }

    return (
        <div className="card-catalog">
            <Filter
                people={people}
                filterPeopleSex={filterPeopleSex}
                setFilteredPeople={setFilteredPeople}
                sexVariants={sexVariants}
            />
            <Cards
                people={filteredPeople}
                onClick={onClick}
            />
        </div>
    );
};*/
