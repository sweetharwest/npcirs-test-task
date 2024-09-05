import React from 'react';
import './TablePage.css';
import { getParameters } from '../../services/api';

const TablePage = () => {
    const data = getParameters();
    return (
        <div className="table-page">
            <title>Таблица параметров учета</title>
            <h1>Таблица параметров учета</h1>
            <table>
                <thead>
                <tr>
                    {data.categoryParameter.map((category, index) => (
                        <th key={index}>{category}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.parameters.map((parameters, index) => (
                    <tr key={index}>
                        {parameters.map((parameter, index) => (
                            <td key={index}>{parameter}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;