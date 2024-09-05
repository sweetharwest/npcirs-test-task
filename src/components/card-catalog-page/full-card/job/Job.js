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
                    <td className="td-key">Позиция</td>
                    <td className="td-value">{job.position}</td>
                </tr>
                <tr>
                    <td className="td-key">Категория</td>
                    <td className="td-value">{job.category}</td>
                </tr>
                <tr>
                    <td className="td-key">Зарплата</td>
                    <td className="td-value">{job.salary} ₽</td>
                </tr>
                <tr>
                    <td className="td-key">Стек технологий</td>
                    <td className="td-value"><JobStack jobStack={job.stack} /></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Job;
