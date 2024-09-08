import React, {useState} from 'react';
import './FilterAge.css';

const FilterAge = ({people, ageFilter, setAgeFilter}) => {
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');

    const handleMinAgeChange = (event) => {
        setMinAge(event.target.value);
    };

    const handleMaxAgeChange = (event) => {
        setMaxAge(event.target.value);
    };

    return (
        <div className="filter">
            <div className="filter-header">
                Возраст
            </div>
            <div className="filter-age-range">
                <div className="filter-ahe-range-label">От:</div>
                <input className="filter-ahe-range-input" type="number" value={minAge} onChange={handleMinAgeChange} />
                <div className="filter-ahe-range-label">До:</div>
                <input className="filter-ahe-range-input" type="number" value={maxAge} onChange={handleMaxAgeChange} />
            </div>
            <div
                className="filter-variant"
                onClick={() => {setAgeFilter({minAge: minAge, maxAge: maxAge})}}>
                Применить
            </div>
        </div>
    );
};

export default FilterAge;
