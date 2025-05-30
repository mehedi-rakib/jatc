'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function CircularPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Image */}
      <div className="hidden relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/cerular.jpg"
          alt={t('onlineLearning.circulars.circular.title')}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          {t('onlineLearning.circulars.circular.title')}
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6 text-gray-600">
            {t('onlineLearning.circulars.circular.description')}
          </p>

          {/* Position Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {t('onlineLearning.circulars.circular.positions')}
            </h2>
            <p className="text-gray-600">– {t('onlineLearning.circulars.circular.positionCount')}</p>
          </div>

          {/* Qualifications */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {t('onlineLearning.circulars.circular.qualifications.title')}
            </h2>
            <ul className="list-none space-y-2">
              {['qual1', 'qual2', 'qual3', 'qual4'].map((key) => (
                <li key={key} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">
                    {t(`onlineLearning.circulars.circular.qualifications.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Salary */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {t('onlineLearning.circulars.circular.salary.title')}
            </h2>
            <p className="text-gray-600">{t('onlineLearning.circulars.circular.salary.details')}</p>
          </div>

          {/* Working Hours */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {t('onlineLearning.circulars.circular.workingHours.title')}
            </h2>
            <p className="text-gray-600">{t('onlineLearning.circulars.circular.workingHours.details')}</p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {t('onlineLearning.circulars.circular.contact.title')}
            </h2>
            <div className="space-y-3">
              <p className="text-gray-600">
                <strong>{t('onlineLearning.circulars.circular.contact.email')}:</strong>{' '}
                <a href="mailto:jalc.bd2024@gmail.com" className="text-blue-600 hover:underline">
                  jalc.bd2024@gmail.com
                </a>
              </p>
              <p className="text-gray-600">
                <strong>{t('onlineLearning.circulars.circular.contact.address')}:</strong>{' '}
                {t('onlineLearning.circulars.circular.contact.addressDetails')}
              </p>
              <p className="text-gray-600">
                <strong>{t('onlineLearning.circulars.circular.contact.phone')}:</strong>{' '}
                <a href="tel:+8801715458036" className="text-blue-600 hover:underline">01715-458036</a>
                ,{' '}
                <a href="tel:+8801325661767" className="text-blue-600 hover:underline">01325-661767</a>{' '}
                ({t('onlineLearning.circulars.circular.contact.whatsapp')})
              </p>
              <p className="text-gray-600">
                <strong>{t('onlineLearning.circulars.circular.contact.callTime')}:</strong>{' '}
                {t('onlineLearning.circulars.circular.contact.callTimeDetails')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}