export type EventItem = {
    year: number;
    text: string;
}

export type Segment = {
    id: string;
    title: string;
    startYear: number;
    endYear: number;
    events: EventItem[];
}

export const segments: Segment[] = [
    {
        id: "tech",
        title: "Технологии",
        startYear: 1980,
        endYear: 1986,
        events: [
            { year: 1980, text: "Sinclair Research выпускает домашний компьютер ZX80. Sinclair Research выпускает домашний компьютер ZX80." },
            { year: 1982, text: "Появился домашний компьютер ZX Spectrum." },
            { year: 1984, text: "Apple представила компьютер Macintosh." },
            { year: 1985, text: "Microsoft выпускает Windows 1.0." },
            { year: 1986, text: "IBM выпускает ПК AT 5170." }
        ]
    },
    {
        id: "cinema",
        title: "Кино",
        startYear: 1987,
        endYear: 1991,
        events: [
            { year: 1987, text: "«Хищник»/Predator, США (реж. Джон Мактирнан)." },
            { year: 1988, text: "«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США." },
            { year: 1989, text: "«Назад в будущее 2»/Back To The Future 2, США." },
            { year: 1990, text: "«Крепкий орешек 2»/Die Hard 2, США." }
        ]
    },
    {
        id: "literature",
        title: "Литература",
        startYear: 1992,
        endYear: 1997,
        events: [
            { year: 1992, text: "Нобелевская премия по литературе — Дерек Уолкотт." },
            { year: 1994, text: "«Бессонница» — роман Стивена Кинга." },
            { year: 1995, text: "Нобелевская премия по литературе — Шеймас Хини." },
            { year: 1997, text: "«Гарри Поттер и философский камень» — Дж. К. Роулинг." }
        ]
    },
    {
        id: "theatre",
        title: "Театр",
        startYear: 1999,
        endYear: 2004,
        events: [
            { year: 1999, text: "Премьера балета «Золушка» в постановке Ж.-К. Майо." },
            { year: 2000, text: "Возобновлено издание журнала «Театр»." },
            { year: 2002, text: "Премьера «Берег Утопии» Тома Стоппарда, Лондон." },
            { year: 2003, text: "Пожар в театре «Ла Фениче» (Венеция) завершён восстановлением." },
            { year: 2004, text: "Открытие новой сцены (пример) в одном из театров Европы." }
        ]
    },
    {
        id: "music",
        title: "Музыка",
        startYear: 2006,
        endYear: 2014,
        events: [
            { year: 2006, text: "Выход знакового альбома (пример) в мировой поп‑музыке." },
            { year: 2008, text: "Основание крупного музыкального стриминг‑сервиса (пример)." },
            { year: 2012, text: "Мировой тур одного из топ‑артистов (пример)." }
        ]
    },
    {
        id: "science",
        title: "Наука",
        startYear: 2015,
        endYear: 2022,
        events: [
            { year: 2015, text: "13 сентября — частное солнечное затмение, видимое в Южной Африке." },
            { year: 2016, text: "Телескоп «Хаббл» обнаружил удалённую галактику GN‑z11." },
            { year: 2017, text: "Компания Tesla официально представила электрогрузовик Tesla Semi." },
            { year: 2018, text: "Старт миссии Solar Probe для исследования Солнца." },
            { year: 2019, text: "Google объявил о создании 53‑кубитного квантового компьютера." },
            { year: 2020, text: "Корабль Crew Dragon вернулся на Землю после пилотируемого полёта." }
        ]
    },
]
