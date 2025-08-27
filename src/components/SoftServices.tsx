// src/components/SoftServices.js

import { useTranslation } from "react-i18next";

const services = Array(4).fill({
  icon: "https://img.icons8.com/ios-filled/50/000000/paint-roller.png",
  titleKey: "paintingTitle",
  descKey: "paintingDesc",
});

export default function SoftServices() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 text-gray-800 py-10">
      <div className="text-center">
        <div className="pre-heading-tag">{t("softServices")}</div>
        <h2 className="big-heading-1">
        {t("mainTitle")}
      </h2>
      </div>

      

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10 px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-sm text-center border"
          >
            <img
              src="assets/images/icon1.png"
              alt="icon"
              className="mx-auto mb-4 w-10 h-10"
            />
            <h3 className="small-heading-1">
              {t(service.titleKey)}
            </h3>
            <p className="text-sm text-gray-600">{t(service.descKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
