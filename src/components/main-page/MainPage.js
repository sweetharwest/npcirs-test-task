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
    const [ageData, setAgeData] = useState({});
    const [salaryData, setSalaryData] = useState({});

    useEffect(() => {
        const sexData = initialPeople.initialPeople.reduce((acc, person) => {
            acc[person.personalInformation.sex] = (acc[person.personalInformation.sex] || 0) + 1;
            return acc;
        }, {});
        setSexData(sexData);

        let sumAge = 0;
        let count = 0;
        let minAge = 100;
        let maxAge = 0;

        const ageData = initialPeople.initialPeople.reduce((acc, person) => {
            let age = Math.floor((new Date() - person.personalInformation.birthDate)/31557600000);
            acc[age] = (acc[age] || 0) + 1;
            sumAge += age;
            count++;
            minAge = age < minAge ? age : minAge;
            maxAge = age > maxAge ? age : maxAge;
            return acc;
        }, {});
        setAgeData({sumAge, count, minAge, maxAge});

        let sumSalary = 0;
        count = 0;
        let minSalary = 10000000;
        let maxSalary = 0;

        const salaryData = initialPeople.initialPeople.reduce((acc, person) => {
            acc[person.job.salary] = (acc[person.job.salary] || 0) + 1;
            sumSalary += person.job.salary;
            count++;
            minSalary = person.job.salary < minSalary ? person.job.salary : minSalary;
            maxSalary = person.job.salary > maxSalary ? person.job.salary : maxSalary;
            return acc;
        }, {});
        setSalaryData({sumSalary, count, minSalary, maxSalary});

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
        <div className="main-page">
            <div className="main-page-container">
                <div className="first-distribution-container">
                    <div className="count-people">
                        <h1>{ageData.count}</h1>
                        <p>Общее количество людей</p>
                    </div>
                    <div className="sex-distribution-container">
                        <Pie className="sex-distribution-pie" data={chartData.sex}/>
                        <div className="sex-distribution-content">
                            <div className="sex-distribution-content-body">
                                <h1>{Object.values(sexData)[0]}</h1>
                                <p>мужчин</p>
                                <h2>{Object.values(sexData)[1]}</h2>
                                <p>женщин</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="age-distribution-container">
                    <div className="age-distribution-content">
                        <h1>{ageData.sumAge / ageData.count}</h1>
                        <p>средний возраст</p>
                        <h1>{ageData.minAge}</h1>
                        <p>наименьший возраст</p>
                        <h1>{ageData.maxAge}</h1>
                        <p>наибольший возраст</p>
                    </div>
                    <Bar className="age-distribution-bar" data={chartData.age}/>
                </div>


                <div className="salary-distribution-container">
                    <Line className="salary-distribution-line" data={chartData.salary}/>
                    <div className="salary-distribution-content">
                        <h1>{salaryData.sumSalary / salaryData.count}</h1>
                        <p>средняя зарплата</p>
                        <h1>{salaryData.minSalary}</h1>
                        <p>наименьшая зарплата</p>
                        <h1>{salaryData.maxSalary}</h1>
                        <p>наибольшая зарплата</p>
                    </div>
                </div>
            </div>
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