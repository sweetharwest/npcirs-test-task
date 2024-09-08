import React, { useState } from 'react';
import './CardCatalog.css';
import Filter from "./filter/Filter";
import Cards from "./cards/Cards";


const CardCatalog = ({people, onClick}) => {

    const [sexFilter, setSexFilter] = useState(null);
    const [positionFilter, setPositionFilter] = useState(null);
    const [ageFilter, setAgeFilter] = useState({minAge: null, maxAge: null});

    const filteredPeople = people.filter(person => {
        const sexMatch = !sexFilter || (person.personalInformation.sex === sexFilter);
        const positionMatch = !positionFilter || (person.job.position === positionFilter);
        const age = Math.floor((new Date() - person.personalInformation.birthDate)/31557600000);
        const ageMatch = (!ageFilter.minAge && !ageFilter.maxAge) ||
            (!ageFilter.minAge && ageFilter.maxAge && (age < ageFilter.maxAge)) ||
            (!ageFilter.maxAge && ageFilter.minAge && (age > ageFilter.minAge)) ||
            (ageFilter.maxAge && ageFilter.minAge && (age > ageFilter.minAge) && (age < ageFilter.maxAge));

        return sexMatch && positionMatch && ageMatch;
    });

    return (
        <div className="card-catalog">
            <Filter
                people={people}
                sexFilter={sexFilter}
                setSexFilter={setSexFilter}
                positionFilter={positionFilter}
                setPositionFilter={setPositionFilter}
                ageFilter={ageFilter}
                setAgeFilter={setAgeFilter}
            />
            <Cards
                people={filteredPeople}
                onClick={onClick}
            />
        </div>
    );
};

export default CardCatalog;
