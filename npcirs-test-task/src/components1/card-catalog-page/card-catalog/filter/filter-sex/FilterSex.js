import React, {useState} from 'react';
import './FilterSex.css';

const FilterSex = ({people, setSex, filterPeople}) => {
    const variants = [...new Set(people.map((person) => person.personalInformation.sex))];

    return (
        <div className="">
            {variants.map((variant, index) => (
                <button
                    className=""
                    onClick={() => {
                        setSex(variant);
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
                    setSex(null);
                    filterPeople();
                }}
            >
                Любой
            </button>
        </div>
    );
};

export default FilterSex;
