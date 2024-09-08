import React, {useState} from 'react';
import './FullCardEdit.css';
import PersonalInformationEdit from "./personal-information-edit/PersonalInformationEdit";
import JobEdit from "./job-edit/JobEdit";
import EducationEdit from "./education-edit/EducationEdit";
import Contacts from "../full-card/contacts/Contacts";
import backImage from "../../../images/icon-back.png";
import saveImage from "../../../images/icon-save.png";
import closeImage from "../../../images/icon-close.png";

const FullCardEdit = ({setIsEdit, person, onClose, people, setPeople}) => {
    const [editedPerson, setEditedPerson] = useState({...person});

    const handleChange = (e) => {
        const {name, value} = e.target;
        let pI = editedPerson.personalInformation;
        pI = {...pI, [name]: value};
        setEditedPerson(
            prev => ({...prev, ["personalInformation"]: pI}));
        console.log(editedPerson.personalInformation);
    }

    const handleSave = (updatedPerson) => {
        setPeople(prevPeople =>
            prevPeople.map(person =>
                person.id === updatedPerson.id ? updatedPerson : person
            )
        );
    };

    return (
        <div className="full-card">
            <div className="full-card-header">
                <input className="full-card-edit-header-input"
                    type="text"
                    name="fio"
                    value={editedPerson.personalInformation.fio}
                    onChange={handleChange}
                />

                <div className="btn-close" onClick={()=> {onClose(null)}}>
                    <img
                        className="btn-close-image"
                        src={closeImage}
                        alt="close image"/>
                </div>
                <div className="btn-close" onClick={()=> {handleSave(editedPerson)}}>
                    <img
                        className="btn-close-image"
                        src={saveImage}
                        alt="save image"/>
                </div>
                <div className="btn-close" onClick={()=> {setIsEdit(false)}}>
                    <img
                        className="btn-close-image"
                        src={backImage}
                        alt="back image"/>
                </div>

            </div>
            <div className="full-card-content">
                <div className="full-card-content-left">
                    <PersonalInformationEdit editedPerson={editedPerson} setEditedPerson={setEditedPerson}/>
                    <JobEdit editedPerson={editedPerson} setEditedPerson={setEditedPerson}/>
                    <EducationEdit editedPerson={editedPerson} setEditedPerson={setEditedPerson}/>
                </div>
                <Contacts contacts={person.contacts} />
            </div>
        </div>
    );
};

export default FullCardEdit;
