'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function PressRoomPage() {
  const { t } = useLanguage();

  const pressReleases = [
    {
      date: t('December 2023', 'Diciembre 2023'),
      title: t('Amira Real Estate Launches Senior Living Fund VI', 'Amira Real Estate Lanza el Fondo Senior Living VI'),
      summary: t(
        'Amira announces the launch of its sixth investment fund focused on the growing senior living sector in Spain, with an initial target of €300 million.',
        'Amira anuncia el lanzamiento de su sexto fondo de inversión enfocado en el creciente sector de senior living en España, con un objetivo inicial de €300 millones.'
      ),
    },
    {
      date: t('October 2023', 'Octubre 2023'),
      title: t('Partnership with King Street and Mubadala', 'Asociación con King Street y Mubadala'),
      summary: t(
        'Strategic joint venture formed to expand student housing portfolio, bringing total managed assets to over €650 million.',
        'Se forma una empresa conjunta estratégica para expandir el portafolio de vivienda estudiantil, llevando los activos totales gestionados a más de €650 millones.'
      ),
    },
    {
      date: t('September 2023', 'Septiembre 2023'),
      title: t('BRAVO! Student Living Opens in Granada', 'BRAVO! Student Living Abre en Granada'),
      summary: t(
        'New 300-bed student accommodation facility opens its doors, marking the first property under the BRAVO! brand.',
        'Nueva instalación de alojamiento estudiantil de 300 camas abre sus puertas, marcando la primera propiedad bajo la marca BRAVO!.'
      ),
    },
    {
      date: t('June 2023', 'Junio 2023'),
      title: t('The Club Senior Living Brand Launched', 'Se Lanza la Marca The Club Senior Living'),
      summary: t(
        'Amira introduces The Club, a new premium brand for independent senior living communities across Spain.',
        'Amira presenta The Club, una nueva marca premium para comunidades de senior living independiente en toda España.'
      ),
    },
    {
      date: t('March 2023', 'Marzo 2023'),
      title: t('Amira Surpasses €500 Million in Assets Under Management', 'Amira Supera los €500 Millones en Activos Bajo Gestión'),
      summary: t(
        'Milestone achievement as the company continues its strategic growth in the Spanish real estate market.',
        'Logro significativo mientras la empresa continúa su crecimiento estratégico en el mercado inmobiliario español.'
      ),
    },
  ];

  const mediaContacts = [
    {
      name: t('Press Inquiries', 'Consultas de Prensa'),
      email: 'press@amirainvest.es',
      phone: '+34 91 XXX XXXX',
    },
    {
      name: t('Investor Relations', 'Relaciones con Inversores'),
      email: 'investors@amirainvest.es',
      phone: '+34 91 XXX XXXX',
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-72">
        <img
          className="w-full h-full object-cover"
          src="/images/banners/operations-banner.png"
          alt={t('Press Room Banner', 'Banner de Sala de Prensa')}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-blue-900 text-6xl font-normal font-times" style={{ textShadow: '0 0 20px white, 0 0 30px white, 0 0 40px white' }}>
            {t('Press Room', 'Sala de Prensa')}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 text-4xl font-normal font-times mb-4">
              {t('Latest News & Updates', 'Últimas Noticias y Actualizaciones')}
            </h2>
            <p className="text-stone-900 text-xl font-normal font-roboto leading-8 max-w-3xl mx-auto">
              {t(
                "Stay informed about Amira Real Estate's latest developments, partnerships, and achievements in the Spanish real estate market.",
                'Manténgase informado sobre los últimos desarrollos, asociaciones y logros de Amira Real Estate en el mercado inmobiliario español.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-8 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-blue-900 text-3xl font-normal font-times mb-8">
            {t('Press Releases', 'Comunicados de Prensa')}
          </h3>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <p className="text-gray-500 text-sm font-roboto mb-2">{release.date}</p>
                <h4 className="text-blue-900 text-2xl font-normal font-times mb-3">
                  {release.title}
                </h4>
                <p className="text-stone-700 text-lg font-normal font-roboto leading-7">
                  {release.summary}
                </p>
                <button
                  onClick={() => alert(t('Full article coming soon!', '¡Artículo completo próximamente!'))}
                  className="mt-4 text-blue-900 font-roboto hover:underline"
                >
                  {t('Read more', 'Leer más')} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Media Kit Download */}
            <div className="bg-blue-900 rounded-xl p-8 text-white">
              <h3 className="text-3xl font-normal font-times mb-4">{t('Media Kit', 'Kit de Medios')}</h3>
              <p className="text-lg font-roboto leading-7 mb-6 opacity-90">
                {t(
                  'Download our media kit containing company logos, executive photos, fact sheets, and brand guidelines.',
                  'Descargue nuestro kit de medios que contiene logotipos de la empresa, fotos ejecutivas, hojas informativas y guías de marca.'
                )}
              </p>
              <button
                onClick={() => alert(t('Media kit coming soon!', '¡Kit de medios próximamente!'))}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-roboto hover:bg-gray-100 transition-colors"
              >
                {t('Download Media Kit', 'Descargar Kit de Medios')}
              </button>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-6">
                {t('Media Contacts', 'Contactos de Medios')}
              </h3>
              <div className="space-y-6">
                {mediaContacts.map((contact, index) => (
                  <div key={index} className="border-l-4 border-blue-900 pl-4">
                    <h4 className="text-blue-900 text-xl font-times mb-2">{contact.name}</h4>
                    <p className="text-stone-700 font-roboto">
                      {t('Email', 'Correo')}: <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
                    </p>
                    <p className="text-stone-700 font-roboto">{t('Phone', 'Teléfono')}: {contact.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-blue-900 text-3xl font-normal font-times mb-4">
            {t('Subscribe to Our Newsletter', 'Suscríbase a Nuestro Boletín')}
          </h3>
          <p className="text-stone-700 text-lg font-roboto mb-8">
            {t(
              'Receive the latest news and press releases directly in your inbox.',
              'Reciba las últimas noticias y comunicados de prensa directamente en su bandeja de entrada.'
            )}
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              alert(t('Thank you for subscribing!', '¡Gracias por suscribirse!'));
            }}
          >
            <input
              type="email"
              required
              placeholder={t('Enter your email address', 'Ingrese su correo electrónico')}
              className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-900 flex-1 max-w-md"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-roboto hover:bg-blue-800 transition-colors"
            >
              {t('Subscribe', 'Suscribirse')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
