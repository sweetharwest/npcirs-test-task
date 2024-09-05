import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { getDashboardData } from '../services/api';

const Dashboard = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await getDashboardData();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Главная страница</h1>
            <BarChart width={800} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="показатель1" fill="#8884d8" />
                <Bar dataKey="показатель2" fill="#82ca9d" />
            </BarChart>
            {/* Добавьте другие графики и показатели по необходимости */}
        </div>
    );
};

export default Dashboard;

//приведи пример data для этого компонента