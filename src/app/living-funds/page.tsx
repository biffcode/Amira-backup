'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LivingFundsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-72">
        <img
          className="w-full h-full object-cover"
          src="/images/banners/living-funds-banner.png"
          alt={t('Living Funds Banner', 'Banner Fondos Living')}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-blue-900 text-5xl font-normal font-times" style={{ textShadow: '0 0 20px white, 0 0 30px white, 0 0 40px white' }}>
            {t('Living Funds', 'Fondos Living')}
          </h1>
        </div>
      </section>

      {/* Fund 1: Amira Prime Residential Fund (Sold) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Fund Header */}
          <div className="text-center mb-10">
            <h2 className="text-blue-900 text-3xl font-normal font-times mb-2">
              {t('Amira Prime Residential Fund (Sold)', 'Fondo Residencial Prime Amira (Vendido)')}
            </h2>
            <p className="text-neutral-700 text-base font-roboto">
              {t('RESIDENTIAL - MADRID - SOTOGRANDE - IBIZA', 'RESIDENCIAL - MADRID - SOTOGRANDE - IBIZA')}
            </p>
          </div>

          {/* Platform & Investors - Left, Image - Right */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Platform', 'Plataforma')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-6">
                {t(
                  'Amira established three Special Purpose Vehicles (SPVs) for the purpose of investing in the development, promotion, and sale of premium residential units, totaling 145 units, along with 250 parking spaces. These investments are strategically located in various regions, including the northeastern area of Madrid (Pozuelo), the city center of Madrid (Salamanca district), the southern part of Madrid (Leganés), Sotogrande (Cádiz), and Cala Conta (Ibiza).',
                  'Amira estableció tres Vehículos de Propósito Especial (SPVs) con el fin de invertir en el desarrollo, promoción y venta de unidades residenciales premium, totalizando 145 unidades, junto con 250 plazas de aparcamiento. Estas inversiones están estratégicamente ubicadas en varias regiones.'
                )}
              </p>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Investors', 'Inversores')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t(
                  'Our esteemed investors encompass High Net Worth Individuals (HNWI) within the wealth management sector, alongside Amira, who holds a 20% stake, and select Family Offices.',
                  'Nuestros estimados inversores incluyen Individuos de Alto Patrimonio Neto (HNWI) dentro del sector de gestión de patrimonios, junto con Amira, que posee una participación del 20%, y Family Offices selectos.'
                )}
              </p>
            </div>
            <img
              className="w-full h-72 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
              src="/images/funds/prime-platform.png"
              alt="Prime Residential Fund"
            />
          </div>

          {/* Strategy - Right, Images - Left */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <img
                className="w-1/2 h-80 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/prime-strategy-1.png"
                alt="Property 1"
              />
              <img
                className="w-1/2 h-80 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/prime-strategy-2.png"
                alt="Property 2"
              />
            </div>
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Strategy', 'Estrategia')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-4">
                {t(
                  'Our strategic approach involves the acquisition and development of residential assets at highly favourable prices, leveraging the economic downturn experienced in Spain. We aim to secure individual assets within our vehicles, capitalizing on the eventual economic recovery and facilitating one-by-one exits.',
                  'Nuestro enfoque estratégico implica la adquisición y desarrollo de activos residenciales a precios muy favorables, aprovechando la recesión económica experimentada en España.'
                )}
              </p>
              <p className="text-blue-900 text-xl font-roboto mb-2">{t('Fund Size:', 'Tamaño del Fondo:')} €66,000,000</p>
              <p className="text-blue-900 text-sm font-bold font-roboto mb-2">{t('Maturity:', 'Vencimiento:')} 5-7 {t('years', 'años')}</p>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t('Exit Plan:', 'Plan de Salida:')} {t('Targeting a 75% exit between 2019 and 2020.', 'Objetivo de salida del 75% entre 2019 y 2020.')}
              </p>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t('Performance Objective:', 'Objetivo de Rendimiento:')} {t('MoIC exceeding 2.6x', 'MoIC superior a 2.6x')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fund 2: Amira Student Living Fund 1 (Sold) */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Fund Header */}
          <div className="text-center mb-10">
            <h2 className="text-blue-900 text-3xl font-normal font-times mb-2">
              {t('Amira Student Living Fund 1 (Sold)', 'Fondo Amira Student Living 1 (Vendido)')}
            </h2>
            <p className="text-neutral-700 text-base font-roboto">
              {t('STUDENT HOUSING FUND 1 - MADRID - MALAGA - SEVILLA', 'FONDO DE VIVIENDA ESTUDIANTIL 1 - MADRID - MÁLAGA - SEVILLA')}
            </p>
          </div>

          {/* Platform & Investors - Left, Images - Right */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Platform', 'Plataforma')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-6">
                {t(
                  'Amira (50%) and Altamar Capital Partners (50%) have joined forces in the establishment of a strategic Joint Venture (JV) dedicated to investments in the student accommodation asset class. The resultant entity operates as a SOCIMI listed on the MaB.',
                  'Amira (50%) y Altamar Capital Partners (50%) han unido fuerzas en el establecimiento de una Joint Venture (JV) estratégica dedicada a inversiones en la clase de activos de alojamiento estudiantil.'
                )}
              </p>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Investors', 'Inversores')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t(
                  'Our investor base comprises prominent wealth management entities, including High Net Worth Individuals (HNWI) represented by Orienta Capital, in addition to participation from Amira, Family Offices, and Altamar.',
                  'Nuestra base de inversores comprende entidades prominentes de gestión de patrimonios, incluyendo HNWI representados por Orienta Capital, además de la participación de Amira, Family Offices y Altamar.'
                )}
              </p>
            </div>
            <div className="flex gap-4">
              <img
                className="w-2/3 h-72 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/student-platform-1.png"
                alt="Student Housing 1"
              />
              <img
                className="w-1/3 h-72 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/student-platform-2.png"
                alt="Student Housing 2"
              />
            </div>
          </div>

          {/* Images - Left, Strategy - Right */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <img
                className="w-1/3 h-96 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/student-strategy-1.png"
                alt="Property 1"
              />
              <img
                className="w-2/3 h-96 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/student-strategy-2.png"
                alt="Property 2"
              />
            </div>
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Strategy', 'Estrategia')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-4">
                {t(
                  'Our overarching strategy centers on constructing a diversified portfolio and overseeing the operational aspects, facilitated by Hubr, encompassing a substantial inventory of over 1,000 student beds.',
                  'Nuestra estrategia general se centra en construir un portafolio diversificado y supervisar los aspectos operativos, facilitado por Hubr, que abarca más de 1,000 camas estudiantiles.'
                )}
              </p>
              <p className="text-blue-900 text-xl font-roboto mb-2">{t('Fund Size:', 'Tamaño del Fondo:')} €100,000,000</p>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-2">
                {t('A total commitment of €100,000,000, with €54,000,000 already invested as of January 2020.', 'Un compromiso total de €100,000,000, con €54,000,000 ya invertidos a enero de 2020.')}
              </p>
              <p className="text-blue-900 text-sm font-bold font-roboto mb-2">{t('Maturity:', 'Vencimiento:')} 5-7 {t('years', 'años')}</p>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t('Exit Plan:', 'Plan de Salida:')} {t('Anticipating an IPO exit in 2021.', 'Anticipando una salida IPO en 2021.')}
              </p>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t('Performance Objective:', 'Objetivo de Rendimiento:')} {t('MoIC exceeding 1.92x, net IRR of 22.9%', 'MoIC superior a 1.92x, TIR neta del 22.9%')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fund 3: Amira Student Living Fund II (Active) */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Fund Header */}
          <div className="text-center mb-10">
            <h2 className="text-blue-900 text-3xl font-normal font-times mb-2">
              {t('Amira Student Living Fund II (Active)', 'Fondo Amira Student Living II (Activo)')}
            </h2>
            <p className="text-neutral-700 text-base font-roboto">
              {t('STUDENT HOUSING FUND II', 'FONDO DE VIVIENDA ESTUDIANTIL II')}
            </p>
          </div>

          {/* Platform & Investors - Left, Image - Right */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Platform', 'Plataforma')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-6">
                {t(
                  'Amira (50%) and RG Capital, in partnership with Medinvest Asset Management (50%), have jointly established Medinvest Asset Management. This entity is dedicated to investments in the student accommodation asset class.',
                  'Amira (50%) y RG Capital, en asociación con Medinvest Asset Management (50%), han establecido conjuntamente Medinvest Asset Management.'
                )}
              </p>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Investors', 'Inversores')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t(
                  'Our esteemed investors include King Street, Mubadala, and Medinvest, showcasing our commitment to collaborating with prominent entities in the investment arena.',
                  'Nuestros estimados inversores incluyen King Street, Mubadala y Medinvest, demostrando nuestro compromiso de colaborar con entidades prominentes.'
                )}
              </p>
            </div>
            <img
              className="w-full h-64 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
              src="/images/funds/student-fund-ii-platform.png"
              alt="Student Living Fund II"
            />
          </div>

          {/* Images - Left, Strategy - Right */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <img
                className="w-1/2 h-[400px] object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/student-fund-ii-strategy-1.png"
                alt="Property 1"
              />
              <img
                className="w-1/2 h-[400px] object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/student-fund-ii-strategy-2.png"
                alt="Property 2"
              />
            </div>
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Strategy', 'Estrategia')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-4">
                {t(
                  'Our strategic focus centers on building a robust portfolio and effectively managing operations through our specialized platform, BRAVO!. We are dedicated to overseeing a substantial portfolio, comprising over 5,000 student beds.',
                  'Nuestro enfoque estratégico se centra en construir un portafolio robusto y gestionar eficazmente las operaciones a través de nuestra plataforma especializada, BRAVO!.'
                )}
              </p>
              <p className="text-blue-900 text-xl font-roboto mb-2">{t('Fund Size:', 'Tamaño del Fondo:')} €400,000,000</p>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-2">
                {t('We have secured a total commitment of €400,000,000, with €100,000,000 already invested as of February 2023.', 'Hemos asegurado un compromiso total de €400,000,000, con €100,000,000 ya invertidos a febrero de 2023.')}
              </p>
              <p className="text-blue-900 text-sm font-roboto mb-2">{t('Maturity:', 'Vencimiento:')} {t('Details are confidential.', 'Los detalles son confidenciales.')}</p>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t('Performance Objective:', 'Objetivo de Rendimiento:')} {t('MoIC exceeding 1.92x, net IRR of 20%', 'MoIC superior a 1.92x, TIR neta del 20%')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fund 4: Amira Senior Living Fund */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Fund Header */}
          <div className="text-center mb-10">
            <h2 className="text-blue-900 text-3xl font-normal font-times mb-2">
              {t("Amira Senior Living Fund (Launch Q4 '23)", "Fondo Amira Senior Living (Lanzamiento Q4 '23)")}
            </h2>
            <p className="text-neutral-700 text-base font-roboto">
              {t('INDEPENDENT SENIOR LIVING', 'SENIOR LIVING INDEPENDIENTE')}
            </p>
          </div>

          {/* Platform, Investors, Strategy - Left, Image - Right */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Platform:', 'Plataforma:')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-4">
                {t('Amira is the sole owner of this venture, holding a 100% stake in this endeavour.', 'Amira es el único propietario de esta empresa, manteniendo una participación del 100%.')}
              </p>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Investors:', 'Inversores:')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-4">
                {t('Our investor base consists of a private investor providing bridge financing, aligning with our strategic objectives.', 'Nuestra base de inversores consiste en un inversor privado que proporciona financiamiento puente.')}
              </p>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Strategy', 'Estrategia')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t(
                  'Our strategic focus involves assembling and managing a diverse portfolio comprising over 1,000 apartments designed for independent seniors aged 55 and above.',
                  'Nuestro enfoque estratégico implica ensamblar y gestionar un portafolio diverso que comprende más de 1,000 apartamentos diseñados para adultos mayores independientes de 55 años o más.'
                )}
              </p>
            </div>
            <img
              className="w-full h-96 object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
              src="/images/funds/senior-platform.png"
              alt="Senior Living Fund"
            />
          </div>

          {/* Images - Left, 1st Phase Details - Right */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <img
                className="w-1/2 h-[400px] object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/senior-phase-1.png"
                alt="Benidorm 1"
              />
              <img
                className="w-1/2 h-[400px] object-cover rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
                src="/images/funds/senior-phase-2.png"
                alt="Benidorm 2"
              />
            </div>
            <div>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('1st Phase: Benidorm', '1ra Fase: Benidorm')}</h3>
              <p className="text-blue-900 text-sm font-bold font-roboto mb-1">{t('Initial Emphasis on Coastal Regions, Expansion into Urban Centers:', 'Énfasis Inicial en Regiones Costeras, Expansión a Centros Urbanos:')}</p>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-4">
                {t('We are initially targeting coastal regions and subsequently expanding into prime urban centers.', 'Inicialmente nos enfocamos en regiones costeras y posteriormente expandimos a centros urbanos principales.')}
              </p>
              <p className="text-blue-900 text-xl font-roboto mb-2">{t('Fund Size:', 'Tamaño del Fondo:')} €100,000,000</p>
              <p className="text-stone-900 text-sm font-roboto leading-6 mb-2">
                {t('Our fund boasts a substantial size of €100,000,000.', 'Nuestro fondo cuenta con un tamaño sustancial de €100,000,000.')}
              </p>
              <p className="text-blue-900 text-sm font-bold font-roboto mb-4">
                {t('Maturity: The investment horizon spans 5 to 7 years, with no mandatory exit requirement.', 'Vencimiento: El horizonte de inversión abarca de 5 a 7 años, sin requisito de salida obligatoria.')}
              </p>
              <h3 className="text-blue-900 text-3xl font-normal font-times mb-2">{t('Exit Strategy:', 'Estrategia de Salida:')}</h3>
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t('We anticipate achieving a MoIC of approximately 2.1x, accompanied by an impressive IRR of 20%.', 'Anticipamos lograr un MoIC de aproximadamente 2.1x, acompañado de una TIR impresionante del 20%.')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
