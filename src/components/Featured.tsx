const specialties = [
  {
    code: "09.02.07",
    name: "Информационные системы и программирование",
    img: "https://source.unsplash.com/featured/400x300?programming,code",
    duration: "3 года 10 мес.",
    budget: "Есть бюджет",
  },
  {
    code: "09.02.06",
    name: "Сетевое и системное администрирование",
    img: "https://source.unsplash.com/featured/400x300?network,server",
    duration: "3 года 10 мес.",
    budget: "Есть бюджет",
  },
  {
    code: "10.02.05",
    name: "Обеспечение информационной безопасности",
    img: "https://source.unsplash.com/featured/400x300?cybersecurity,security",
    duration: "3 года 10 мес.",
    budget: "Есть бюджет",
  },
  {
    code: "09.02.01",
    name: "Компьютерные системы и комплексы",
    img: "https://source.unsplash.com/featured/400x300?computer-hardware",
    duration: "3 года 10 мес.",
    budget: "Есть бюджет",
  },
  {
    code: "11.02.16",
    name: "Монтаж, техническое обслуживание и ремонт электронных приборов",
    img: "https://source.unsplash.com/featured/400x300?electronics,repair",
    duration: "3 года 10 мес.",
    budget: "Есть бюджет",
  },
  {
    code: "25.02.08",
    name: "Техническая эксплуатация беспилотных авиационных систем",
    img: "https://source.unsplash.com/featured/400x300?drone-technology",
    duration: "2 года 10 мес.",
    budget: "Есть бюджет",
  },
  {
    code: "38.02.07",
    name: "Банковское дело",
    img: "https://source.unsplash.com/featured/400x300?banking,finance",
    duration: "3 года 10 мес.",
    budget: "Есть бюджет",
  },
];

const news = [
  {
    date: "15 апреля 2026",
    category: "Приёмная кампания",
    title: "Начат приём документов на 2026/2027 учебный год",
    desc: "С 20 июня принимаем документы на все специальности. Подайте заявление онлайн или лично.",
  },
  {
    date: "3 апреля 2026",
    category: "Мероприятия",
    title: "День открытых дверей пройдёт 25 апреля",
    desc: "Приглашаем абитуриентов и родителей на экскурсию по колледжу и встречу с преподавателями.",
  },
  {
    date: "20 марта 2026",
    category: "Достижения",
    title: "Студенты АКВТ заняли 1-е место на региональной олимпиаде по программированию",
    desc: "Команда колледжа обошла 12 учебных заведений Астраханской области.",
  },
];

export default function Featured() {
  return (
    <>
      {/* Specialties Section */}
      <section id="specialties" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="uppercase text-blue-700 text-sm font-semibold tracking-wider mb-2">Приёмная кампания 2026</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
                Наши специальности
              </h2>
            </div>
            <a
              href="https://www.akvt.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-blue-700 text-blue-700 px-5 py-2.5 text-sm font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-200 rounded shrink-0"
            >
              Смотреть все
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialties.map((s) => (
              <div
                key={s.code}
                className="group border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-blue-600 font-mono mb-1">{s.code}</div>
                  <h3 className="text-sm font-semibold text-neutral-900 leading-snug mb-3">{s.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">{s.duration}</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">{s.budget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="bg-blue-700 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="text-white max-w-xl">
              <p className="uppercase text-blue-300 text-sm font-semibold tracking-wider mb-2">Поступление 2026</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ключевые даты приёмной кампании</h2>
              <p className="text-blue-100 text-base leading-relaxed">
                Для поступления необходим аттестат об окончании 9 или 11 класса. Вступительных испытаний нет — зачисление по среднему баллу аттестата.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:min-w-[480px]">
              {[
                { date: "20 июня", label: "Начало приёма документов" },
                { date: "25 июля", label: "Завершение приёма (бюджет)" },
                { date: "5 августа", label: "Публикация конкурсных списков" },
                { date: "15 августа", label: "Зачисление на бюджет" },
              ].map((item) => (
                <div key={item.date} className="bg-white/10 border border-white/20 rounded-lg p-5">
                  <div className="text-2xl font-bold text-white mb-1">{item.date}</div>
                  <div className="text-blue-100 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.akvt.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 font-bold text-base hover:bg-blue-50 transition-colors duration-200 rounded"
            >
              Подать заявление онлайн
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 font-semibold text-base hover:bg-white/10 transition-colors duration-200 rounded"
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="bg-neutral-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="uppercase text-blue-700 text-sm font-semibold tracking-wider mb-2">Актуально</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Новости колледжа</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded font-medium">{item.category}</span>
                  <span className="text-xs text-neutral-400">{item.date}</span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://www.akvt.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 px-6 py-3 text-sm font-semibold hover:border-blue-700 hover:text-blue-700 transition-colors duration-200 rounded"
            >
              Все новости
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
