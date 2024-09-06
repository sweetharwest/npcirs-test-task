import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './MainPage.css';

const MainPage = (initialPeople) => {

    const [chartData, setChartData] = useState({
        sex: {
            labels: [],
            datasets: [{
                label: '',
                data: [],
            }],
        },
        age: {
            labels: [],
            datasets: [{
                label: 'Age Distribution',
                data: [],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
            }],
        },
        salary: {
            labels: [],
            datasets: [{
                label: 'Salary Distribution',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }],
        },
    });
    const [sexData, setSexData] = useState({});

    useEffect(() => {
        const sexData = initialPeople.initialPeople.reduce((acc, person) => {
            acc[person.personalInformation.sex] = (acc[person.personalInformation.sex] || 0) + 1;
            return acc;
        }, {});
        setSexData(sexData);

        const ageData = initialPeople.initialPeople.reduce((acc, person) => {
            let age = Math.floor((new Date() - person.personalInformation.birthDate)/31557600000);
            acc[age] = (acc[age] || 0) + 1;
            return acc;
        }, {});

        const salaryData = initialPeople.initialPeople.reduce((acc, person) => {
            acc[person.job.salary] = (acc[person.job.salary] || 0) + 1;
            return acc;
        }, {});

        setChartData({
            sex: {
                labels: Object.keys(sexData),
                datasets: [{
                    label: 'Распределение по полу',
                    data: Object.values(sexData),
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                }],
            },
            age: {
                labels: Object.keys(ageData),
                datasets: [{
                    label: 'Распределение по возрасту',
                    data: Object.values(ageData),
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                }],
            },
            salary: {
                labels: Object.keys(salaryData),
                datasets: [{
                    label: 'Рапределение по зарплате',
                    data: Object.values(salaryData),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }],
            },
        });
    }, [initialPeople]);

    return (
        <div className="main-page-container">
            <div className="sex-distribution-container">
                <Pie className="sex-distribution-pie" data={chartData.sex}/>
                <div className="sex-distribution-content">
                    Распределение по полу:
                    <p>Мужчин: {Object.values(sexData)[0]}</p>
                    <p>Женщин: {Object.values(sexData)[1]}</p>
                </div>
            </div>

            <h2>Распределение по возрасту</h2>
            <Bar data={chartData.age}/>

            <h2>Рапределение по зарплате</h2>
            <Line data={chartData.salary}/>
        </div>
    );
}


export default MainPage;


/*import React, { useState, useEffect } from 'react';
import { BarChart, LineChart, PieChart } from 'react-chartjs-2';

const PeopleDataChart = ({ peopleData }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const genderData = peopleData.reduce((acc, person) => {
      acc[person.gender] = (acc[person.gender] || 0) + 1;
      return acc;
    }, {});

    const ageData = peopleData.reduce((acc, person) => {
      acc[person.age] = (acc[person.age] || 0) + 1;
      return acc;
    }, {});

    const salaryData = peopleData.reduce((acc, person) => {
      acc[person.salary] = (acc[person.salary] || 0) + 1;
      return acc;
    }, {});

    setChartData({
      gender: {
        labels: Object.keys(genderData),
        datasets: [{
          label: 'Gender Distribution',
          data: Object.values(genderData),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        }],
      },
      age: {
        labels: Object.keys(ageData),
        datasets: [{
          label: 'Age Distribution',
          data: Object.values(ageData),
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        }],
      },
      salary: {
        labels: Object.keys(salaryData),
        datasets: [{
          label: 'Salary Distribution',
          data: Object.values(salaryData),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
    });
  }, [peopleData]);

  return (
    <div>
      <h2>Gender Distribution</h2>
      <PieChart data={chartData.gender} />

      <h2>Age Distribution</h2>
      <BarChart data={chartData.age} />

      <h2>Salary Distribution</h2>
      <LineChart data={chartData.salary} />
    </div>
  );
};

export default PeopleDataChart;
*/