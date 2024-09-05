import React, { useState } from 'react';
import './Filter.css';
import FilterSex from "./filter-sex/FilterSex";
import FilterPosition from "./filter-position/FilterPosition";


const Filter = ({people,
                    sexFilter, setSexFilter,
                    positionFilter, setPositionFilter}) => {
    return (
        <div className="filters-container">
            <FilterSex people={people} sexFilter={sexFilter} setSexFilter={setSexFilter} />
            <FilterPosition people={people} positionFilter={positionFilter} setPositionFilter={setPositionFilter} />
        </div>
    );
};

export default Filter;

/*const Filter = ({people, filterPeopleSex, setFilteredPeople, sexVariants}) => {
    return (
        <div className="">
            {sexVariants.map((item, index) => (
                <button
                    className=""
                    onClick={() => filterPeopleSex(item)}
                    key={index}
                >
                    {item}
                </button>
            ))}
            <button
                className=""
                onClick={() => setFilteredPeople(people)}
            >
                Любой
            </button>
        </div>
    );
};*/