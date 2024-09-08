import React, { useState } from 'react';
import './Filter.css';
import FilterSex from "./filter-sex/FilterSex";
import FilterPosition from "./filter-position/FilterPosition";
import FilterAge from "./filter-age/FilterAge";


const Filter = ({people,
                    sexFilter, setSexFilter,
                    positionFilter, setPositionFilter,
                    ageFilter, setAgeFilter}) => {
    return (
        <div className="filters-container">
            <FilterSex people={people} sexFilter={sexFilter} setSexFilter={setSexFilter} />
            <FilterPosition people={people} positionFilter={positionFilter} setPositionFilter={setPositionFilter} />
            <FilterAge people={people} ageFilter={ageFilter} setAgeFilter={setAgeFilter} />
        </div>
    );
};

export default Filter;