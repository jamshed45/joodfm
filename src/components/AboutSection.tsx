import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchTranslationKeys } from '../lib/api';

// ✅ Define the structure of remote translations
interface RemoteTranslations {
  whoWeAre?: string;
  aboutTitle?: string;
  aboutDesc?: string;
}

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const [remoteTranslations, setRemoteTranslations] = useState<RemoteTranslations>({});

  useEffect(() => {
    async function loadTranslations() {
      try {
        const data = await fetchTranslationKeys(i18n.language); // send current lang
        setRemoteTranslations(data);
      } catch (err) {
        console.error('Translation API error:', err);
      }
    }

    loadTranslations();
  }, [i18n.language]);

  return (
    <section className="py-16 px-4 text-center font-sans">
      <div className="pre-heading-tag">
        {remoteTranslations?.whoWeAre || t('whoWeAre')}
      </div>

      <h2 className="big-heading-1">
        {remoteTranslations?.aboutTitle || t('aboutTitle')}
      </h2>

      <p className="max-w-4xl mx-auto text-lightGray text-base md:text-lg leading-relaxed">
        {remoteTranslations?.aboutDesc || t('aboutDesc')}
      </p>

      <hr className="mt-12 border-t border-gray-200" />
    </section>
  );
}
