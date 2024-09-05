import React, {useState} from 'react';
import './PersonalInformation.css';

const PersonalInformation = ({personalInformation}) => {
    const age = Math.floor((new Date() - personalInformation.birthDate)/31557600000);

    return (
        <div className="personal-information-container">
            <div className="personal-information-header">
                Личная информация
            </div>
            <table className="personal-information-table">
                <tbody>
                <tr>
                    <td>Дата рождения</td>
                    <td>{personalInformation.birthDate.toLocaleDateString()} - {age}</td>
                </tr>
                <tr>
                    <td>Адрес</td>
                    <td>{personalInformation.address}</td>
                </tr>
                <tr>
                    <td>Пол</td>
                    <td>{personalInformation.sex}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PersonalInformation;
