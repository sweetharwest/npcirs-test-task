import React, {useState} from 'react';
import './Education.css';

const Education = ({education}) => {

    return (
        <div className="education-container">
            <div className="education-header">
                Образование
            </div>
            <table className="education-table">
                <tbody>
                <tr>
                    <td>Университет</td>
                    <td>{education.university}</td>
                </tr>
                <tr>
                    <td>Специальность</td>
                    <td>{education.specialization}</td>
                </tr>
                <tr>
                    <td>Год выпуска</td>
                    <td>{education.yearGraduation}</td>
                </tr>
                <tr>
                    <td>Уровень</td>
                    <td>{education.level}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Education;
