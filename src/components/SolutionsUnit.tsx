import { useTranslation } from "react-i18next";
import { BsChevronRight } from "react-icons/bs";

export default function SolutionsUnit() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const services = [
    { title: t("connectiveMaintenance"), desc: t("serviceDesc") },
    { title: t("energyManagement"), desc: t("serviceDesc") },
    { title: t("predictiveMaintenance"), desc: t("serviceDesc") },
    { title: t("evaluatingAlternativeSolutions"), desc: t("serviceDesc") },
    { title: t("emergencyMaintenance"), desc: t("serviceDesc") },
    { title: t("plannedMaintenance"), desc: t("serviceDesc") },
  ];

  const stats = [
    { value: "30", label: t("perYear"), sub: t("keepFullFaith") },
    { value: "15", label: t("perAddress"), sub: t("consultingBranch") },
    { value: "86", label: t("perConsultant"), sub: t("professionalDedicated") },
    { value: "1k", label: t("perClients"), sub: t("happyTrustCustomers") },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`bg-white rounded-2xl p-8 shadow-md ${
            isRTL ? "text-right" : "text-left"
          }`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Heading */}
          <h2 className="big-heading-1">
            {t("solutionsUnit")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Text & Services */}
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                {t("solutionsUnitIntro")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <BsChevronRight className="text-primary text-[20px] font-bold" />
                    <div>
                      <h4 className="small-heading-2">
                        {service.title}
                      </h4>
                      <p className=" text-gray-600 text-[12px]">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <img
              src="assets/images/solutions-unit.png"
              alt={t("solutionsImageAlt")}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>

          {/* Divider */}
          <hr className="my-10 border-gray-300" />

          {/* Stats */}
          <h3 className="big-heading-2">
              {t("trustedManagement")}
            </h3>
          <div className="text-center">
            

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h4 className="text-3xl font-bold text-black">
                    {stat.value}
                    <span className="text-gray-500 text-sm font-normal">
                      {stat.label}
                    </span>
                  </h4>
                  <p className="text-sm text-gray-600">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
