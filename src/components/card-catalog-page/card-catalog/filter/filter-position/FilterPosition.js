import React, {useState} from 'react';
import './FilterPosition.css';

const FilterPosition = ({people, positionFilter, setPositionFilter}) => {
    const variants = [...new Set(people.map((person) => person.job.position))];

    return (
        <div className="filter">
            <div className="filter-header">
                Позиция
            </div>
            {variants.map((variant, index) => (
                <div
                    className={variant === positionFilter? "filter-variant-selected" : "filter-variant"}
                    onClick={() => {
                        setPositionFilter(variant);
                    }}
                    key={index}
                >
                    {variant}
                </div>
            ))}
            <div
                className={positionFilter? "filter-variant" : "filter-variant-selected"}
                onClick={() => {
                    setPositionFilter(null);
                }}
            >
                Любая
            </div>
        </div>
    );
};

export default FilterPosition;
