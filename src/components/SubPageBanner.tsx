import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface RemoteTranslations {
  [key: string]: string;
}

interface SubPageBannerProps {
  image: string;
  title: string;
  subtitle: string;
}

// Example fetch function
async function fetchTranslationKeys(lang: string): Promise<RemoteTranslations> {
  const res = await fetch(`/api/translations?lang=${lang}`);
  if (!res.ok) throw new Error("Failed to fetch translations");
  return res.json();
}

export default function SubPageBanner({ image, title, subtitle }: SubPageBannerProps) {
  const { t, i18n } = useTranslation();
  const [remoteTranslations, setRemoteTranslations] = useState<RemoteTranslations>({});

  useEffect(() => {
    async function loadTranslations() {
      try {
        const data = await fetchTranslationKeys(i18n.language);
        setRemoteTranslations(data);
      } catch (err) {
        console.error("Translation API error:", err);
      }
    }

    loadTranslations();
  }, [i18n.language]);

  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
      <div className="relative z-10 mt-44">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
