import { useTranslation } from "react-i18next";
import { FaPlug, FaSnowflake, FaVideo } from "react-icons/fa";

export default function OMTechnicalServices() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const services = [
    {
      icon: <FaPlug size={40} className="mx-auto mb-4 text-black" />,
      title: t("lightingElectricity"),
      desc: t("lightingElectricityDesc"),
    },
    {
      icon: <FaSnowflake size={40} className="mx-auto mb-4 text-black" />,
      title: t("airConditioning"),
      desc: t("airConditioningDesc"),
    },
    {
      icon: <FaVideo size={40} className="mx-auto mb-4 text-black" />,
      title: t("fireSecuritySystems"),
      desc: t("fireSecuritySystemsDesc"),
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div
        className={`max-w-6xl mx-auto px-4 text-center ${
          isRTL ? "text-right" : "text-left"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Section Tag */}
        <div className="text-center">
        <span className="pre-heading-tag">
          {t("technicalServices")}
        </span>

        {/* Section Heading */}
        <h2 className="big-heading-1">
          {t("omTechnicalServices")}
        </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition-all"
            >
              {service.icon}
              <h3 className="small-heading-1">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
