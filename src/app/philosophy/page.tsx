'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function PhilosophyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-72">
        <img
          className="w-full h-full object-cover"
          src="/images/banners/philosophy-banner.png"
          alt={t('Investment Philosophy Banner', 'Banner de Filosofía de Inversión')}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-blue-900 text-6xl font-normal font-times" style={{ textShadow: '0 0 20px white, 0 0 30px white, 0 0 40px white' }}>
            {t('Investment Philosophy', 'Filosofía de Inversión')}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-blue-900 text-6xl font-normal font-times text-center mb-8">
            {t('Investment Philosophy', 'Filosofía de Inversión')}
          </h2>
          <p className="text-stone-900 text-2xl font-normal font-roboto leading-9 text-center max-w-[1027px] mx-auto">
            {t(
              'At Amira Real Estate Investments Management, our investment philosophy is grounded in a disciplined approach, comprehensive research, and a commitment to long-term value creation. We believe in empowering our clients with sound investment strategies that deliver consistent returns and mitigate risk.',
              'En Amira Real Estate Investments Management, nuestra filosofía de inversión se basa en un enfoque disciplinado, investigación integral y un compromiso con la creación de valor a largo plazo. Creemos en empoderar a nuestros clientes con estrategias de inversión sólidas que entreguen rendimientos consistentes y mitiguen el riesgo.'
            )}
          </p>
        </div>
      </section>

      {/* Analyzing the Local Market - Image Left, Text Right */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              className="w-full max-w-[659px] h-96 object-cover rounded-xl"
              src="/images/philosophy/analyzing.png"
              alt={t('Analyzing the Local Market', 'Analizando el Mercado Local')}
            />
            <div>
              <h3 className="text-blue-900 text-4xl font-normal font-times mb-6">
                {t('Analyzing the Local Market', 'Analizando el Mercado Local')}
              </h3>
              <p className="text-black text-xl font-normal font-roboto leading-8">
                {t(
                  'To identify the most promising investment opportunities, we immerse ourselves in the local market. We meticulously analyze factors such as demand, supply, demographics, economic indicators, and market trends. Our on-the-ground research enables us to gain a deep understanding of the dynamics that drive the real estate landscape, empowering us to make informed investment decisions.',
                  'Para identificar las oportunidades de inversión más prometedoras, nos sumergimos en el mercado local. Analizamos meticulosamente factores como la demanda, la oferta, la demografía, los indicadores económicos y las tendencias del mercado. Nuestra investigación sobre el terreno nos permite obtener una comprensión profunda de las dinámicas que impulsan el panorama inmobiliario, permitiéndonos tomar decisiones de inversión informadas.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identifying Asset Classes - Text Left, Image Right */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-blue-900 text-4xl font-normal font-times mb-6">
                {t('Identifying Asset Classes and Investment Opportunities', 'Identificando Clases de Activos y Oportunidades de Inversión')}
              </h3>
              <p className="text-black text-xl font-normal font-roboto leading-8">
                {t(
                  "Based on our comprehensive market analysis, we identify compelling asset classes with significant growth potential. Our rigorous evaluation process allows us to spot investment opportunities that align with our clients' objectives. Whether it's residential, commercial, industrial, or mixed-use properties, we carefully select investments that offer favorable risk-return profiles and long-term value creation.",
                  'Basándonos en nuestro análisis de mercado integral, identificamos clases de activos atractivas con un potencial de crecimiento significativo. Nuestro riguroso proceso de evaluación nos permite detectar oportunidades de inversión que se alinean con los objetivos de nuestros clientes. Ya sean propiedades residenciales, comerciales, industriales o de uso mixto, seleccionamos cuidadosamente inversiones que ofrecen perfiles favorables de riesgo-rendimiento y creación de valor a largo plazo.'
                )}
              </p>
            </div>
            <img
              className="w-full max-w-[659px] h-96 object-cover rounded-xl"
              src="/images/philosophy/identifying.png"
              alt={t('Identifying Asset Classes', 'Identificando Clases de Activos')}
            />
          </div>
        </div>
      </section>

      {/* Creating a Strategy - Gray Background, Centered */}
      <section className="bg-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-blue-900 text-4xl font-normal font-times mb-6">
            {t('Creating a Strategy', 'Creando una Estrategia')}
          </h3>
          <p className="text-black text-xl font-normal font-roboto leading-8 max-w-[1024px] mx-auto mb-12">
            {t(
              "Once we have identified the investment opportunities, we develop a tailored strategy for each project. Our strategy takes into account factors such as location, asset type, market conditions, and client preferences. By crafting a well-defined investment strategy, we aim to maximize returns while effectively managing risk. Our commitment to strategy development ensures that each investment is aligned with our clients' goals and expectations.",
              'Una vez que hemos identificado las oportunidades de inversión, desarrollamos una estrategia personalizada para cada proyecto. Nuestra estrategia tiene en cuenta factores como la ubicación, el tipo de activo, las condiciones del mercado y las preferencias del cliente. Al crear una estrategia de inversión bien definida, buscamos maximizar los rendimientos mientras gestionamos el riesgo de manera efectiva. Nuestro compromiso con el desarrollo de estrategias asegura que cada inversión esté alineada con los objetivos y expectativas de nuestros clientes.'
            )}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              className="w-full h-96 object-cover rounded-xl"
              src="/images/philosophy/accessing.png"
              alt={t('Strategy Image 1', 'Imagen de Estrategia 1')}
            />
            <img
              className="w-full h-96 object-cover rounded-xl"
              src="/images/philosophy/sourcing.png"
              alt={t('Strategy Image 2', 'Imagen de Estrategia 2')}
            />
          </div>
        </div>
      </section>

      {/* Accessing Capital Markets and Sourcing Opportunities - Two Columns */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Accessing Capital Markets */}
            <div className="text-center">
              <h3 className="text-blue-900 text-4xl font-normal font-times mb-6">
                {t('Accessing Capital Markets and Launching the Fund', 'Accediendo a los Mercados de Capitales y Lanzando el Fondo')}
              </h3>
              <p className="text-black text-xl font-normal font-roboto leading-8">
                {t(
                  'At Amira, we leverage our market insights and strategic relationships to access capital markets. Our experienced team navigates the complex landscape of fundraising, enabling us to launch investment funds that pool resources from investors seeking exposure to real estate. By combining our expertise with the power of a professionally managed fund, we unlock a wider range of investment opportunities and maximize potential returns.',
                  'En Amira, aprovechamos nuestros conocimientos del mercado y relaciones estratégicas para acceder a los mercados de capitales. Nuestro equipo experimentado navega el complejo panorama de la recaudación de fondos, permitiéndonos lanzar fondos de inversión que agrupan recursos de inversores que buscan exposición al sector inmobiliario. Al combinar nuestra experiencia con el poder de un fondo gestionado profesionalmente, desbloqueamos una gama más amplia de oportunidades de inversión y maximizamos los rendimientos potenciales.'
                )}
              </p>
            </div>

            {/* Sourcing Opportunities */}
            <div className="text-center">
              <h3 className="text-blue-900 text-4xl font-normal font-times mb-6">
                {t('Sourcing Opportunities and Plot Development', 'Buscando Oportunidades y Desarrollo de Terrenos')}
              </h3>
              <p className="text-black text-xl font-normal font-roboto leading-8">
                {t(
                  'Sourcing promising investment opportunities is a core strength of our team. We proactively identify and evaluate land plots with strong development potential. Our rigorous due diligence process considers factors such as location, zoning regulations, and market demand. We oversee the entire plot development process, from architectural design and construction to completion, ensuring a smooth and successful project execution.',
                  'La búsqueda de oportunidades de inversión prometedoras es una fortaleza central de nuestro equipo. Identificamos y evaluamos proactivamente terrenos con un fuerte potencial de desarrollo. Nuestro riguroso proceso de diligencia debida considera factores como la ubicación, las regulaciones de zonificación y la demanda del mercado. Supervisamos todo el proceso de desarrollo del terreno, desde el diseño arquitectónico y la construcción hasta su finalización, asegurando una ejecución del proyecto fluida y exitosa.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creating an Operating Company - Gray Background */}
      <section className="bg-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-blue-900 text-4xl font-normal font-times mb-6">
            {t('Creating an Operating Company', 'Creando una Empresa Operadora')}
          </h3>
          <p className="text-black text-xl font-normal font-roboto leading-8 max-w-[1036px] mx-auto">
            {t(
              'To effectively manage the properties we develop, we establish an operating company. Our focus extends beyond the physical structures; we are committed to creating sustainable and well-operated businesses. By prioritizing operational excellence, tenant satisfaction, and long-term asset management, we strive to maximize the value and performance of our real estate investments.',
              'Para gestionar eficazmente las propiedades que desarrollamos, establecemos una empresa operadora. Nuestro enfoque va más allá de las estructuras físicas; estamos comprometidos a crear negocios sostenibles y bien operados. Al priorizar la excelencia operativa, la satisfacción del inquilino y la gestión de activos a largo plazo, nos esforzamos por maximizar el valor y el rendimiento de nuestras inversiones inmobiliarias.'
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
