const semester4Subjects = [
  'Разработка игр на JavaScript',
  'Правоведение, правовые основы профессиональной деятельности',
  'Инженерная и компьютерная графика',
  'Техническая физика',
  'Производственная практика',
  'Основы научных исследований (в соответствии с целями устойчивого развития)',
  'Физическое воспитание'
];

export const students = [
  {
    id: '1',
    slug: 'akbaraliev-ernis',
    fullName: 'Акбаралиев Эрнис',
    role: 'Фулстек разработчик',
    bio: 'Участвует в разработке учебных сервисов и защищённых веб-приложений.',
    avatar: 'https://avatars.githubusercontent.com/u/9919?v=4',
    skills: ['Next.js', 'TypeScript', 'Supabase'],
    interests: ['Кибербезопасность', 'UI/UX'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 001',
      email: 'ernis.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: false
    },
    projects: [
      {
        title: 'Портал цифровой кафедры',
        description: 'Информационная система кафедры ПИиИБ для студентов и преподавателей.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '2',
    slug: 'amanova-alfiya',
    fullName: 'Аманова Альфия',
    role: 'UX дизайнер',
    bio: 'Создаёт пользовательские сценарии и прототипы для сервисов ОшГУ.',
    avatar: 'https://avatars.githubusercontent.com/u/583231?v=4',
    skills: ['Figma', 'Дизайн-системы', 'UX'],
    interests: ['Доступность', 'Образование'],
    socials: {
      dribbble: 'https://dribbble.com'
    },
    contact: {
      phone: '+996 555 010 002',
      email: 'alfiya.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: true
    },
    projects: [
      {
        title: 'Визуальная система МФТИТ',
        description: 'UI-кит для сайтов и презентаций Института МФТИТ.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '3',
    slug: 'apiev-nurtilek',
    fullName: 'Апиев Нуртилек',
    role: 'Backend инженер',
    bio: 'Проектирует надёжные API и модели данных для учебных проектов.',
    avatar: 'https://avatars.githubusercontent.com/u/810438?v=4',
    skills: ['PostgreSQL', 'Supabase', 'Node.js'],
    interests: ['Инженерия данных', 'Облачные технологии'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 003',
      email: 'nurtilek.aub124@oshsu.kg',
      phonePublic: true,
      emailPublic: false
    },
    projects: [
      {
        title: 'API для учебных кабинетов',
        description: 'Сервис для хранения расписаний и прогресса студентов.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '4',
    slug: 'asilov-pirmambek',
    fullName: 'Асилов Пирмамбек',
    role: 'Frontend инженер',
    bio: 'Разрабатывает интерфейсы для внутренних сервисов кафедры ПИиИБ.',
    avatar: 'https://avatars.githubusercontent.com/u/1060?v=4',
    skills: ['React', 'Tailwind CSS', 'Доступность'],
    interests: ['EdTech', 'Мобильный подход'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 004',
      email: 'pirmambek.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: false
    },
    projects: [
      {
        title: 'Личный кабинет студента',
        description: 'Интерфейс профиля и обучения для студентов АУБ-1-24.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '5',
    slug: 'bazarbaev-umot',
    fullName: 'Базарбаев Умот',
    role: 'Аналитик данных',
    bio: 'Создаёт отчёты и визуализации для учебных проектов.',
    avatar: 'https://avatars.githubusercontent.com/u/6128107?v=4',
    skills: ['Аналитика', 'Дашборды', 'SQL'],
    interests: ['Визуализация данных', 'Продуктовое мышление'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 005',
      email: 'umot.aub124@oshsu.kg',
      phonePublic: true,
      emailPublic: true
    },
    projects: [
      {
        title: 'Insight ОшГУ',
        description: 'Дашборд академической успеваемости и вовлечённости.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '6',
    slug: 'zhamgyrchy-kyzy-aitolkun',
    fullName: 'Жамгырчы кызы Айтолкун',
    role: 'QA инженер',
    bio: 'Тестирует образовательные сервисы и процессы автоматизации.',
    avatar: 'https://avatars.githubusercontent.com/u/517119?v=4',
    skills: ['QA', 'Playwright', 'Тест-дизайн'],
    interests: ['Автоматизация', 'UX'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 006',
      email: 'aitolkun.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: true
    },
    projects: [
      {
        title: 'Лаборатория качества',
        description: 'Система контроля качества для учебных сервисов кафедры.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '7',
    slug: 'zhumabaeva-albina',
    fullName: 'Жумабайова Альбина',
    role: 'Контент-менеджер',
    bio: 'Ведёт новостные обновления и публичные коммуникации группы.',
    avatar: 'https://avatars.githubusercontent.com/u/196?v=4',
    skills: ['Контент', 'SMM', 'Коммуникации'],
    interests: ['События', 'PR'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 007',
      email: 'albina.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: false
    },
    projects: [
      {
        title: 'Лента новостей АУБ-1-24',
        description: 'Сбор и публикация событий группы.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '8',
    slug: 'zakirova-nursezim-zamirbekovna',
    fullName: 'Закирова Нурсезим Замирбековна',
    role: 'Frontend инженер',
    bio: 'Разрабатывает адаптивные интерфейсы для портфолио группы.',
    avatar: 'https://avatars.githubusercontent.com/u/176?v=4',
    skills: ['React', 'Tailwind CSS', 'Анимации'],
    interests: ['Мобильные интерфейсы', 'UI/UX'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 008',
      email: 'nursezim.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: true
    },
    projects: [
      {
        title: 'Портфолио группы',
        description: 'Главная страница и витрина проектов группы.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '9',
    slug: 'israilova-aisha',
    fullName: 'Исраилова Айша',
    role: 'UI дизайнер',
    bio: 'Создаёт визуальные материалы для сайта кафедры и проектов студентов.',
    avatar: 'https://avatars.githubusercontent.com/u/650?v=4',
    skills: ['Figma', 'Иллюстрации', 'UI'],
    interests: ['Брендинг', 'Доступность'],
    socials: {
      dribbble: 'https://dribbble.com'
    },
    contact: {
      phone: '+996 555 010 009',
      email: 'aisha.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: false
    },
    projects: [
      {
        title: 'Гайдлайн ОшГУ',
        description: 'Визуальные правила оформления материалов кафедры.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '10',
    slug: 'kamchibekova-meerim-abdibekovna',
    fullName: 'Камчибекова Мээрим Абдибековна',
    role: 'Project менеджер',
    bio: 'Координирует команду и планирует учебные проекты.',
    avatar: 'https://avatars.githubusercontent.com/u/818?v=4',
    skills: ['Scrum', 'Коммуникации', 'Документация'],
    interests: ['Управление проектами', 'Agile'],
    socials: {
      linkedin: 'https://linkedin.com'
    },
    contact: {
      phone: '+996 555 010 010',
      email: 'meerim.aub124@oshsu.kg',
      phonePublic: true,
      emailPublic: true
    },
    projects: [
      {
        title: 'Карта проектов АУБ-1-24',
        description: 'Планирование и трекинг задач группы.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '11',
    slug: 'karybek-kyzy-adinai',
    fullName: 'Карыбек кызы Адинай',
    role: 'Frontend инженер',
    bio: 'Разрабатывает интерфейсы и поддерживает дизайн-систему.',
    avatar: 'https://avatars.githubusercontent.com/u/925?v=4',
    skills: ['React', 'Tailwind CSS', 'UI'],
    interests: ['UX', 'Интерфейсы'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 011',
      email: 'adinai.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: false
    },
    projects: [
      {
        title: 'Компонентная библиотека',
        description: 'Набор UI-компонентов для сервисов МФТИТ.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '12',
    slug: 'kushbakov-sydyk',
    fullName: 'Кушбаков Сыдык',
    role: 'DevOps инженер',
    bio: 'Настраивает CI/CD и инфраструктуру для проектов группы.',
    avatar: 'https://avatars.githubusercontent.com/u/928884?v=4',
    skills: ['CI/CD', 'Docker', 'Наблюдаемость'],
    interests: ['Облака', 'SRE'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 012',
      email: 'sydyk.aub124@oshsu.kg',
      phonePublic: true,
      emailPublic: true
    },
    projects: [
      {
        title: 'Центр деплоя',
        description: 'Автоматизация развертывания учебных сервисов.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '13',
    slug: 'mamatova-mirgul',
    fullName: 'Маматова Миргул',
    role: 'Исследователь',
    bio: 'Фокусируется на научных исследованиях и аналитике данных.',
    avatar: 'https://avatars.githubusercontent.com/u/789?v=4',
    skills: ['Научные исследования', 'Аналитика', 'SQL'],
    interests: ['Исследования', 'Data Science'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 013',
      email: 'mirgul.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: true
    },
    projects: [
      {
        title: 'Лаборатория устойчивого развития',
        description: 'Исследовательские проекты по устойчивому развитию.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '14',
    slug: 'omuraliev-eltilek',
    fullName: 'Омуралиев Элтилек',
    role: 'Backend инженер',
    bio: 'Отвечает за интеграции и безопасность данных.',
    avatar: 'https://avatars.githubusercontent.com/u/285?v=4',
    skills: ['Supabase', 'Безопасность', 'SQL'],
    interests: ['Кибербезопасность', 'Data'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 014',
      email: 'eltilek.aub124@oshsu.kg',
      phonePublic: true,
      emailPublic: false
    },
    projects: [
      {
        title: 'Сервис управления доступом',
        description: 'Ролевой контроль доступа для внутренних сервисов.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '15',
    slug: 'salieva-aikunduz-kabylovna',
    fullName: 'Салиева Айкундуз Кабыловна',
    role: 'Контент-аналитик',
    bio: 'Собирает данные и готовит аналитические материалы.',
    avatar: 'https://avatars.githubusercontent.com/u/362?v=4',
    skills: ['Контент', 'Аналитика', 'Исследования'],
    interests: ['Данные', 'Коммуникации'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 015',
      email: 'aikunduz.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: true
    },
    projects: [
      {
        title: 'База кейсов ОшГУ',
        description: 'Каталог кейсов и исследований кафедры.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '16',
    slug: 'turasanova-aielita',
    fullName: 'Турасанова Айэлита',
    role: 'Frontend инженер',
    bio: 'Поддерживает визуальный стиль сайта и интерактивные элементы.',
    avatar: 'https://avatars.githubusercontent.com/u/402?v=4',
    skills: ['React', 'Анимации', 'UI'],
    interests: ['Интерфейсы', 'UX'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 016',
      email: 'aielita.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: false
    },
    projects: [
      {
        title: 'Интерактивная галерея',
        description: 'Галерея поездок и мероприятий группы.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '17',
    slug: 'turdumamatov-kutman',
    fullName: 'Турдумаматов Кутман',
    role: 'Инженер по безопасности',
    bio: 'Анализирует риски и проводит аудит безопасности.',
    avatar: 'https://avatars.githubusercontent.com/u/153?v=4',
    skills: ['Аудит безопасности', 'Моделирование угроз', 'OWASP'],
    interests: ['Реагирование на инциденты', 'Соответствие требованиям'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 017',
      email: 'kutman.aub124@oshsu.kg',
      phonePublic: true,
      emailPublic: false
    },
    projects: [
      {
        title: 'Чек-лист безопасности АУБ',
        description: 'Контроль безопасности для проектов кафедры ПИиИБ.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '18',
    slug: 'tynybekova-aseema',
    fullName: 'Тыныбекова Асема',
    role: 'Маркетолог',
    bio: 'Продвигает проекты группы и взаимодействует с партнёрами.',
    avatar: 'https://avatars.githubusercontent.com/u/437?v=4',
    skills: ['Маркетинг', 'Коммуникации', 'PR'],
    interests: ['События', 'Брендинг'],
    socials: {
      linkedin: 'https://linkedin.com'
    },
    contact: {
      phone: '+996 555 010 018',
      email: 'asema.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: true
    },
    projects: [
      {
        title: 'Медиа-план АУБ-1-24',
        description: 'План коммуникаций и продвижения проектов группы.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '19',
    slug: 'khankeldieva-ainazik',
    fullName: 'Ханкелдиева Айназик',
    role: 'Data инженер',
    bio: 'Настраивает сбор и обработку данных для аналитики.',
    avatar: 'https://avatars.githubusercontent.com/u/508?v=4',
    skills: ['ETL', 'SQL', 'Аналитика'],
    interests: ['Данные', 'Инженерия'],
    socials: {
      github: 'https://github.com'
    },
    contact: {
      phone: '+996 555 010 019',
      email: 'ainazik.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: false
    },
    projects: [
      {
        title: 'Потоки данных',
        description: 'Сбор данных для мониторинга образовательных сервисов.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  },
  {
    id: '20',
    slug: 'sharipova-klara',
    fullName: 'Шарипова Клара',
    role: 'UI/UX дизайнер',
    bio: 'Формирует визуальные сценарии для сайта кафедры.',
    avatar: 'https://avatars.githubusercontent.com/u/673?v=4',
    skills: ['UI', 'Figma', 'UX'],
    interests: ['Интерфейсы', 'Доступность'],
    socials: {
      dribbble: 'https://dribbble.com'
    },
    contact: {
      phone: '+996 555 010 020',
      email: 'klara.aub124@oshsu.kg',
      phonePublic: false,
      emailPublic: true
    },
    projects: [
      {
        title: 'Карта пользовательского опыта',
        description: 'UX-карта для сервисов Института МФТИТ.',
        url: 'https://example.com',
        github: 'https://github.com'
      }
    ],
    semester: 4
  }
];

export const studentAccounts = students.map((student, index) => ({
  id: student.id,
  fullName: student.fullName,
  login: `aub124.${student.slug}@oshsu.kg`,
  tempPassword: `AUB124-${String(index + 1).padStart(2, '0')}!`,
  semester: student.semester
}));

export const semesterSubjects = {
  4: semester4Subjects
};

export const adminAccount = {
  login: 'admin.aub124@oshsu.kg',
  tempPassword: 'AdminAUB124!'
};

export const newsPosts = [
  {
    id: '1',
    title: 'Запуск официального портфолио группы АУБ-1-24',
    excerpt:
      'Новый цифровой ресурс демонстрирует достижения студентов ОшГУ и кафедры ПИиИБ.',
    content:
      'Группа АУБ-1-24 представила официальный портал, созданный на Next.js и Supabase. В нём собраны проекты, новости и планы студентов Института МФТИТ.',
    author: 'Администрация',
    category: 'Портфолио',
    date: '2025-02-12',
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    title: 'Неделя кибербезопасности на кафедре ПИиИБ',
    excerpt: 'Студенты провели воркшопы по безопасному коду и защите данных.',
    content:
      'В рамках Недели кибербезопасности студенты АУБ-1-24 организовали практические занятия, кейсы и демонстрации, посвящённые защите информационных систем.',
    author: 'Куратор группы',
    category: 'События',
    date: '2025-01-22',
    cover: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    title: 'Экскурсия в инновационную лабораторию ОшГУ',
    excerpt: 'Команда познакомилась с исследованиями в сфере данных и безопасности.',
    content:
      'Студенты посетили лабораторию инноваций, где изучили проекты по аналитике данных и информационной безопасности.',
    author: 'Студсовет',
    category: 'Исследования',
    date: '2024-12-05',
    cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '4',
    title: 'Победа в региональном хакатоне «Digital Osh»',
    excerpt: 'Проект группы занял первое место среди вузов региона.',
    content:
      'Команда АУБ-1-24 представила платформу мониторинга для университетских сервисов и получила грант на развитие.',
    author: 'Пресс-служба',
    category: 'Достижения',
    date: '2024-11-12',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
  }
];

export const trips = [
  {
    id: '1',
    title: 'Визит в центр обработки данных',
    location: 'Ош, Кыргызстан',
    date: '2024-11-15',
    description:
      'Экскурсия в региональный дата-центр для изучения инфраструктурной безопасности.',
    cover:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    media: [
      {
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Брифинг по протоколам безопасности.'
      },
      {
        type: 'video',
        url: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        caption: 'Видео-обзор экскурсии.'
      }
    ]
  },
  {
    id: '2',
    title: 'Академический ретрит «Саммит прикладной информатики»',
    location: 'Арсланбоб, Кыргызстан',
    date: '2024-10-04',
    description:
      'Двухдневная выездная школа по исследовательским проектам и командной работе.',
    cover:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    media: [
      {
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        caption: 'Сессии и дискуссии на природе.'
      },
      {
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        caption: 'Командная работа и планирование.'
      }
    ]
  },
  {
    id: '3',
    title: 'Поездка в технологический парк ОшГУ',
    location: 'Ош, Кыргызстан',
    date: '2024-09-12',
    description:
      'Знакомство с лабораториями и стартап-проектами университета.',
    cover:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    media: [
      {
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Экскурсия по лабораториям.'
      }
    ]
  }
];

export const groupStats = [
  { label: 'Активных студентов', value: 20 },
  { label: 'Учебных проектов', value: 14 },
  { label: 'Партнёров и наставников', value: 6 },
  { label: 'Событий за год', value: 18 }
];

export const skillDirections = [
  {
    title: 'Кибербезопасность',
    description: 'Безопасная разработка, аудит и мониторинг угроз.'
  },
  {
    title: 'Веб-инженерия',
    description: 'Современные веб-приложения на Next.js и React.'
  },
  {
    title: 'Аналитика данных',
    description: 'Визуализация, отчёты, управление данными.'
  },
  {
    title: 'UX и доступность',
    description: 'Инклюзивные интерфейсы для образовательных сервисов.'
  }
];

export const timelineSteps = [
  {
    title: 'Исследуем',
    description: 'Собираем требования и изучаем академические кейсы ОшГУ.'
  },
  {
    title: 'Проектируем',
    description: 'Создаём прототипы и архитектуру для проектов группы.'
  },
  {
    title: 'Разрабатываем',
    description: 'Пишем код, тестируем и делаем релизы вместе.'
  },
  {
    title: 'Представляем',
    description: 'Демонстрируем результаты на конференциях и конкурсах.'
  }
];
