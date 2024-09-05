import React, {useState} from 'react';
import './BigCard.css';
import PersonalInformation from "./personal-information/PersonalInformation";
import Job from "./job/Job";
import Education from "./education/Education";

const BigCard = ({person}) => {

    return (
        <div>
            <div className="big-card-header">
                {person.personalInformation.fio}
            </div>
            <PersonalInformation personalInformation={person.personalInformation} />
            <Job job={person.job} />
            <Education education={person.education} />
        </div>
    );
};

export default BigCard;
