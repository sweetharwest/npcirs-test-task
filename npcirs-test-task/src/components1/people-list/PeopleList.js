import React, { useState } from 'react';
import data from '../data';
import './PeopleList.css';

const PeopleList = () => {
    const [people, setPeople] = useState(data);
    const [editing, setEditing] = useState(null);

    const toggleEdit = (person) => {
        setEditing(person.id);
    };

    const handleSave = (person) => {
        const updatedPeople = people.map((p) => (p.id === person.id ? person : p));
        setPeople(updatedPeople);
        setEditing(null);
    };

    return (
        <div className="people-list">
            {people.map((person) => (
                <div key={person.id} className="person-card">
                    <h2>{person.fio}</h2>
                    <p>Дата рождения: {new Date(person.birthDate).toLocaleDateString()}</p>
                    {editing === person.id ? (
                        <>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label>
                                    ФИО:
                                    <input type="text" defaultValue={person.fio} onChange={(e) => (person.fio = e.target.value)} />
                                </label>
                                <label>
                                    Дата рождения:
                                    <input type="date" defaultValue={person.birthDate} onChange={(e) => (person.birthDate = e.target.value)} />
                                </label>
                                <button type="submit" onClick={() => handleSave(person)}>Сохранить</button>
                            </form>
                        </>
                    ) : (
                        <button onClick={() => toggleEdit(person)}>Редактировать</button>
                    )}
                    <hr />
                    <h3>Дополнительная информация</h3>
                    <p>Адрес: {person.address}</p>
                    <p>Телефон: {person.phone}</p>
                    <p>Email: {person.email}</p>
                </div>
            ))}
        </div>
    );
};

export default PeopleList;