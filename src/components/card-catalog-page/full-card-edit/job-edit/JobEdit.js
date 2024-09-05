import React, {useState} from 'react';
import './JobEdit.css';

const JobEdit = ({editedPerson, setEditedPerson}) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        let j = editedPerson.Job;
        j = {...j, [name]: value};
        setEditedPerson(
            prev => ({...prev, ["job"]: j}));
    }

    return (
        <div className="job-edit-container">
            <div className="job-edit-header">
                Работа
            </div>
            <table className="job-edit-table">
                <tbody>
                <tr>
                    <td className="td-key">Позиция</td>
                    <td>
                        <input
                            type="text"
                            name="position"
                            value={editedPerson.job.position}
                            onChange={handleChange}
                            className="job-edit-input"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="td-key">Категория</td>
                    <td>
                        <input
                            type="text"
                            name="category"
                            value={editedPerson.job.category}
                            onChange={handleChange}
                            className="job-edit-input"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="td-key">Зарплата</td>
                    <td>
                        <input
                            type="text"
                            name="salary"
                            value={editedPerson.job.salary}
                            onChange={handleChange}
                            className="job-edit-input"
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default JobEdit;
