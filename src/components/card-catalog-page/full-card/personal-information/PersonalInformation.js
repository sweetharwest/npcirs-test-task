import React from 'react';
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
                    <td className="td-key">Дата рождения</td>
                    <td className="td-value">{personalInformation.birthDate.toLocaleDateString()} - {age}</td>
                </tr>
                <tr>
                    <td className="td-key">Адрес</td>
                    <td className="td-value">{personalInformation.address}</td>
                </tr>
                <tr>
                    <td className="td-key">Пол</td>
                    <td className="td-value">{personalInformation.sex}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PersonalInformation;
