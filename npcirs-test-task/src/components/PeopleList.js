import React, { useState, useEffect } from 'react';
import { getPeople } from '../services/api';
import PersonCard from './PersonCard';
import FilterForm from './FilterForm';

const PeopleList = () => {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPeople();
            setPeople(data);
            setFilteredPeople(data);
        };

        fetchData();
    }, []);

    const handleFilter = (filters) => {
        setFilter(filters);

        const filtered = people.filter((person) => {
            let matches = true;

            if (filters.name) {
                matches = matches && person.name.toLowerCase().includes(filters.name.toLowerCase());
            }

            if (filters.birthdate) {
                matches = matches && person.birthdate === filters.birthdate;
            }

            // Добавьте другие фильтры по необходимости

            return matches;
        });

        setFilteredPeople(filtered);
    };

    return (
        <div>
            <FilterForm filter={filter} onFilter={handleFilter} />
            {filteredPeople.map((person) => (
                <PersonCard key={person.id} person={person} />
            ))}
        </div>
    );
};

export default PeopleList;