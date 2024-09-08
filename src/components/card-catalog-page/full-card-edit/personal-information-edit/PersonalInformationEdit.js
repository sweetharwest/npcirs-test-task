import React from 'react';
import './PersonalInformationEdit.css';

const PersonalInformationEdit = ({editedPerson, setEditedPerson}) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        let pI = editedPerson.personalInformation;
        pI = {...pI, [name]: value};
        setEditedPerson(
            prev => ({...prev, ["personalInformation"]: pI}));
    }

    return (
        <div className="personal-information-edit-container">
            <div className="personal-information-edit-header">
                Личная информация
            </div>
            <table className="personal-information-edit-table">
                <tbody>
                <tr>
                    <td className="td-key">Дата рождения</td>
                    <td>
                        <input
                            type="text"
                            name="birthDate"
                            value={editedPerson.personalInformation.birthDate.toLocaleDateString()}
                            onChange={handleChange}
                            className="personal-information-edit-input"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="td-key">Адрес</td>
                    <td>
                        <input
                            type="text"
                            name="address"
                            value={editedPerson.personalInformation.address}
                            onChange={handleChange}
                            className="personal-information-edit-input"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="td-key">Пол</td>
                    <td>
                        <input
                            type="text"
                            name="sex"
                            value={editedPerson.personalInformation.sex}
                            onChange={handleChange}
                            className="personal-information-edit-input"
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PersonalInformationEdit;
