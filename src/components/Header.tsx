import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Специальности", href: "#specialties" },
  { label: "Поступление", href: "#admission" },
  { label: "Новости", href: "#news" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header({ className }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm ${className ?? ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">АК</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-blue-700 font-bold text-sm leading-tight">АКВТ</div>
              <div className="text-neutral-500 text-xs leading-tight">Астраханский колледж</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="#admission"
              className="hidden sm:inline-flex bg-blue-700 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition-colors duration-200 rounded"
            >
              Подать заявление
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-blue-700"
              aria-label="Меню"
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-neutral-700 hover:text-blue-700 text-base font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admission"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-blue-700 text-white text-center px-4 py-3 font-semibold rounded"
          >
            Подать заявление
          </a>
        </div>
      )}
    </header>
  );
}
