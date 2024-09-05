import React from 'react';
import './PersonCard.css';

const PersonCard = ({person, onClick}) => {
    return (
        <div className="person-card-body">
            <div className="person-card">
                <div className="person-card-header">
                    Trushin Andrey Sergeevich1111111
                </div>
                <div className="person-job-position">
                    frontend developer
                </div>
                <div className="person-phone-number">
                    89374072006
                </div>

            </div>
        </div>

    );
};

export default PersonCard;

/*
<div className="person-card" onClick={onClick}>
    <div className="person-surname">
        {person.personalInformation.fio.split(' ')[0]}
    </div>
    <div className="person-io">
        {`${person.personalInformation.fio.split(' ')[1]} ${person.personalInformation.fio.split(' ')[2]}`}
    </div>
    <div className="person-job-position">
        {person.job.position}
    </div>
    <div className="person-phone-number">
        {person.contacts.phoneNumber}
    </div>
</div>*/
