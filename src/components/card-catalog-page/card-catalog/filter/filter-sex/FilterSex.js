import React, {useState} from 'react';
import './FilterSex.css';

const FilterSex = ({people, sexFilter, setSexFilter}) => {
    const variants = [...new Set(people.map((person) => person.personalInformation.sex))];

    return (
        <div className="filter">
            <div className="filter-header">
                Пол
            </div>
            <div
                className={sexFilter? "filter-variant" : "filter-variant-selected"}
                onClick={() => {
                    setSexFilter(null);
                }}
            >
                Любой
            </div>
            {variants.map((variant, index) => (
                <div
                    className={variant === sexFilter? "filter-variant-selected" : "filter-variant"}
                    onClick={() => {
                        setSexFilter(variant === sexFilter ? null : variant);
                    }}
                    key={index}
                >
                    {variant}
                </div>
            ))}
        </div>
    );
};

export default FilterSex;
