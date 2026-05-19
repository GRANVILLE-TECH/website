import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useSEO from '../hooks/useSEO';

export default function InnovationsPage() {
  const { t } = useTranslation();

  useSEO(
    t("innovations.title", "Our Innovations"),
    t("innovations.subtitle", "Pioneering transformative AI solutions that redefine industries and empower a smarter tomorrow.")
  );

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">{t("innovations.pageTitle", "Granville-Tech Innovations")}</h1>
      <p className="text-lg text-gray-700">{t("innovations.pageSubtitle", "Discover the latest AI innovations and projects.")}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="border rounded-xl p-6 hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold">{t("innovations.placeholderTitle", { defaultValue: `Innovation ${i}`, i })}</h2>
            <p className="text-gray-600 mt-2">{t("innovations.placeholderDesc", { defaultValue: `Brief description of innovation project ${i}.`, i })}</p>
          </div>
        ))}
      </div>

      <Link to="/" className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded shadow">
        {t("innovations.backToHome", "Back to Home")}
      </Link>
    </div>
  );
}
