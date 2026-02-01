'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('Thank you for your message! We will get back to you soon.', '¡Gracias por su mensaje! Nos pondremos en contacto pronto.'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-72">
        <img
          className="w-full h-full object-cover"
          src="/images/banners/contact-banner.png"
          alt={t('Contact Banner', 'Banner de Contacto')}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-blue-900 text-5xl font-normal font-times" style={{ textShadow: '0 0 20px white, 0 0 30px white, 0 0 40px white' }}>
            {t('Contact', 'Contacto')}
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-blue-900 text-4xl font-normal font-times mb-6">
                {t('Contact us', 'Contáctenos')}
              </h2>
              <p className="text-neutral-700 text-base font-roboto leading-6 mb-8">
                {t(
                  "We're just a message away. Get in touch with us, and we'll be glad to assist you promptly. Your satisfaction is our priority. Contact us today and let's discuss your real estate investment needs.",
                  'Estamos a solo un mensaje de distancia. Póngase en contacto con nosotros y estaremos encantados de ayudarle. Su satisfacción es nuestra prioridad. Contáctenos hoy y discutamos sus necesidades de inversión inmobiliaria.'
                )}
              </p>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="space-y-4">
                  <div className="flex">
                    <span className="text-neutral-700 text-base font-roboto w-24">{t('Email:', 'Correo:')}</span>
                    <span className="text-neutral-700 text-base font-roboto">contact@amirainvest.es</span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-700 text-base font-roboto w-24">{t('Phone:', 'Teléfono:')}</span>
                    <span className="text-neutral-700 text-base font-roboto">+34 91 399 29 75</span>
                  </div>
                  <div className="flex">
                    <span className="text-neutral-700 text-base font-roboto w-24">{t('Address:', 'Dirección:')}</span>
                    <span className="text-neutral-700 text-base font-roboto">C/ Ayala 20, 28001 Madrid</span>
                  </div>
                </div>
              </div>

              <p className="text-neutral-700 text-sm font-roboto leading-6">
                {t(
                  'Contact us today to start your journey towards successful real estate investments. We look forward to hearing from you!',
                  '¡Contáctenos hoy para comenzar su viaje hacia inversiones inmobiliarias exitosas. Esperamos tener noticias suyas!'
                )}
              </p>
            </div>

            {/* Right Column - Form in Gray Box */}
            <div className="bg-neutral-100 rounded-xl p-8">
              <h2 className="text-blue-900 text-4xl font-normal font-times mb-4">
                {t('Get In Touch', 'Ponte en Contacto')}
              </h2>
              <p className="text-neutral-700 text-base font-roboto leading-6 mb-6">
                {t(
                  'Contact us today to start your journey towards successful real estate investments. We look forward to hearing from you!',
                  '¡Contáctenos hoy para comenzar su viaje hacia inversiones inmobiliarias exitosas. Esperamos tener noticias suyas!'
                )}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={t('First Name', 'Nombre')}
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base font-roboto placeholder-neutral-400 focus:outline-none focus:border-blue-900"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={t('Last Name', 'Apellido')}
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base font-roboto placeholder-neutral-400 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder={t('Mail Address', 'Correo Electrónico')}
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base font-roboto placeholder-neutral-400 focus:outline-none focus:border-blue-900"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder={t('Subject line', 'Asunto')}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base font-roboto placeholder-neutral-400 focus:outline-none focus:border-blue-900"
                />

                <textarea
                  name="message"
                  rows={6}
                  placeholder={t('Message', 'Mensaje')}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base font-roboto placeholder-neutral-400 focus:outline-none focus:border-blue-900 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 rounded-xl text-xl font-roboto hover:bg-blue-800 transition-colors"
                >
                  {t('Send', 'Enviar')}
                </button>
              </form>

              <p className="text-neutral-700 text-base font-roboto leading-6 mt-6">
                {t(
                  "We appreciate your interest in Amira. Fill out the form, and we'll be in touch soon to help you with your real estate investment goals.",
                  'Agradecemos su interés en Amira. Complete el formulario y nos pondremos en contacto pronto para ayudarle con sus objetivos de inversión inmobiliaria.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
