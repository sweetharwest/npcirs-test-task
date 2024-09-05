import React, { useState } from 'react';

const FilterForm = ({ filter, onFilter }) => {
    const [filters, setFilters] = useState(filter);

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="ФИО"
                value={filters.name || ''}
                onChange={handleChange}
            />
            <input
                type="date"
                name="birthdate"
                placeholder="Дата рождения"
                value={filters.birthdate || ''}
                onChange={handleChange}
            />
            {/* Добавьте другие поля для фильтрации по необходимости */}
            <button type="submit">Применить фильтр</button>
        </form>
    );
};

export default FilterForm;