import React from 'react';
import { getPerson } from '../services/api';

const Card = () => {
    const person = getPerson();

    return (
        <div>
            <h2>{person.personalInformation.fio}</h2>
            <div>
                <h3>Личная информация</h3>
                <p>Адрес проживания: {person.personalInformation.address}</p>
                <p>Дата рождения: {person.personalInformation.birthDate.toString()}</p>
            </div>
            <div>
                <h3>education</h3>
                <p>university {person.education.university}</p>
                <p>specialization {person.education.specialization}</p>
                <p>yearGraduation {person.education.yearGraduation}</p>
                <p>level {person.education.level}</p>
            </div>
            <div>
                <h3>contacts</h3>
                <p>phoneNumber {person.contacts.phoneNumber}</p>
                <p>email {person.contacts.email}</p>
                <p>telegram {person.contacts.telegram}</p>
            </div>
            <div>
                <h3>job</h3>
                <p>position {person.job.position}</p>
                <p>category {person.job.category}</p>
                <p>salary {person.job.salary}</p>
                <p>stack {person.job.stack}</p>
            </div>
        </div>
    );
};
/*const card = () => {
    const person = getPerson();

    return (
        <div>
            <h2>{person.personalInformation.fio}</h2>
            <div>
                <h3>Личная информация</h3>
                <p>Дата рождения: {person.personalInformation.birthDate}</p>
                <p>Адрес проживания: {person.personalInformation.address}</p>
            </div>
            <div>
                <h3>education</h3>
                <p>university {person.education.university}</p>
                <p>specialization {person.education.specialization}</p>
                <p>yearGraduation {person.education.yearGraduation}</p>
                <p>level {person.education.level}</p>
            </div>
            <div>
                <h3>contacts</h3>
                <p>phoneNumber {person.contacts.phoneNumber}</p>
                <p>email {person.contacts.email}</p>
                <p>telegram {person.contacts.telegram}</p>
            </div>
            <div>
                <h3>job</h3>
                <p>position {person.job.position}</p>
                <p>category {person.job.category}</p>
                <p>salary {person.job.salary}</p>
                <p>stack {person.job.stack}</p>
            </div>
        </div>
    );
};*/

export default Card;