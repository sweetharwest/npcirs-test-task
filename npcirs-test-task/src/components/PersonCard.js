import React from 'react';

const PersonCard = ({ person }) => {
    return (
        <div>
            <h2>{person.person}</h2>
            <div>
                <h3>Личная информация</h3>
                <p>Дата рождения: {person.birthdate}</p>
                <p>Адрес проживания: {person.address}</p>
            </div>
            <div>
                <h3>Члены семьи</h3>
                <ul>
                    {person.familyMembers.map((member, index) => (
                        <li key={index}>
                            {member.name} - {member.relation}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Добавьте другие разделы по необходимости */}
        </div>
    );
};

export default PersonCard;