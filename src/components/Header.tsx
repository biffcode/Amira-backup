'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

const navItems = [
  { id: 'home', label: 'Home', labelSP: 'Inicio', href: '/' },
  { id: 'about', label: 'About us', labelSP: 'Nosotros', href: '/about' },
  { id: 'philosophy', label: 'Philosophy', labelSP: 'Filosofia', href: '/philosophy' },
  { id: 'living-funds', label: 'Living Funds', labelSP: 'Fondos Living', href: '/living-funds' },
  { id: 'operations', label: 'Operations', labelSP: 'Operaciones', href: '/operations' },
  { id: 'press-room', label: 'Press Room', labelSP: 'Prensa', href: '/press-room' },
  { id: 'contact', label: 'Contact', labelSP: 'Contacto', href: '/contact' },
];

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'SP' : 'EN');
  };

  return (
    <header className="bg-white fixed w-full top-0 z-50">
      <div className="w-full pl-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logos/amira-logo.png"
              alt="Amira Real Estate"
              width={140}
              height={35}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-base font-normal font-roboto transition-colors whitespace-nowrap ${
                  pathname === item.href
                    ? 'text-blue-900'
                    : 'text-black hover:text-blue-900'
                }`}
              >
                {language === 'EN' ? item.label : item.labelSP}
              </Link>
            ))}
          </nav>

          {/* Right side - Language toggle */}
          <div className="hidden xl:flex items-center shrink-0">
            <button
              onClick={toggleLanguage}
              className="bg-blue-900 text-white pl-5 pr-6 py-2 rounded-l-full text-base font-normal font-roboto whitespace-nowrap hover:bg-blue-800 transition-colors"
            >
              {language === 'EN' ? 'EN' : 'SP'} / {language === 'EN' ? 'SP' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t pr-2">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-lg font-normal font-roboto ${
                    pathname === item.href ? 'text-blue-900' : 'text-black'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language === 'EN' ? item.label : item.labelSP}
                </Link>
              ))}

              <button
                onClick={toggleLanguage}
                className="bg-blue-900 text-white px-5 py-2 rounded-full text-base font-normal font-roboto whitespace-nowrap w-fit"
              >
                {language === 'EN' ? 'EN' : 'SP'} / {language === 'EN' ? 'SP' : 'EN'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
