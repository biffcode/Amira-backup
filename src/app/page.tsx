'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const heroImage = '/images/banners/hero-banner-1.png';

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    {
      label: t('Team', 'Equipo'),
      value: t('Best in Class Team', 'Equipo de Primera Clase'),
      description: t('on average 20 years of experience', 'promedio de 20 años de experiencia'),
      icon: '/images/icons/stat-icon-team.png'
    },
    {
      label: t('Amount invested', 'Monto invertido'),
      value: "640'000'000 €",
      description: t('5 investment vehicles, 2 operating companies', '5 vehículos de inversión, 2 empresas operadoras'),
      icon: '/images/icons/stat-icon-money.png'
    },
    {
      label: t('Performance', 'Rendimiento'),
      value: t('Over 20% IRR', 'Más del 20% TIR'),
      description: t('Proven performance in living asset class', 'Rendimiento probado en clase de activos living'),
      icon: '/images/icons/stat-icon-performance.png'
    },
    {
      label: t('Since', 'Desde'),
      value: t('16 Years', '16 Años'),
      description: t('of experience in the real estate market', 'de experiencia en el mercado inmobiliario'),
      icon: '/images/icons/stat-icon-years.png'
    },
  ];

  const investmentProcess = [
    {
      step: 1,
      title: t('Research and Analysis', 'Investigación y Análisis'),
      description: t(
        'At Amira, we begin by conducting thorough research and analysis. Our team of experts leverages comprehensive market research, performs meticulous due diligence, and assesses risks to identify the most promising investment opportunities. We believe in data-driven decision-making to maximize returns and minimize risks.',
        'En Amira, comenzamos realizando una investigación y análisis exhaustivos. Nuestro equipo de expertos aprovecha la investigación de mercado integral, realiza una diligencia debida meticulosa y evalúa los riesgos para identificar las oportunidades de inversión más prometedoras. Creemos en la toma de decisiones basada en datos para maximizar los rendimientos y minimizar los riesgos.'
      ),
      image: '/images/properties/step-1-image.png',
      icon: '/images/icons/step-1-icon.png',
    },
    {
      step: 2,
      title: t('Strategy Development', 'Desarrollo de Estrategia'),
      description: t(
        "Once our research is complete, we develop a tailored investment strategy for each client. We take into account their specific goals, risk tolerance, and investment horizon. Our strategy involves identifying target markets and asset classes that align with our clients' objectives. With a meticulous approach, we craft investment plans that maximize returns while managing risk effectively.",
        'Una vez completada nuestra investigación, desarrollamos una estrategia de inversión personalizada para cada cliente. Tenemos en cuenta sus objetivos específicos, tolerancia al riesgo y horizonte de inversión. Nuestra estrategia implica identificar mercados objetivo y clases de activos que se alineen con los objetivos de nuestros clientes.'
      ),
      image: '/images/properties/step-2-image.png',
      icon: '/images/icons/step-2-icon.png',
    },
    {
      step: 3,
      title: t('Acquisition and Due Diligence', 'Adquisición y Diligencia Debida'),
      description: t(
        "At Amira, we follow a rigorous acquisition and due diligence process. We carefully evaluate potential properties, assessing their financial viability and growth potential. Our team conducts thorough financial analysis, property inspections, and legal due diligence to mitigate risks.",
        'En Amira, seguimos un riguroso proceso de adquisición y diligencia debida. Evaluamos cuidadosamente las propiedades potenciales, evaluando su viabilidad financiera y potencial de crecimiento. Nuestro equipo realiza análisis financieros exhaustivos, inspecciones de propiedades y diligencia debida legal para mitigar riesgos.'
      ),
      image: '/images/properties/step-3-image.png',
      icon: '/images/icons/step-3-icon.png',
    },
    {
      step: 4,
      title: t('Asset development', 'Desarrollo de Activos'),
      description: t(
        "Asset development encompasses both greenfield and brownfield projects, with the primary objective being to generate value by strategically repositioning the asset. This involves a meticulous process of revitalizing and optimizing the asset's use and potential.",
        'El desarrollo de activos abarca tanto proyectos greenfield como brownfield, con el objetivo principal de generar valor mediante el reposicionamiento estratégico del activo. Esto implica un proceso meticuloso de revitalización y optimización del uso y potencial del activo.'
      ),
      image: '/images/properties/step-4-image.png',
      icon: '/images/icons/step-4-icon.png',
    },
  ];

  const philosophyPoints = [
    {
      title: t('Capital Preservation', 'Preservación del Capital'),
      description: t(
        "We prioritize the protection and preservation of our clients' capital by conducting rigorous risk assessments and employing conservative investment strategies.",
        'Priorizamos la protección y preservación del capital de nuestros clientes mediante evaluaciones de riesgo rigurosas y estrategias de inversión conservadoras.'
      )
    },
    {
      title: t('Active Asset Management', 'Gestión Activa de Activos'),
      description: t(
        'We actively manage our investment portfolios, monitoring market trends and proactively adjusting strategies to optimize performance and mitigate risks.',
        'Gestionamos activamente nuestras carteras de inversión, monitoreando las tendencias del mercado y ajustando proactivamente las estrategias para optimizar el rendimiento y mitigar los riesgos.'
      )
    },
    {
      title: t('Sustainable Investments', 'Inversiones Sostenibles'),
      description: t(
        'We are committed to investing in properties that align with sustainable practices and have a positive impact on the environment and communities.',
        'Estamos comprometidos a invertir en propiedades que se alineen con prácticas sostenibles y tengan un impacto positivo en el medio ambiente y las comunidades.'
      )
    },
  ];

  const philosophyBenefits = t(
    `Delivering Consistent Returns: Our investment philosophy aims to deliver consistent and attractive returns over the long term, aligning with our clients' financial objectives.

Mitigating Risk: By adhering to our core principles, we strive to minimize downside risk and preserve capital, providing our clients with a sense of security and peace of mind.

Building Wealth: Our philosophy focuses on generating wealth through strategic real estate investments, capitalizing on market opportunities and optimizing asset performance.`,
    `Entregando Rendimientos Consistentes: Nuestra filosofía de inversión tiene como objetivo entregar rendimientos consistentes y atractivos a largo plazo, alineados con los objetivos financieros de nuestros clientes.

Mitigando Riesgos: Al adherirnos a nuestros principios fundamentales, nos esforzamos por minimizar el riesgo a la baja y preservar el capital, brindando a nuestros clientes seguridad y tranquilidad.

Construyendo Riqueza: Nuestra filosofía se centra en generar riqueza a través de inversiones inmobiliarias estratégicas, capitalizando las oportunidades del mercado y optimizando el rendimiento de los activos.`
  );

  const assets = [
    { title: t('Property Management Mandate', 'Mandato de Gestión de Propiedades'), location: 'Madrid, Spain', image: '/images/properties/asset-1.png' },
    { title: 'BRAVO GRANADA STUDENT LIVING FUND II', location: 'GRANADA, Spain', image: '/images/properties/asset-2.png' },
    { title: 'BRAVO MURCIA STUDENT LIVING FUND II', location: 'Murcia, Spain', image: '/images/properties/asset-3.png' },
    { title: 'HUBR MADRID STUDENT LIVING FUND 1', location: 'Madrid, Spain', image: '/images/properties/asset-4.png' },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[700px]">
        <img
          className="w-full h-full object-cover absolute inset-0"
          src={heroImage}
          alt="Amira Real Estate"
        />
        {/* Left white gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" style={{ right: '40%' }}></div>
        {/* Bottom white gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white" style={{ top: '60%' }}></div>

        {/* Hero text with same margin as page content */}
        <div className="absolute top-1/3 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h1 className="text-blue-900 text-5xl lg:text-6xl font-normal font-times uppercase mb-6">AMIRA</h1>
            <h2 className="text-blue-900 text-3xl lg:text-5xl font-normal font-times mb-4">
              {t('Real Estate Investment Manager', 'Gestor de Inversiones Inmobiliarias')}
            </h2>
            <p className="text-black text-xl lg:text-2xl font-normal font-roboto">
              {t('Creating value across cycles since 2006', 'Creando valor a través de los ciclos desde 2006')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Invest with us */}
      <section className="py-20 max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-blue-900 text-6xl font-normal font-times text-center mb-16">
          {t('Invest with us', 'Invierte con nosotros')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <img className="w-12 h-12 mx-auto mb-4" src={stat.icon} alt={stat.label} />
              <p className="text-black text-xl font-normal font-roboto mb-2">{stat.label}</p>
              <p className="text-blue-900 text-4xl font-normal font-times mb-2">{stat.value}</p>
              <p className="text-black text-base font-normal font-roboto">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-blue-900 text-6xl font-normal font-times text-center mb-16">
            {t('Our Investment Process', 'Nuestro Proceso de Inversión')}
          </h2>

          <div className="space-y-20">
            {investmentProcess.map((item, index) => (
              <div
                key={item.step}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <img
                    className="w-full max-w-[659px] h-[439px] object-cover rounded-xl"
                    src={item.image}
                    alt={`${t('Step', 'Paso')} ${item.step}`}
                  />
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <img className="w-24 h-24 mb-4" src={item.icon} alt="Icon" />
                  <h3 className="text-blue-900 text-4xl font-normal font-times mb-4">
                    {t('Step', 'Paso')} {item.step}: {item.title}
                  </h3>
                  <p className="text-black text-xl font-normal font-roboto leading-8 mb-6">
                    {item.description}
                  </p>
                  <button className="btn-primary">{t('Learn More', 'Saber Más')}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-blue-900 text-6xl font-normal font-times text-center mb-8">
            {t('Our Investment Philosophy', 'Nuestra Filosofía de Inversión')}
          </h2>
          <p className="text-black text-xl font-normal font-roboto leading-8 text-center max-w-[1143px] mx-auto mb-16">
            {t(
              'At Amira, our investment philosophy is built on a strong foundation of core principles. We are dedicated to creating long-term value for our clients through strategic real estate investments. Our philosophy encompasses the following key elements:',
              'En Amira, nuestra filosofía de inversión se basa en una sólida base de principios fundamentales. Estamos dedicados a crear valor a largo plazo para nuestros clientes a través de inversiones inmobiliarias estratégicas. Nuestra filosofía abarca los siguientes elementos clave:'
            )}
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - Philosophy points */}
            <div className="space-y-8">
              {philosophyPoints.map((point, index) => (
                <div key={index}>
                  <h4 className="text-blue-900 text-3xl font-normal font-times mb-3">{point.title}</h4>
                  <p className="text-black text-xl font-normal font-roboto leading-8">{point.description}</p>
                </div>
              ))}
            </div>

            {/* Right column - Benefits */}
            <div>
              <h4 className="text-blue-900 text-4xl font-normal font-times mb-6">
                {t('Benefits of Our Philosophy', 'Beneficios de Nuestra Filosofía')}
              </h4>
              <p className="text-black text-xl font-normal font-roboto leading-8 whitespace-pre-line">
                {philosophyBenefits}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Assets Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-blue-900 text-6xl font-normal font-times text-center mb-16">
            {t('Our Assets', 'Nuestros Activos')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assets.map((asset, index) => (
              <div key={index} className="bg-neutral-100 rounded-xl overflow-hidden p-6">
                <img
                  className="w-full aspect-[314/447] rounded-xl object-cover"
                  src={asset.image}
                  alt={asset.title}
                />
                <div className="pt-4 text-center">
                  <h4 className="text-blue-900 text-2xl font-normal font-times uppercase mb-2">{asset.title}</h4>
                  <p className="text-black text-base font-normal font-roboto">{asset.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons - round arrows */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button className="w-9 h-9 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
              ←
            </button>
            <button className="btn-primary">{t('Show More', 'Ver Más')}</button>
            <button className="w-9 h-9 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
