
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
            fio: "Трушин Александр Сергеевич",
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
    /*const people = [
        {
            id: 1,
            personalInformation: {
                fio: "Трушин Александр Сергеевич",
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
    ]*/

    return [
        {
            id: 1,
            personalInformation: {
                fio: "Трушин Александр Сергеевич",
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
        {
            id: 2,
            personalInformation: {
                fio: "Иванов Иван Иванович",
                birthDate: new Date('1995-05-20'),
                address: "Москва, Ленина 10",
                sex: "Мужской"
            },
            education: {
                university: 'МГУ',
                specialization: 'Физика',
                yearGraduation: 2017,
                level: 'Магистратура'
            },
            contacts: {
                phoneNumber: '+79261234567',
                email: 'ivanovii@mail.ru',
                telegram: 'ivanovii'
            },
            job: {
                position: 'scientist',
                category: 'senior',
                salary: 120000,
                stack: ['matlab', 'python'],
            }
        },
        {
            id: 3,
            personalInformation: {
                fio: "Сидорова Анна Петровна",
                birthDate: new Date('1990-11-30'),
                address: "Санкт-Петербург, Невский проспект 25",
                sex: "Женский"
            },
            education: {
                university: 'СПбГУ',
                specialization: 'История',
                yearGraduation: 2012,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79161234568',
                email: 'sidorovaap@example.com',
                telegram: 'sidorovaap'
            },
            job: {
                position: 'teacher',
                category: 'middle',
                salary: 80000,
                stack: ['history', 'pedagogy'],
            }
        },
        {
            id: 4,
            personalInformation: {
                fio: "Кузнецов Дмитрий Андреевич",
                birthDate: new Date('1988-07-15'),
                address: "Екатеринбург, Ленина 50",
                sex: "Мужской"
            },
            education: {
                university: 'УрФУ',
                specialization: 'Электроника',
                yearGraduation: 2010,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79251234569',
                email: 'kuznetsovda@example.com',
                telegram: 'kuznetsovda'
            },
            job: {
                position: 'engineer',
                category: 'senior',
                salary: 110000,
                stack: ['c++', 'embedded'],
            }
        },
        {
            id: 5,
            personalInformation: {
                fio: "Петрова Ольга Викторовна",
                birthDate: new Date('1999-02-25'),
                address: "Новосибирск, Красный проспект 100",
                sex: "Женский"
            },
            education: {
                university: 'НГУ',
                specialization: 'Математика',
                yearGraduation: 2021,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79331234560',
                email: 'petrovaov@example.com',
                telegram: 'petrovaov'
            },
            job: {
                position: 'data analyst',
                category: 'junior',
                salary: 75000,
                stack: ['python', 'sql'],
            }
        },
        {
            id: 6,
            personalInformation: {
                fio: "Морозов Алексей Николаевич",
                birthDate: new Date('1993-06-10'),
                address: "Казань, Баумана 17",
                sex: "Мужской"
            },
            education: {
                university: 'КФУ',
                specialization: 'Химия',
                yearGraduation: 2015,
                level: 'Магистратура'
            },
            contacts: {
                phoneNumber: '+79251234561',
                email: 'morozovan@example.com',
                telegram: 'morozovan'
            },
            job: {
                position: 'chemist',
                category: 'middle',
                salary: 90000,
                stack: ['lab', 'research'],
            }
        },
        {
            id: 7,
            personalInformation: {
                fio: "Фёдорова Мария Ивановна",
                birthDate: new Date('1985-09-05'),
                address: "Ростов-на-Дону, Садовая 45",
                sex: "Женский"
            },
            education: {
                university: 'ЮФУ',
                specialization: 'Биология',
                yearGraduation: 2007,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79331234562',
                email: 'fedorovami@example.com',
                telegram: 'fedorovami'
            },
            job: {
                position: 'biologist',
                category: 'senior',
                salary: 100000,
                stack: ['research', 'lab'],
            }
        },
        {
            id: 8,
            personalInformation: {
                fio: "Васильев Сергей Павлович",
                birthDate: new Date('1991-12-12'),
                address: "Владивосток, Океанский проспект 33",
                sex: "Мужской"
            },
            education: {
                university: 'ДВФУ',
                specialization: 'Экономика',
                yearGraduation: 2013,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79261234563',
                email: 'vasilievsp@example.com',
                telegram: 'vasilievsp'
            },
            job: {
                position: 'economist',
                category: 'middle',
                salary: 85000,
                stack: ['finance', 'analysis'],
            }
        },
        {
            id: 9,
            personalInformation: {
                fio: "Григорьев Николай Юрьевич",
                birthDate: new Date('1998-08-18'),
                address: "Самара, Московское шоссе 77",
                sex: "Мужской"
            },
            education: {
                university: 'СГУ',
                specialization: 'Информатика',
                yearGraduation: 2020,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79331234564',
                email: 'grigoryevny@example.com',
                telegram: 'grigoryevny'
            },
            job: {
                position: 'backend developer',
                category: 'junior',
                salary: 70000,
                stack: ['node.js', 'express', 'mongodb'],
            }
        },
        {
            id: 10,
            personalInformation: {
                fio: "Дмитриева Елена Сергеевна",
                birthDate: new Date('1996-04-22'),
                address: "Красноярск, Мира 55",
                sex: "Женский"
            },
            education: {
                university: 'КГУ',
                specialization: 'Филология',
                yearGraduation: 2018,
                level: 'Магистратура'
            },
            contacts: {
                phoneNumber: '+79251234565',
                email: 'dmitrievaes@example.com',
                telegram: 'dmitrievaes'
            },
            job: {
                position: 'editor',
                category: 'middle',
                salary: 80000,
                stack: ['editing', 'writing'],
            }
        },
        {
            id: 11,
            personalInformation: {
                fio: "Ковалёв Андрей Викторович",
                birthDate: new Date('1987-11-11'),
                address: "Уфа, Октября 90",
                sex: "Мужской"
            },
            education: {
                university: 'БГУ',
                specialization: 'Геология',
                yearGraduation: 2009,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79331234566',
                email: 'kovalevav@example.com',
                telegram: 'kovalevav'
            },
            job: {
                position: 'geologist',
                category: 'senior',
                salary: 105000,
                stack: ['fieldwork', 'analysis'],
            }
        },
        {
            id: 12,
            personalInformation: {
                fio: "Михайлова Наталья Дмитриевна",
                birthDate: new Date('1994-03-03'),
                address: "Воронеж, Плехановская 20",
                sex: "Женский"
            },
            education: {
                university: 'ВГУ',
                specialization: 'Психология',
                yearGraduation: 2016,
                level: 'Магистратура'
            },
            contacts: {
                phoneNumber: '+79251234567',
                email: 'mikhailovand@example.com',
                telegram: 'mikhailovand'
            },
            job: {
                position: 'psychologist',
                category: 'middle',
                salary: 85000,
                stack: ['counseling', 'therapy'],
            }
        },
        {
            id: 13,
            personalInformation: {
                fio: "Романов Виктор Алексеевич",
                birthDate: new Date('1997-07-07'),
                address: "Пермь, Комсомольский проспект 40",
                sex: "Мужской"
            },
            education: {
                university: 'ПГНИУ',
                specialization: 'Журналистика',
                yearGraduation: 2019,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79331234568',
                email: 'romanovva@example.com',
                telegram: 'romanovva'
            },
            job: {
                position: 'journalist',
                category: 'junior',
                salary: 70000,
                stack: ['writing', 'reporting'],
            }
        },
        {
            id: 14,
            personalInformation: {
                fio: "Смирнова Ирина Александровна",
                birthDate: new Date('1992-02-02'),
                address: "Омск, Ленина 60",
                sex: "Женский"
            },
            education: {
                university: 'ОмГУ',
                specialization: 'Медицина',
                yearGraduation: 2014,
                level: 'Магистратура'
            },
            contacts: {
                phoneNumber: '+79251234569',
                email: 'smirnovaia@example.com',
                telegram: 'smirnovaia'
            },
            job: {
                position: 'doctor',
                category: 'middle',
                salary: 95000,
                stack: ['diagnosis', 'treatment'],
            }
        },
        {
            id: 15,
            personalInformation: {
                fio: "Киселёв Пётр Олегович",
                birthDate: new Date('1989-08-08'),
                address: "Томск, Кирова 10",
                sex: "Мужской"
            },
            education: {
                university: 'ТГУ',
                specialization: 'Архитектура',
                yearGraduation: 2011,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79331234570',
                email: 'kiselevpo@example.com',
                telegram: 'kiselevpo'
            },
            job: {
                position: 'architect',
                category: 'senior',
                salary: 115000,
                stack: ['design', 'cad'],
            }
        },
        {
            id: 16,
            personalInformation: {
                fio: "Новикова Екатерина Павловна",
                birthDate: new Date('1990-01-01'),
                address: "Тула, Советская 30",
                sex: "Женский"
            },
            education: {
                university: 'ТулГУ',
                specialization: 'Право',
                yearGraduation: 2012,
                level: 'Магистратура'
            },
            contacts: {
                phoneNumber: '+79251234571',
                email: 'novikovaep@example.com',
                telegram: 'novikovaep'
            },
            job: {
                position: 'lawyer',
                category: 'middle',
                salary: 90000,
                stack: ['legal', 'contracts'],
            }
        },
        {
            id: 17,
            personalInformation: {
                fio: "Орлов Михаил Сергеевич",
                birthDate: new Date('1995-09-09'),
                address: "Калининград, Советский проспект 15",
                sex: "Мужской"
            },
            education: {
                university: 'КГУ',
                specialization: 'Социология',
                yearGraduation: 2017,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79331234572',
                email: 'orlovms@example.com',
                telegram: 'orlovms'
            },
            job: {
                position: 'sociologist',
                category: 'junior',
                salary: 65000,
                stack: ['research', 'analysis'],
            }
        },
        {
            id: 18,
            personalInformation: {
                fio: "Борисова Ольга Ивановна",
                birthDate: new Date('1993-04-04'),
                address: "Челябинск, Победы 25",
                sex: "Женский"
            },
            education: {
                university: 'ЮУрГУ',
                specialization: 'Лингвистика',
                yearGraduation: 2015,
                level: 'Магистратура'
            },
            contacts: {
                phoneNumber: '+79251234573',
                email: 'borisovaoi@example.com',
                telegram: 'borisovaoi'
            },
            job: {
                position: 'translator',
                category: 'middle',
                salary: 80000,
                stack: ['english', 'german'],
            }
        },
        {
            id: 19,
            personalInformation: {
                fio: "Зайцев Артём Евгеньевич",
                birthDate: new Date('1991-10-10'),
                address: "Иркутск, Байкальская 50",
                sex: "Мужской"
            },
            education: {
                university: 'ИГУ',
                specialization: 'Механика',
                yearGraduation: 2013,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79331234574',
                email: 'zaitsevae@example.com',
                telegram: 'zaitsevae'
            },
            job: {
                position: 'mechanic',
                category: 'senior',
                salary: 100000,
                stack: ['cad', 'maintenance'],
            }
        },
        {
            id: 20,
            personalInformation: {
                fio: "Соколова Анастасия Васильевна",
                birthDate: new Date('1999-12-12'),
                address: "Кемерово, Ленина 75",
                sex: "Женский"
            },
            education: {
                university: 'КемГУ',
                specialization: 'Философия',
                yearGraduation: 2021,
                level: 'Бакалавриат'
            },
            contacts: {
                phoneNumber: '+79251234575',
                email: 'sokolovaav@example.com',
                telegram: 'sokolovaav'
            },
            job: {
                position: 'philosopher',
                category: 'junior',
                salary: 70000,
                stack: ['writing', 'teaching'],
            }
        }
    ];
}