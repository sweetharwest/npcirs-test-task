import React from 'react';

const ParameterTable = ({ parameters }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Название параметра</th>
                <th>Тип данных</th>
                <th>Опции</th>
            </tr>
            </thead>
            <tbody>
            {parameters.map((parameter, index) => (
                <tr key={index}>
                    <td>{parameter.name}</td>
                    <td>{parameter.type}</td>
                    <td>
                        {parameter.options && (
                            <ul>
                                {parameter.options.map((option, idx) => (
                                    <li key={idx}>{option}</li>
                                ))}
                            </ul>
                        )}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ParameterTable;