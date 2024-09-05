import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import data from '../data';
import './MainPage.css';

const MainPage = (initialPeople) => {


    return (
        <div className="statistics">
{/*            <BarChart width={600} height={300} data={ageData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="age" fill="#8884d8" />
            </BarChart>*/}
        </div>
    );
};

export default MainPage;