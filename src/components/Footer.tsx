'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const showCTA = pathname === '/' || pathname === '/about';

  const footerLinks = {
    main: [
      { label: t('Home', 'Inicio'), href: '/' },
      { label: t('Assets', 'Activos'), href: '/living-funds' },
      { label: t('About us', 'Nosotros'), href: '/about' },
      { label: t('Investment Strategies', 'Estrategias de Inversión'), href: '/philosophy' },
      { label: t('Real Estate Trends', 'Tendencias Inmobiliarias'), href: '/press-room' },
      { label: t('Contact', 'Contacto'), href: '/contact' },
    ],
    other: [
      { label: t('Privacy Policy', 'Política de Privacidad'), href: '#' },
      { label: t('Terms of Services', 'Términos de Servicio'), href: '#' },
      { label: t('Disclaimer', 'Aviso Legal'), href: '#' },
      { label: t('International Inquiries', 'Consultas Internacionales'), href: '#' },
    ],
  };

  return (
    <footer>
      {/* CTA Section - only on Home and About pages */}
      {showCTA && (
        <div className="max-w-[1292px] mx-auto my-12">
          <div className="bg-blue-900 rounded-xl py-8 px-12 flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-white text-5xl font-normal font-times mb-4 md:mb-0">
              {t("Let's Invest Together", 'Invirtamos Juntos')}
            </h3>
            <a
              href="mailto:contact@amirainvest.es"
              className="text-white text-2xl font-normal font-roboto leading-8 hover:underline"
            >
              {t('Email', 'Correo')}: contact@amirainvest.es
            </a>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-2 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h2 className="text-white text-6xl font-normal font-times uppercase mb-4">
                AMIRA
              </h2>
              <p className="text-white text-2xl font-bold font-times mb-4">
                {t('Real Estate Investment Manager', 'Gestor de Inversiones Inmobiliarias')}
              </p>
              <p className="text-white text-base font-normal font-inter leading-relaxed max-w-[620px]">
                {t(
                  'AMIRA REAL ESTATE is a boutique founded in 2006 by real estate consultants that manage estate and property investment in Spain.',
                  'AMIRA REAL ESTATE es una boutique fundada en 2006 por consultores inmobiliarios que gestionan inversiones inmobiliarias en España.'
                )}
              </p>
              <div className="w-16 h-0 border-t border-white mt-6"></div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white text-3xl font-normal font-times mb-6">
                {t('Links', 'Enlaces')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.main.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white text-xl font-normal font-roboto hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h4 className="text-white text-3xl font-normal font-times mb-6">
                {t('Other Links', 'Otros Enlaces')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.other.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white text-xl font-normal font-roboto hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16">
          <p className="text-white text-base font-normal font-roboto">
            © 2023 Amira Real Estate Asset Management Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
