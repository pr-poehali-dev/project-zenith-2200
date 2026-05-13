import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "GraduationCap",
    title: "Бюджетные места",
    desc: "Большинство специальностей имеют государственное финансирование. Учитесь бесплатно.",
  },
  {
    icon: "Briefcase",
    title: "Практика в компаниях",
    desc: "Партнёры колледжа — ведущие IT-компании и предприятия Астраханской области.",
  },
  {
    icon: "Award",
    title: "Дипломы государственного образца",
    desc: "Диплом АКВТ признаётся по всей России и является основой для карьеры.",
  },
  {
    icon: "Users",
    title: "Студенческое сообщество",
    desc: "Клубы по интересам, спортивные секции, КВН и студенческий совет.",
  },
];

export default function Promo() {
  return (
    <section id="about" className="bg-neutral-900 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://source.unsplash.com/featured/800x600?college,students,classroom"
                alt="Студенты АКВТ"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-900/80">
                <p className="text-white text-lg font-semibold">
                  г. Астрахань, пер. Смоляной, д. 2
                </p>
                <p className="text-blue-300 text-sm">Главный корпус колледжа</p>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="w-full lg:w-1/2">
            <p className="uppercase text-blue-400 text-sm font-semibold tracking-wider mb-3">Почему АКВТ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Современное образование<br />в сердце Астрахани
            </h2>
            <p className="text-neutral-400 text-base mb-10 leading-relaxed">
              АКВТ — это более 30 лет подготовки специалистов в области вычислительной техники и информационных технологий. Мы оснащены современным оборудованием и сотрудничаем с работодателями напрямую.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((adv) => (
                <div key={adv.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                    <Icon name={adv.icon as "GraduationCap"} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{adv.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
