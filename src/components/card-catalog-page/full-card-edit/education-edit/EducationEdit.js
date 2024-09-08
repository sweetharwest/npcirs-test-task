import React from 'react';
import './EducationEdit.css';

const EducationEdit = ({editedPerson, setEditedPerson}) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        let ed = editedPerson.education;
        ed = {...ed, [name]: value};
        setEditedPerson(
            prev => ({...prev, ["education"]: ed}));
    }

    return (
        <div className="education-edit-container">
            <div className="education-edit-header">
                Образование
            </div>
            <table className="education-edit-table">
                <tbody>
                <tr>
                    <td className="td-key">Университет</td>
                    <td>
                        <input
                            type="text"
                            name="university"
                            value={editedPerson.education.university}
                            onChange={handleChange}
                            className="education-edit-input"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="td-key">Специальность</td>
                    <td>
                        <input
                            type="text"
                            name="specialization"
                            value={editedPerson.education.specialization}
                            onChange={handleChange}
                            className="education-edit-input"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="td-key">Год выпуска</td>
                    <td>
                        <input
                            type="text"
                            name="yearGraduation"
                            value={editedPerson.education.yearGraduation}
                            onChange={handleChange}
                            className="education-edit-input"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="td-key">Уровень</td>
                    <td>
                        <input
                            type="text"
                            name="level"
                            value={editedPerson.education.level}
                            onChange={handleChange}
                            className="education-edit-input"
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EducationEdit;
