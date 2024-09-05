import React, {useState} from 'react';
import './FilterPosition.css';

const FilterPosition = ({people, setPosition, filterPeople}) => {
    const variants = [...new Set(people.map((person) => person.job.position))];

    return (
        <div className="">
            {variants.map((variant, index) => (
                <button
                    className=""
                    onClick={() => {
                        setPosition(variant);
                        filterPeople();
                    }}
                    key={index}
                >
                    {variant}
                </button>
            ))}
            <button
                className=""
                onClick={() => {
                    setPosition(null);
                    filterPeople();
                }}
            >
                Любая
            </button>
        </div>
    );
};

export default FilterPosition;
