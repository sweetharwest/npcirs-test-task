import React, {useState} from 'react';
import './Job.css';
import JobStack from "./job-stack/JobStack";

const Job = ({job}) => {

    return (
        <div className="job-container">
            <div className="job-header">
                Работа
            </div>
            <table className="job-table">
                <tbody>
                <tr>
                    <td>Позиция</td>
                    <td>{job.position}</td>
                </tr>
                <tr>
                    <td>Категория</td>
                    <td>{job.category}</td>
                </tr>
                <tr>
                    <td>Зарплата</td>
                    <td>{job.salary} ₽</td>
                </tr>
                <tr>
                    <td>Стек технологий</td>
                    <td><JobStack jobStack={job.stack} /></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Job;
