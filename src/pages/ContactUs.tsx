import SubPageBanner from "../components/SubPageBanner";
import ContactCard from "../components/ContactCard";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <SubPageBanner
        image="/assets/images/image.jpg"
        title={t("contact.bannerTitle")}
        subtitle={t("contact.bannerSubtitle")}
      />
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {t("contact.heading")}
              </h2>
              <p className="text-gray-600">{t("contact.subheading")}</p>
            </div>

            <div className="space-y-4 text-gray-700">
              <ContactCard
                icon={<FaMapMarkerAlt />}
                title={t("contact.address")}
                detail={t("contact.addressDetail")}
                linkText={t("contact.addressLink")}
                linkHref="#"
              />
              <ContactCard
                icon={<FaEnvelope />}
                title={t("contact.email")}
                detail={t("contact.emailDetail")}
                linkText={t("contact.emailLink")}
                linkHref={`mailto:${t("contact.emailDetail")}`}
              />
              <ContactCard
                icon={<FaPhone />}
                title={t("contact.phone")}
                detail={t("contact.phoneDetail")}
                linkText={t("contact.phoneLink")}
                linkHref={`tel:${t("contact.phoneDetail")}`}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              {t("contact.formTitle")}
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700">{t("contact.formName")}</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t("contact.formNamePlaceholder")}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">{t("contact.formEmail")}</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder={t("contact.formEmailPlaceholder")}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">{t("contact.formMessage")}</label>
                <textarea
                  className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder={t("contact.formMessagePlaceholder")}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition"
              >
                {t("contact.formSubmit")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="h-64 w-full overflow-hidden">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3050884782187!2d46.675295275373524!3d24.71355177805605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0385ef9e7921%3A0xb84be4d2b0c828d5!2sRiyadh!5e0!3m2!1sen!2ssa!4v1625599087749!5m2!1sen!2ssa"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
