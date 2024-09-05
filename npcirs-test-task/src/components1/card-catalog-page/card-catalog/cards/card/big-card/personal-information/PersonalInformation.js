import React, {useState} from 'react';
import './PersonalInformation.css';

const PersonalInformation = ({personalInformation}) => {

    return (
        <div className="personal-information-container">
            <div className="personal-information-header">
                Личная информация
            </div>
            <table className="personal-information-table">
                <tbody>
                <tr>
                    <td>Дата рождения</td>
                    <td>{personalInformation.birthDate.toLocaleDateString()}</td>
                </tr>
                <tr>
                    <td>Адрес</td>
                    <td>{personalInformation.address}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PersonalInformation;
