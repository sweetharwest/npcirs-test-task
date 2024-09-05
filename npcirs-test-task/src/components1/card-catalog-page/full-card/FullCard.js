import React, {useState} from 'react';
import './FullCard.css';
import PersonalInformation from "./personal-information/PersonalInformation";
import Job from "./job/Job";
import Education from "./education/Education";
import Contacts from "./contacts/Contacts";
import closeImage from '../../../images/icon-close.png';


const FullCard = ({person, onClose}) => {

    return (
        <div className="full-card">
            <div className="full-card-header">
                {person.personalInformation.fio}
                <div className="btn-close" onClick={()=> {onClose(null)}}>
                    <img
                        className="btn-close-image"
                        src={closeImage}
                        alt="close image"/>
                </div>
            </div>
            <div className="full-card-content">
                <div className="full-card-content-left">
                <PersonalInformation personalInformation={person.personalInformation} />
                    <Job job={person.job} />
                    <Education education={person.education} />
                </div>
                <Contacts contacts={person.contacts} />
            </div>
        </div>
    );
};

export default FullCard;
