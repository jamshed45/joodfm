
import { useTranslation } from "react-i18next";
import { BsChevronRight } from "react-icons/bs";

export default function PhilosophySection() {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";

  const items = [
    {
      title: t("deepUnderstanding"),
      desc: t("deepUnderstandingDesc"),
    },
    {
      title: t("partnership"),
      desc: t("partnershipDesc"),
    },
    {
      title: t("accountManager"),
      desc: t("accountManagerDesc"),
    },
    {
      title: t("emergencyContact"),
      desc: t("emergencyContactDesc"),
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
          isRTL ? "text-right" : "text-left"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Image */}
        <img
          src="assets/images/philosophy.png"
          alt="Philosophy"
          className="w-full rounded-2xl shadow-card"
        />

        {/* Text Content */}
        <div>
          <h2 className="big-heading-1">
            {t("ourPhilosophy")}
          </h2>

          <p className="mb-3">
            {t("philosophyIntro")}
          </p>

          <p className="italic text-lightgray mb-6">{t("philosophyQuote")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <BsChevronRight size={20} className="right-arrow" />
                <div>
                  <h3 className="small-heading-1">{item.title}</h3>
                  <p className="text-lightgray text-sm leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
