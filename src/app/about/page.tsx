'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const highlights = [
    {
      title: t('Local market specialist', 'Especialista en el mercado local'),
      description: t(
        'Established in 2006 and headquartered in Madrid with branches in Barcelona and Malaga, Amira is a specialized Spanish real estate investment boutique. Our expertise lies in creating and managing investment vehicles, catering to the unique dynamics of the local market.',
        'Establecida en 2006 con sede en Madrid y sucursales en Barcelona y Málaga, Amira es una boutique de inversión inmobiliaria española especializada. Nuestra experiencia radica en la creación y gestión de vehículos de inversión, atendiendo a la dinámica única del mercado local.'
      ),
    },
    {
      title: t('Proven Performance', 'Rendimiento Probado'),
      description: t(
        'Our senior team possesses an average of 20 years of real estate investing experience in Spain and internationally. Over market cycles, we have consistently delivered attractive risk-adjusted returns, demonstrating our track record of success.',
        'Nuestro equipo senior posee un promedio de 20 años de experiencia en inversión inmobiliaria en España e internacionalmente. A través de los ciclos del mercado, hemos entregado consistentemente rendimientos atractivos ajustados al riesgo, demostrando nuestro historial de éxito.'
      ),
    },
    {
      title: t('Long-Term Relationships', 'Relaciones a Largo Plazo'),
      description: t(
        "At Amira, we prioritize building and maintaining long-term relationships. Through our senior management's extensive industry network, we have access to off-market opportunities and a full range of investment services, ensuring our clients benefit from exclusive deals.",
        'En Amira, priorizamos la construcción y el mantenimiento de relaciones a largo plazo. A través de la extensa red de la industria de nuestra gerencia senior, tenemos acceso a oportunidades fuera del mercado y una gama completa de servicios de inversión.'
      ),
    },
    {
      title: t('Tailored Investment Solutions', 'Soluciones de Inversión Personalizadas'),
      description: t(
        "Whether serving institutional funds or private clients, we offer customized investment solutions. Our focus is on investing in high-quality assets and creating tailored investment exposures, always providing our clients with dedicated attention, energy, and passion.",
        'Ya sea sirviendo a fondos institucionales o clientes privados, ofrecemos soluciones de inversión personalizadas. Nuestro enfoque está en invertir en activos de alta calidad y crear exposiciones de inversión a medida.'
      ),
    },
    {
      title: t('Value Creation', 'Creación de Valor'),
      description: t(
        'As a full-service real estate investment company, we possess a broad range of in-house capabilities. Our services include investment management, origination, asset management, debt financing, and structuring. Additionally, we offer property management and SPV management services.',
        'Como empresa de inversión inmobiliaria de servicio completo, poseemos una amplia gama de capacidades internas. Nuestros servicios incluyen gestión de inversiones, originación, gestión de activos, financiamiento de deuda y estructuración.'
      ),
    },
  ];

  const teamMembers = [
    { name: 'Juan de la Peña', role: t('CEO & Founder', 'CEO y Fundador'), image: '/images/team/juan-de-la-pena.png' },
    { name: 'Sofia Vega de Seoane', role: t('Managing Director', 'Directora General'), image: '/images/team/sofia-vega.png' },
    { name: 'Maguel Angel Gracia Morilla', role: t('CEO & Founder', 'CEO y Fundador'), image: '/images/team/maguel-angel.jpg' },
  ];

  const historyTimeline = [
    {
      period: '2006-2011',
      description: t(
        'Amira Real Estate, founded by Mr. Juan De la Peña in 2006, quickly made its mark in the industry. Along the way, they advised and co-invested with FCC-FFP, launched their I, II & III investment vehicles, and successfully closed their first Asset Management mandate.',
        'Amira Real Estate, fundada por el Sr. Juan De la Peña en 2006, rápidamente dejó su huella en la industria. En el camino, asesoraron y co-invirtieron con FCC-FFP, lanzaron sus vehículos de inversión I, II y III, y cerraron exitosamente su primer mandato de Gestión de Activos.'
      ),
      imagePosition: 'right',
      image: '/images/about/history-2006.png',
    },
    {
      period: '2012-2017',
      description: t(
        'Amira Real Estate achieved significant milestones, including the divestment of Amira Fund I and managing assets exceeding 1 million square meters. Their investment portfolio also reached €100 million, while the team grew to over 200 employees in 2013.',
        'Amira Real Estate logró hitos significativos, incluyendo la desinversión del Fondo Amira I y la gestión de activos que superan 1 millón de metros cuadrados. Su cartera de inversiones también alcanzó los €100 millones, mientras que el equipo creció a más de 200 empleados en 2013.'
      ),
      imagePosition: 'left',
      image: '/images/about/history-2012.png',
    },
    {
      period: '2018-2021',
      description: t(
        'Amira Real Estate continued its dynamic growth and strategic initiatives. They successfully conducted transactions exceeding €63 million and made significant progress by divesting their Construction & FM business areas.',
        'Amira Real Estate continuó su crecimiento dinámico e iniciativas estratégicas. Realizaron con éxito transacciones que superaron los €63 millones y lograron un progreso significativo al desinvertir sus áreas de negocio de Construcción y FM.'
      ),
      imagePosition: 'right',
      image: '/images/about/history-2018.png',
    },
    {
      period: '2022-2023',
      description: t(
        'Amira Real Estate made significant strides with the launch of Amira Fund V and a joint venture with King Street and Mubadala. These partnerships facilitated investments and managed assets totaling €650 million.',
        'Amira Real Estate dio pasos significativos con el lanzamiento del Fondo Amira V y una empresa conjunta con King Street y Mubadala. Estas asociaciones facilitaron inversiones y activos gestionados por un total de €650 millones.'
      ),
      imagePosition: 'left',
      image: '/images/about/history-2022.png',
    },
    {
      period: t('2023 and continue', '2023 y continúa'),
      description: t(
        "Amira Real Estate made notable developments, including the launch of Amira Fund VI with a focus on their Senior Living Strategy, encompassing an investment of approximately €300 million. To complement this initiative, they established THE CLUB Living Operation Brand and assembled a dedicated team to oversee its operations. These advancements demonstrate Amira's commitment to expanding their portfolio and delivering exceptional living experiences.",
        'Amira Real Estate realizó desarrollos notables, incluyendo el lanzamiento del Fondo Amira VI con un enfoque en su Estrategia de Senior Living, que abarca una inversión de aproximadamente €300 millones. Para complementar esta iniciativa, establecieron la marca THE CLUB Living Operation y formaron un equipo dedicado para supervisar sus operaciones. Estos avances demuestran el compromiso de Amira con expandir su portafolio y ofrecer experiencias de vida excepcionales.'
      ),
      imagePosition: 'right',
      image: '/images/about/history-2023.jpg',
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-72">
        <img
          className="w-full h-full object-cover"
          src="/images/banners/about-banner.png"
          alt={t('About Banner', 'Banner Nosotros')}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-blue-900 text-6xl font-normal font-times drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]" style={{ textShadow: '0 0 20px white, 0 0 30px white, 0 0 40px white' }}>
            {t('Who We Are', 'Quiénes Somos')}
          </h1>
        </div>
      </section>

      {/* About Us Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-2 lg:px-4">
          <h2 className="text-blue-900 text-6xl font-normal font-times text-center mb-8">
            {t('About us', 'Nosotros')}
          </h2>
          <p className="text-stone-900 text-2xl font-normal font-roboto leading-9 text-center max-w-[1027px] mx-auto mb-16">
            {t(
              'The Spanish Independent Real Estate Investment & Asset Management Company specializes in managing and investing in real estate assets in Spain, providing tailored solutions for maximum returns and long-term value.',
              'La Compañía Española Independiente de Inversión y Gestión de Activos Inmobiliarios se especializa en la gestión e inversión en activos inmobiliarios en España, proporcionando soluciones a medida para máximos rendimientos y valor a largo plazo.'
            )}
          </p>

        </div>
      </section>

      {/* Highlights Section - Full Width Gray Background */}
      <section className="bg-neutral-100 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[657px_1fr] gap-12 items-start">
            {/* Image */}
            <img
              className="w-full max-w-[657px] h-[955px] object-cover rounded-xl"
              src="/images/about/local-market.png"
              alt="Amira Building"
            />

            {/* Highlights List */}
            <div className="space-y-8">
              {highlights.map((item, index) => (
                <div key={index}>
                  <h4 className="text-blue-900 text-4xl font-normal font-times mb-3 flex items-start gap-3">
                    <span className="text-blue-900">•</span>
                    {item.title}
                  </h4>
                  <p className="text-neutral-700 text-xl font-normal font-roboto leading-8 pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 lg:px-4">
          <div className="space-y-16">
            {/* Mission */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-blue-900 text-5xl font-normal font-times mb-6">
                  {t('Our Mission', 'Nuestra Misión')}
                </h3>
                <p className="text-stone-900 text-xl font-normal font-roboto leading-8">
                  {t(
                    'Our mission is to provide comprehensive real estate investment solutions that drive profitability and long-term success for our clients. We combine data-driven strategies, extensive market research, and personalized services to deliver superior returns and exceed investor expectations.',
                    'Nuestra misión es proporcionar soluciones integrales de inversión inmobiliaria que impulsen la rentabilidad y el éxito a largo plazo para nuestros clientes. Combinamos estrategias basadas en datos, investigación de mercado exhaustiva y servicios personalizados para ofrecer rendimientos superiores y superar las expectativas de los inversores.'
                  )}
                </p>
              </div>
              <img
                className="w-full max-w-[523px] h-[329px] object-cover rounded-xl"
                src="/images/about/our-mission.png"
                alt={t('Mission', 'Misión')}
              />
            </div>

            {/* Vision */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img
                className="w-full max-w-[523px] h-[329px] object-cover rounded-xl lg:order-1"
                src="/images/about/our-vision.png"
                alt={t('Vision', 'Visión')}
              />
              <div className="lg:order-2">
                <h3 className="text-blue-900 text-5xl font-normal font-times mb-6">
                  {t('Our Vision', 'Nuestra Visión')}
                </h3>
                <p className="text-stone-900 text-xl font-normal font-roboto leading-8">
                  {t(
                    'We envision a world where real estate investments are accessible, transparent, and transformative. By leveraging our expertise and innovation, we aim to revolutionize the way people invest in and manage properties, creating wealth and opportunities for our clients and communities alike.',
                    'Visualizamos un mundo donde las inversiones inmobiliarias sean accesibles, transparentes y transformadoras. Aprovechando nuestra experiencia e innovación, buscamos revolucionar la forma en que las personas invierten y gestionan propiedades, creando riqueza y oportunidades para nuestros clientes y comunidades.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 lg:px-4">
          <h2 className="text-blue-900 text-6xl font-normal font-times text-center mb-6">
            {t('Our Team', 'Nuestro Equipo')}
          </h2>
          <p className="text-stone-900 text-xl font-normal font-roboto leading-8 text-center max-w-[1145px] mx-auto mb-12">
            {t(
              'Our team is comprised of industry experts, including investment analysts, property managers, and financial professionals, who bring diverse skills and perspectives to every project. With a shared passion for real estate and a focus on delivering exceptional results, our team is dedicated to your success.',
              'Nuestro equipo está compuesto por expertos de la industria, incluyendo analistas de inversiones, administradores de propiedades y profesionales financieros, que aportan diversas habilidades y perspectivas a cada proyecto. Con una pasión compartida por los bienes raíces y un enfoque en entregar resultados excepcionales, nuestro equipo está dedicado a su éxito.'
            )}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative max-w-[354px] mx-auto w-full">
                <img
                  className="w-full h-[546px] object-cover rounded-xl"
                  src={member.image}
                  alt={member.name}
                />
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-b from-blue-900/0 to-blue-900 rounded-b-xl">
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <h4 className="text-white text-4xl font-normal font-times">{member.name}</h4>
                    <p className="text-white text-xl font-normal font-roboto">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 lg:px-4">
          <h2 className="text-blue-900 text-6xl font-normal font-times text-center mb-16">
            {t('Our History', 'Nuestra Historia')}
          </h2>

          <div className="space-y-16">
            {historyTimeline.map((item, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  item.imagePosition === 'left' ? '' : ''
                }`}
              >
                {item.imagePosition === 'right' ? (
                  <>
                    <div>
                      <h3 className="text-blue-900 text-5xl font-normal font-times mb-6">
                        {item.period}
                      </h3>
                      <p className="text-neutral-700 text-xl font-normal font-roboto leading-8">
                        {item.description}
                      </p>
                    </div>
                    <img
                      className="w-full max-w-[521px] h-[329px] object-cover rounded-xl"
                      src={item.image}
                      alt={item.period}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="w-full max-w-[521px] h-[329px] object-cover rounded-xl"
                      src={item.image}
                      alt={item.period}
                    />
                    <div>
                      <h3 className="text-blue-900 text-5xl font-normal font-times mb-6">
                        {item.period}
                      </h3>
                      <p className="text-neutral-700 text-xl font-normal font-roboto leading-8">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
