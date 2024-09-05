import React, { useState } from 'react';
import './Filter.css';
import FilterSex from "./filter-sex/FilterSex";
import FilterPosition from "./filter-position/FilterPosition";


const Filter = ({people, setFilteredPeople}) => {
    const [sex, setSex] = React.useState(null);
    const [position, setPosition] = React.useState(null);

    /*const [parameters, setParameters] = React.useState({
        sex: null,
        position: null,
    });*/

    const filterPeople = () => {
        const newPeople = people.filter((newPerson) => {
            return (!sex || (newPerson.personalInformation.sex === sex)) &&
                (!position || (newPerson.job.position === position));
        });
        console.log("filterPeople");
        console.log("sex:" + sex);
        console.log("position:" + position);
        setFilteredPeople(newPeople);
    }

    return (
        <div className="">
            <div>sex: {sex}</div>
            <div>position: {position}</div>
            <FilterSex people={people} setSex={setSex} filterPeople={filterPeople} />
            <FilterPosition people={people} setPosition={setPosition} filterPeople={filterPeople} />
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