import Icon from "@/components/ui/icon";

const quickLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Специальности", href: "#specialties" },
  { label: "Поступление 2026", href: "#admission" },
  { label: "Новости", href: "#news" },
  { label: "О колледже", href: "#about" },
];

const infoLinks = [
  { label: "Сведения об организации", href: "https://www.akvt.ru" },
  { label: "Образовательные стандарты", href: "https://www.akvt.ru" },
  { label: "Документы", href: "https://www.akvt.ru" },
  { label: "Противодействие коррупции", href: "https://www.akvt.ru" },
];

const socials = [
  { icon: "Send", label: "ВКонтакте", href: "https://vk.com/akvt" },
  { icon: "MessageCircle", label: "Telegram", href: "https://t.me/akvt" },
];

export default function Footer() {
  return (
    <div
      className="relative h-auto"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Contacts strip */}
      <section id="contacts" className="bg-blue-700 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="MapPin" size={20} className="text-white" />
            </div>
            <div>
              <div className="text-blue-200 text-xs uppercase mb-1 font-semibold">Адрес</div>
              <div className="text-white font-medium">г. Астрахань, пер. Смоляной, д. 2</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={20} className="text-white" />
            </div>
            <div>
              <div className="text-blue-200 text-xs uppercase mb-1 font-semibold">Телефон</div>
              <a href="tel:+78512390100" className="text-white font-medium hover:text-blue-200 transition-colors">
                +7 (8512) 39-01-00
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Mail" size={20} className="text-white" />
            </div>
            <div>
              <div className="text-blue-200 text-xs uppercase mb-1 font-semibold">Почта</div>
              <a href="mailto:akvt@mail.ru" className="text-white font-medium hover:text-blue-200 transition-colors">
                akvt@mail.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="w-full h-56 sm:h-72">
        <iframe
          title="Карта АКВТ"
          src="https://yandex.ru/map-widget/v1/?ll=47.980808%2C46.353668&z=16&pt=47.980808,46.353668,pm2bll"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Main footer */}
      <div className="bg-neutral-900 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">АК</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">АКВТ</div>
                  <div className="text-neutral-400 text-xs">Астраханский колледж</div>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Государственное бюджетное профессиональное образовательное учреждение Астраханской области.
              </p>
              <div className="flex gap-3 mt-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/10 hover:bg-blue-700 rounded flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon name={s.icon as "Send"} size={16} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-neutral-400 text-xs uppercase tracking-wider mb-4 font-semibold">Навигация</h3>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white text-sm hover:text-blue-400 transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info links */}
            <div>
              <h3 className="text-neutral-400 text-xs uppercase tracking-wider mb-4 font-semibold">Информация</h3>
              <ul className="flex flex-col gap-2.5">
                {infoLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-blue-400 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div>
              <h3 className="text-neutral-400 text-xs uppercase tracking-wider mb-4 font-semibold">Режим работы</h3>
              <ul className="flex flex-col gap-2.5">
                <li className="text-white text-sm">Пн–Пт: <span className="text-blue-400">8:00 – 17:00</span></li>
                <li className="text-white text-sm">Сб: <span className="text-blue-400">9:00 – 14:00</span></li>
                <li className="text-white text-sm">Вс: <span className="text-neutral-500">выходной</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <h2 className="text-[14vw] sm:text-[11vw] lg:text-[9vw] leading-[0.85] text-white font-bold tracking-tight opacity-20 select-none">
              АКВТ
            </h2>
            <p className="text-neutral-500 text-sm text-right">
              © {new Date().getFullYear()} ГБПОУ АО «АКВТ»<br />
              Все права защищены
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
