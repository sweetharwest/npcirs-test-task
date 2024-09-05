
export const getDashboardData = async () => {
    const data = [
        { name: "Январь", показатель1: 4000, показатель2: 2500 },
        { name: "Февраль", показатель1: 3000, показатель2: 3500 },
        { name: "Март", показатель1: 5000, показатель2: 2800 },
        { name: "Апрель", показатель1: 4500, показатель2: 3200 },
        { name: "Май", показатель1: 6000, показатель2: 4000 },
        { name: "Июнь", показатель1: 5500, показатель2: 3800 },
        { name: "Июль", показатель1: 7000, показатель2: 4500 },
        { name: "Август", показатель1: 6500, показатель2: 4200 },
        { name: "Сентябрь", показатель1: 5800, показатель2: 3900 },
        { name: "Октябрь", показатель1: 4800, показатель2: 3600 },
        { name: "Ноябрь", показатель1: 4200, показатель2: 3300 },
        { name: "Декабрь", показатель1: 4500, показатель2: 3000 },
    ];
    //const response = await axios.get('/api/dashboard');
    //return response.data;
    return data;
};

export  const getParameters = () => {
    const categoryParameter = ['Личная информация', 'Образование',   'Контакты',  'Работа']

    const parameters = [
        ['ФИО',               'Университет',   'Телефон',   'Должность'],
        ['Дата рождения',     'Специальность', 'Email',     'Категория'],
        ['Адрес',             'Год выпуска',   'Telegram',  'Зарплата'],
        ['Пол',               'Уровень',       '',          'Стек']
    ]

    const data = {
        categoryParameter: categoryParameter,
        parameters: parameters
    }

    return data;
}

export const getPerson = () => {
    const person = {
        personalInformation: {
            fio: "Трушин Андрей Сергеевич",
            birthDate: new Date('2002-03-13'),
            address: "Зеленоград, Юности 15",
        },
        education: {
            university: 'МИЭТ',
            specialization: 'Программная инженерия',
            yearGraduation: 2024,
            level: 'Бакалавриат'
        },
        contacts: {
            phoneNumber: '+7937407206',
            email: 'truan35@yndex.ru',
            telegram: 'sweetharvest'
        },
        job: {
            position: 'frontend developer',
            category: 'junior',
            salary: 70000,
            stack: ['html', 'css', 'js', 'react'],
        }
    }

    return person;
}

export const getPeople = () => {
    const people = [
        {
            id: 1,
            personalInformation: {
                fio: "Трушин Андрей Сергеевич",
                birthDate: new Date('2002-03-13'),
                address: "Зеленоград, Юности 15",
                sex: "Мужской"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79374072006',
                email: 'truan35@yndex.ru',
                telegram: 'sweetharvest'
            },
            job: {
                position: 'frontend developer',
                category: 'junior',
                salary: 70000,
                stack: ['html', 'css', 'js', 'react'],
            }
        },
        {   id: 2,
            personalInformation: {
                fio: "Трушин Андрей Сергеевич",
                birthDate: new Date('2000-03-13'),
                address: "Зеленоград, Юности 15",
                sex: "Мужской"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+7937407206',
                email: 'truan35@yndex.ru',
                telegram: null
            },
            job: {
                position: 'frontend developer',
                category: 'junior',
                salary: 70000,
                stack: ['html', 'css', 'js', 'react'],
            }
        },
        {
            id: 3,
            personalInformation: {
                fio: "Трушин Андрей Сергеевич",
                birthDate: new Date('2020-03-13'),
                address: "Зеленоград, Юности 15",
                sex: "Мужской"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+7937407206',
                email: 'truan35@yndex.ru',
                telegram: 'sweetharvest'
            },
            job: {
                position: 'frontend developer',
                category: 'junior',
                salary: 70000,
                stack: ['html', 'css', 'js', 'react'],
            }
        },
        {
            id: 4,
            personalInformation: {
                fio: "Трушин Андрей Сергеевич",
                birthDate: new Date('2002-03-13'),
                address: "Зеленоград, Юности 15",
                sex: "Мужской"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+7937407206',
                email: 'truan35@yndex.ru',
                telegram: 'sweetharvest'
            },
            job: {
                position: 'frontend developer',
                category: 'junior',
                salary: 70000,
                stack: ['html', 'css', 'js', 'react'],
            }
        },
        {
            id: 5,
            personalInformation: {
                fio: "Трушин Андрей Сергеевич",
                birthDate: new Date('2002-03-13'),
                address: "Зеленоград, Юности 15",
                sex: "Мужской"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+7937407206',
                email: 'truan35@yndex.ru',
                telegram: 'sweetharvest'
            },
            job: {
                position: 'frontend developer',
                category: 'junior',
                salary: 70000,
                stack: ['html', 'css', 'js', 'react'],
            }
        },
        {
            id: 6,
            personalInformation: {
                fio: "Трушин Андрей Сергеевич",
                birthDate: new Date('2002-03-13'),
                address: "Зеленоград, Юности 15",
                sex: "Мужской"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+7937407206',
                email: 'truan35@yndex.ru',
                telegram: 'sweetharvest'
            },
            job: {
                position: 'frontend developer',
                category: 'junior',
                salary: 70000,
                stack: ['html', 'css', 'js', 'react'],
            }
        },
        {
            id: 7,
            personalInformation: {
                fio: "Трушин Андрей Сергеевич",
                birthDate: new Date('2002-03-13'),
                address: "Зеленоград, Юности 15",
                sex: "Мужской"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+7937407206',
                email: 'truan35@yndex.ru',
                telegram: 'sweetharvest'
            },
            job: {
                position: 'frontend developer',
                category: 'junior',
                salary: 70000,
                stack: ['html', 'css', 'js', 'react'],
            }
        },
        {
            id: 8,
            personalInformation: {
                fio: "Трушин Андрей Сергеевич",
                birthDate: new Date('2002-03-13'),
                address: "Зеленоград, Юности 15",
                sex: "Мужской"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+7937407206',
                email: 'truan35@yndex.ru',
                telegram: 'sweetharvest'
            },
            job: {
                position: 'frontend developer',
                category: 'junior',
                salary: 70000,
                stack: ['html', 'css', 'js', 'react'],
            }
        },
        {
            id: 9,
            personalInformation: {
                fio: "Трушина Елена Петровна",
                birthDate: new Date('1972-05-12'),
                address: "Пенза, Московская 109А",
                sex: "Женский"
            },
            education: {
                university: 'МИЭТ',
                specialization: 'Программная инженерия',
                yearGraduation: 2024,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79273687295',
                email: 'alenatru@mail.ru',
                telegram: 'sweetharvest'
            },
            job: {
                position: 'accountant',
                category: 'middle',
                salary: 40000,
                stack: ['1c'],
            }
        }
    ]

    return people;
}