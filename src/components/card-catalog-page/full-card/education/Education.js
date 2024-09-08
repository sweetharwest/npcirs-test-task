import React from 'react';
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
                    <td className="td-key">Университет</td>
                    <td className="td-value">{education.university}</td>
                </tr>
                <tr>
                    <td className="td-key">Специальность</td>
                    <td className="td-value">{education.specialization}</td>
                </tr>
                <tr>
                    <td className="td-key">Год выпуска</td>
                    <td className="td-value">{education.yearGraduation}</td>
                </tr>
                <tr>
                    <td className="td-key">Уровень</td>
                    <td className="td-value">{education.level}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Education;
