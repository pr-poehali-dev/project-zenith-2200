export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://source.unsplash.com/featured/1920x1080?college,campus,education"
          alt="Астраханский колледж вычислительной техники"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/70 to-blue-700/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-blue-500/30 border border-blue-400/50 text-blue-100 text-sm font-medium px-4 py-1.5 rounded mb-6 uppercase tracking-wider">
            Приём 2026 открыт
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Территория
            <br />
            <span className="text-blue-300">успеха</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-4 leading-relaxed">
            Астраханский колледж вычислительной техники — ведущее учебное заведение региона в области IT и технических специальностей.
          </p>
          <p className="text-base text-blue-200/80 mb-10 italic">
            «Здесь каждый находит свой путь к профессии будущего»
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#admission"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 font-bold text-base hover:bg-blue-50 transition-colors duration-200 rounded"
            >
              Подать заявление
            </a>
            <a
              href="#specialties"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-semibold text-base hover:bg-white/10 transition-colors duration-200 rounded"
            >
              Наши специальности
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/20">
          {[
            { value: "30+", label: "Лет на рынке образования" },
            { value: "7", label: "Специальностей" },
            { value: "1500+", label: "Студентов" },
            { value: "95%", label: "Трудоустройство выпускников" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
