import React, {useState} from 'react';
import './FullCard.css';
import PersonalInformation from "./personal-information/PersonalInformation";
import Job from "./job/Job";
import Education from "./education/Education";
import Contacts from "./contacts/Contacts";
import closeImage from '../../../images/icon-close.png';
import editImage from '../../../images/icon-edit.png';
import FullCardEdit from "../full-card-edit/FullCardEdit";


const FullCard = ({person, onClose, people, setPeople}) => {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="full-card">
            {isEdit && (
                <FullCardEdit setIsEdit={setIsEdit} person={person} onClose={onClose} people={people} setPeople={setPeople}/>
            )}
            {!isEdit && (
                <div>
                    <div className="full-card-header">
                        {person.personalInformation.fio}
                        <div className="btn-close" onClick={()=> {onClose(null)}}>
                            <img
                                className="btn-close-image"
                                src={closeImage}
                                alt="close image"/>
                        </div>
                        <div className="btn-edit" onClick={()=> {setIsEdit(true)}}>
                            <img
                                className="btn-edit-image"
                                src={editImage}
                                alt="edit image"/>
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
            )}
        </div>
    );
};

export default FullCard;
