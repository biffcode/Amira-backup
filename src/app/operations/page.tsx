'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function OperationsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-72">
        <img
          className="w-full h-full object-cover"
          src="/images/banners/operations-banner.png"
          alt={t('Operations Banner', 'Banner Operaciones')}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-blue-900 text-5xl font-normal font-times" style={{ textShadow: '0 0 20px white, 0 0 30px white, 0 0 40px white' }}>
            {t('Operations', 'Operaciones')}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-blue-900 text-3xl font-normal font-times mb-2">
            {t('OPERATING LIVING SECTOR EXPERIENCE', 'EXPERIENCIA OPERATIVA EN EL SECTOR LIVING')}
          </h2>
          <p className="text-black text-lg font-roboto">
            {t('A first class Real Estate partner in the living asset class.', 'Un socio inmobiliario de primera clase en la clase de activos living.')}
          </p>
        </div>
      </section>

      {/* Three Brand Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* HUBR Card */}
            <div className="bg-zinc-100 rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)] p-8 text-center">
              <img className="w-40 h-24 mx-auto mb-6 rounded-[20px]" src="/images/logos/hubr-logo.png" alt="HUBR Logo" />
              <h3 className="text-blue-900 text-xl font-normal font-times uppercase leading-9 mb-2">
                {t('+700 BEDS UNDER', '+700 CAMAS BAJO')}<br/>{t('MANAGEMENT', 'GESTIÓN')}
              </h3>
              <p className="text-black text-sm font-roboto leading-6 mb-4">
                {t('Build up Student housing portfolio operated by HUBR STUDENTS (+700 beds in pipeline)', 'Desarrollo de portafolio de vivienda estudiantil operado por HUBR STUDENTS (+700 camas en pipeline)')}
              </p>
              <p className="text-blue-900 text-base font-bold font-roboto leading-8 mb-2">
                {t('First in Class', 'Primera Clase')}<br/>{t('operating Team', 'Equipo operativo')}
              </p>
              <p className="text-blue-900 text-base font-bold font-roboto leading-8">
                {t('+7.5% annual yield', '+7.5% rendimiento anual')}
              </p>
              <p className="text-black text-sm font-roboto">{t('stable annual returns', 'rendimientos anuales estables')}</p>
            </div>

            {/* BRAVO! Card */}
            <div className="bg-zinc-100 rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)] p-8 text-center">
              <img className="w-32 h-28 mx-auto mb-6" src="/images/logos/bravo-logo.png" alt="BRAVO Logo" />
              <h3 className="text-blue-900 text-xl font-normal font-times uppercase leading-9 mb-2">
                {t('+2000 BEDS UNDER', '+2000 CAMAS BAJO')}<br/>{t('MANAGEMENT', 'GESTIÓN')}
              </h3>
              <p className="text-black text-sm font-roboto leading-6 mb-4">
                {t('Build up Student housing portfolio operated by BRAVO STUDENTS (+3000 beds in pipeline)', 'Desarrollo de portafolio de vivienda estudiantil operado por BRAVO STUDENTS (+3000 camas en pipeline)')}
              </p>
              <p className="text-blue-900 text-base font-bold font-roboto leading-8 mb-2">
                {t('First in Class', 'Primera Clase')}<br/>{t('operating Team', 'Equipo operativo')}
              </p>
              <p className="text-blue-900 text-base font-bold font-roboto leading-8">
                {t('+7.1% annual yield', '+7.1% rendimiento anual')}
              </p>
              <p className="text-black text-sm font-roboto">{t('stable annual returns', 'rendimientos anuales estables')}</p>
            </div>

            {/* The Club Card */}
            <div className="bg-zinc-100 rounded-xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)] p-8 text-center">
              <img className="w-32 h-32 mx-auto mb-4" src="/images/logos/theclub-logo.png" alt="The Club Logo" />
              <h3 className="text-blue-900 text-xl font-normal font-times uppercase leading-9 mb-2">
                {t('+700 UNITS UNDER', '+700 UNIDADES BAJO')}<br/>{t('MANAGEMENT (COASTAL', 'GESTIÓN (PIPELINE')}<br/>{t('PIPELINE)', 'COSTERO)')}
              </h3>
              <p className="text-black text-sm font-roboto leading-6 mb-4">
                {t('Senior Living Operator for build up Senior Living portfolio (+700 units in Coastal pipeline)', 'Operador de Senior Living para desarrollo de portafolio Senior Living (+700 unidades en pipeline costero)')}
              </p>
              <p className="text-blue-900 text-base font-bold font-roboto leading-8 mb-1">
                {t('First in Class', 'Primera Clase')}<br/>{t('operating Team', 'Equipo operativo')}
              </p>
              <p className="text-black text-sm font-roboto mb-2">{t('Experienced Best in Class trained team', 'Equipo experimentado de primera clase')}</p>
              <p className="text-blue-900 text-base font-bold font-roboto leading-8">
                {t('+10% annual yield', '+10% rendimiento anual')}
              </p>
              <p className="text-black text-sm font-roboto">{t('stable annual returns', 'rendimientos anuales estables')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HUBR Section */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* HUBR Header */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <img className="w-52 h-28 rounded-[20px]" src="/images/logos/hubr-logo.png" alt="HUBR Logo" />
            <div className="w-px h-20 bg-neutral-400"></div>
            <div className="text-blue-900 text-base font-normal font-times uppercase leading-8 tracking-[7.40px]">
              {t('Student', 'Propiedades')}<br/>{t('Properties', 'Estudiantiles')}<br/>{t('Spain', 'España')}
            </div>
          </div>
          <p className="text-neutral-700 text-sm font-roboto text-center mb-10">
            {t('Student accommodation platform build-up', 'Desarrollo de plataforma de alojamiento estudiantil')}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-10">
            <div className="text-center">
              <p className="text-blue-900 text-4xl font-normal font-times mb-1">3/3</p>
              <p className="text-black text-base font-roboto">{t('Assets / Cities', 'Activos / Ciudades')}</p>
            </div>
            <div className="text-center">
              <p className="text-blue-900 text-4xl font-normal font-times mb-1">676 /726</p>
              <p className="text-black text-base font-roboto">{t('Rooms / Beds', 'Habitaciones / Camas')}</p>
            </div>
            <div className="text-center">
              <p className="text-blue-900 text-4xl font-normal font-times mb-1">~18k</p>
              <p className="text-black text-base font-roboto">{t('m2 (Buildable Area)', 'm2 (Área Construible)')}</p>
            </div>
            <div className="text-center">
              <p className="text-blue-900 text-4xl font-normal font-times mb-1">Socimi</p>
              <p className="text-black text-base font-roboto">{t('Structuring', 'Estructuración')}</p>
            </div>
            <div className="text-center">
              <p className="text-blue-900 text-4xl font-normal font-times mb-1">{t('Team', 'Equipo')}</p>
              <p className="text-black text-base font-roboto">{t('Exclusively Dedicated', 'Exclusivamente Dedicado')}</p>
            </div>
            <div className="text-center">
              <p className="text-blue-900 text-4xl font-normal font-times mb-1">1.92x /22.9%</p>
              <p className="text-black text-base font-roboto">{t('Net Returns', 'Rendimientos Netos')}</p>
            </div>
          </div>

          {/* Property Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img className="w-full h-56 object-cover rounded-xl " src="/images/properties/hubr-property-1.png" alt="HUBR Property 1" />
            <img className="w-full h-56 object-cover rounded-xl " src="/images/properties/hubr-property-2.png" alt="HUBR Property 2" />
            <img className="w-full h-56 object-cover rounded-xl " src="/images/properties/hubr-property-3.png" alt="HUBR Property 3" />
            <img className="w-full h-56 object-cover rounded-xl " src="/images/properties/hubr-property-4.png" alt="HUBR Property 4" />
          </div>
        </div>
      </section>

      {/* BRAVO! Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Features */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img className="w-32 h-28" src="/images/logos/bravo-logo.png" alt="BRAVO Logo" />
                <img className="w-28 h-28" src="/images/logos/bravo-icon.png" alt="BRAVO Icon" />
              </div>
              <ul className="space-y-4 text-black text-sm font-roboto leading-6 mb-8">
                <li>▪ {t('Highly selective platform of top-quality assets', 'Plataforma altamente selectiva de activos de primera calidad')}</li>
                <li>▪ {t('Vibrant micro locations within Spanish key university cities', 'Ubicaciones micro vibrantes dentro de las principales ciudades universitarias españolas')}</li>
                <li>▪ {t('Efficient lay-outs, modern designs and quality fit-out standards', 'Diseños eficientes, diseños modernos y estándares de acabado de calidad')}</li>
                <li>▪ {t('Excellent amenities with attractive common areas and wide range of services', 'Excelentes amenidades con atractivas áreas comunes y amplia gama de servicios')}</li>
                <li>▪ {t('Experience warm and cool living atmosphere', 'Experimenta una atmósfera de vida cálida y fresca')}</li>
                <li>▪ {t('Eco-friendly, LEED, BREEAM Excellent or Very Good certificates', 'Ecológico, certificados LEED, BREEAM Excelente o Muy Bueno')}</li>
              </ul>
              <div className="text-center">
                <p className="text-blue-900 text-4xl font-normal font-times">1.613 / 1.702</p>
                <p className="text-black text-base font-roboto">{t('ROOMS / BEDS', 'HABITACIONES / CAMAS')}</p>
              </div>
            </div>

            {/* Right Column - Location Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Granada */}
              <div className="text-center">
                <img className="w-full h-36 object-cover rounded-xl  mb-3" src="/images/locations/granada.png" alt="Granada" />
                <h4 className="text-blue-900 text-3xl font-normal font-times">GRANADA!</h4>
                <p className="text-black text-base font-roboto">{t('Opened Sept 22', 'Abierto Sept 22')}</p>
                <p className="text-green-800 text-sm font-roboto">254 {t('Rooms', 'Habitaciones')} &nbsp; 308 {t('Beds', 'Camas')}</p>
              </div>
              {/* Murcia */}
              <div className="text-center">
                <img className="w-full h-36 object-cover rounded-xl  mb-3" src="/images/locations/murcia.png" alt="Murcia" />
                <h4 className="text-blue-900 text-3xl font-normal font-times">MURCIA!</h4>
                <p className="text-black text-base font-roboto">{t('Opening Sept 24', 'Apertura Sept 24')}</p>
                <p className="text-green-800 text-sm font-roboto">626 {t('Rooms', 'Habitaciones')} &nbsp; 626 {t('Beds', 'Camas')}</p>
              </div>
              {/* Sevilla */}
              <div className="text-center">
                <img className="w-full h-36 object-cover rounded-xl  mb-3" src="/images/locations/sevilla.png" alt="Sevilla" />
                <h4 className="text-blue-900 text-3xl font-normal font-times">SEVILLA!</h4>
                <p className="text-black text-base font-roboto">{t('Opening Sept 24', 'Apertura Sept 24')}</p>
                <p className="text-green-800 text-sm font-roboto">152 {t('Rooms', 'Habitaciones')} &nbsp; 163 {t('Beds', 'Camas')}</p>
              </div>
              {/* Salamanca */}
              <div className="text-center">
                <img className="w-full h-36 object-cover rounded-xl  mb-3" src="/images/locations/salamanca.png" alt="Salamanca" />
                <h4 className="text-blue-900 text-3xl font-normal font-times">SALAMANCA!</h4>
                <p className="text-black text-base font-roboto">{t('Opening Sept 24', 'Apertura Sept 24')}</p>
                <p className="text-green-800 text-sm font-roboto">581 {t('Rooms', 'Habitaciones')} &nbsp; 605 {t('Beds', 'Camas')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE B! RAND Web and Social Media */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-blue-900 text-4xl font-normal font-times text-center mb-8">
            THE B! RAND {t('Web and Social Media', 'Web y Redes Sociales')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <img className="w-full h-80 object-cover rounded-xl " src="/images/social/brand-1.png" alt="Brand Media 1" />
            <img className="w-full h-80 object-cover rounded-xl " src="/images/social/brand-2.png" alt="Brand Media 2" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img className="w-full h-64 object-cover rounded-xl " src="/images/social/brand-3.png" alt="Social 1" />
            <img className="w-full h-64 object-cover rounded-xl " src="/images/social/brand-4.png" alt="Social 2" />
            <img className="w-full h-64 object-cover rounded-xl " src="/images/social/brand-5.png" alt="Social 3" />
            <img className="w-full h-64 object-cover rounded-xl " src="/images/social/brand-6.png" alt="Social 4" />
          </div>
        </div>
      </section>

      {/* The Club Section */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-10">
            {/* The Club Info */}
            <div>
              <img className="w-44 h-44 rounded-xl mb-4" src="/images/logos/theclub-logo.png" alt="The Club Logo" />
              <p className="text-stone-900 text-sm font-roboto leading-6">
                {t(
                  "The Club Senior Community is a place where older adults can enjoy a comfortable and active lifestyle. Whether you are looking for independent living, assisted living, or memory care, we have the right option for you. Our community offers spacious apartments, delicious dining, engaging activities, and personalized care. At The Club Senior Community, you will find a friendly and supportive environment that will make you feel at home.",
                  'The Club Senior Community es un lugar donde los adultos mayores pueden disfrutar de un estilo de vida cómodo y activo. Ya sea que busque vida independiente, vida asistida o cuidado de memoria, tenemos la opción correcta para usted.'
                )}
              </p>
            </div>

            {/* ROOMS */}
            <div>
              <h4 className="text-blue-900 text-3xl font-normal font-times mb-4">{t('ROOMS', 'HABITACIONES')}</h4>
              <ul className="space-y-2 text-stone-900 text-base font-roboto leading-10">
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('1/2 Bedroom', '1/2 Dormitorios')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('2 Bathroom', '2 Baños')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Kitchen', 'Cocina')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Livingroom', 'Sala de Estar')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Dining Area', 'Área de Comedor')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Dress Room', 'Vestidor')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Kitchen', 'Cocina')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Terrace / Garden', 'Terraza / Jardín')}</li>
              </ul>
            </div>

            {/* COMMON AREAS */}
            <div>
              <h4 className="text-blue-900 text-3xl font-normal font-times mb-4">{t('COMMON AREAS', 'ÁREAS COMUNES')}</h4>
              <ul className="space-y-2 text-stone-900 text-base font-roboto leading-10">
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Restaurant', 'Restaurante')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Gardens & Pool', 'Jardines y Piscina')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Reception / Lobby', 'Recepción / Lobby')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Social Club', 'Club Social')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Lounge/Activities Rooms', 'Salas de Descanso/Actividades')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Health Center', 'Centro de Salud')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Gym & Spa', 'Gimnasio y Spa')}</li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-blue-900 text-3xl font-normal font-times mb-4">{t('SERVICES', 'SERVICIOS')}</h4>
              <ul className="space-y-2 text-stone-900 text-base font-roboto leading-10">
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Utilities', 'Servicios Públicos')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Internet / WiFi', 'Internet / WiFi')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Maintenance', 'Mantenimiento')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Cleaning (2/Week)', 'Limpieza (2/Semana)')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Laundry (1/Week)', 'Lavandería (1/Semana)')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Gardener', 'Jardinero')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Reception (24h / 7)', 'Recepción (24h / 7)')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Security / Concierge (24h / 7)', 'Seguridad / Conserjería (24h / 7)')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Nursery (8h / 6)', 'Enfermería (8h / 6)')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Parking', 'Estacionamiento')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Storage', 'Almacenamiento')}</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">☑</span> {t('Shuttle', 'Transporte')}</li>
              </ul>
            </div>
          </div>

          {/* The Club Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img className="w-full h-44 object-cover rounded-xl " src="/images/rooms/club-1.png" alt="The Club 1" />
            <img className="w-full h-44 object-cover rounded-xl " src="/images/rooms/club-2.png" alt="The Club 2" />
            <img className="w-full h-44 object-cover rounded-xl " src="/images/rooms/club-3.png" alt="The Club 3" />
            <img className="w-full h-44 object-cover rounded-xl " src="/images/rooms/club-4.png" alt="The Club 4" />
          </div>
        </div>
      </section>
    </div>
  );
}
