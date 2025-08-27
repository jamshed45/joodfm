import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { useSettings } from "../context/SettingsContext";

export default function Footer() {
  const { t } = useTranslation();
  const { settings, loading } = useSettings();

  if (loading || !settings) return null;

  return (
    <footer className="footer bg-black text-white py-10">
      <div className="jd-main-container px-4">
        {/* Logo + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#AE79AB] pb-6">
          <img
            src="/assets/images/joodfm-logo.png"
            alt="Jood Logo"
            className="h-20 mb-4 md:mb-0"
          />
          <div className="flex space-x-4 text-xl">
            {settings.facebook_url && (
              <a
                href={settings.facebook_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <FaFacebookF />
              </a>
            )}
            {settings.instagram_url && (
              <a
                href={settings.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <FaInstagram />
              </a>
            )}
            {settings.whatsapp && (
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <FaWhatsapp />
              </a>
            )}
            {settings.linkedin_url && (
              <a
                href={settings.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <FaLinkedinIn />
              </a>
            )}
          </div>
        </div>

        {/* Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h6 className="footer-heading font-semibold mb-2">
              {t("contactTitle")}
            </h6>
            <p className="leading-6 w-[300px]">{t("address")}</p>
            <p className="mt-6">
              {t("call")}: {settings.phone || "+966 920009622"}
            </p>
            <p className="mt-6">
              {t("mail")}: {settings.email || "info@joodfm.com"}
            </p>
          </div>
          <div>
            <h6 className="footer-heading font-semibold mb-2">
              {t("quickLinks")}
            </h6>
            <ul className="space-y-1">
              <li>
                <a href="/" className="footer-nav-link hover:underline">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="/about" className="footer-nav-link hover:underline">
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a href="/services" className="footer-nav-link hover:underline">
                  {t("services")}
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-nav-link hover:underline">
                  {t("contactUs")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-10 border-t border-[#AE79AB] pt-6">
          © {new Date().getFullYear()} JoodFM. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
