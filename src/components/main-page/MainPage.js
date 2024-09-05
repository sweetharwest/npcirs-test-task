import React, { useState, useEffect } from 'react';
import { BarChart, LineChart, Pie } from 'react-chartjs-2';
import './MainPage.css';

const MainPage = (initialPeople) => {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        /*const sexData = initialPeople.initialPeople.map(person => person.personalInformation.sex).reduce((acc, sex) => {
            acc[sex] = (acc[sex] || 0) + 1;
            return acc;
        }, {});*/

        const sexData = initialPeople.initialPeople.reduce((acc, person) => {
            acc[person.personalInformation.sex] = (acc[person.personalInformation.sex] || 0) + 1;
            return acc;
        }, {});

        alert(Object.keys(sexData));
        alert(Object.values(sexData));

        //alert(Object.keys(initialPeople));
        /*const sexData = penis.map(person => person.personalInformation.sex).reduce((acc, sex) => {
            acc[sex] = (acc[sex] || 0) + 1;
            return acc;
        }, {});*/


        /*const ageData = initialPeople.reduce((acc, person) => {
            acc[person.personalInformation.age] = (acc[person.age] || 0) + 1;
            return acc;
        }, {});

        const salaryData = peopleData.reduce((acc, person) => {
            acc[person.salary] = (acc[person.salary] || 0) + 1;
            return acc;
        }, {});*/

        setChartData({
            sex: {
                labels: ['a', 'b'],
                datasets: [{
                    label: 'Sex Distribution',
                    data: [3, 4],
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
            /*age: {
                labels: Object.keys(ageData),
                datasets: [{
                    label: 'Age Distribution',
                    data: Object.values(ageData),
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                }],
            },*/
            /*salary: {
                labels: Object.keys(salaryData),
                datasets: [{
                    label: 'Salary Distribution',
                    data: Object.values(salaryData),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }],
            },*/
        });
    }, [initialPeople]);

    return (
        <div>
            <h2>Gender Distribution</h2>
            <Pie data={chartData.sex} />

            {/*<h2>Age Distribution</h2>
            <BarChart data={chartData.age} />

            <h2>Salary Distribution</h2>
            <LineChart data={chartData.salary} />*/}
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