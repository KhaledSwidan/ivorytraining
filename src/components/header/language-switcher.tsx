import { useLocation, useNavigate } from 'react-router-dom';
import { ArBtn, EngBtn } from '../../ui/buttons';
import { useMemo } from 'react';

const LanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const locale = useMemo(
    () => location.pathname.split('/')[1] || 'en',
    [location.pathname]
  );

  const switchLanguage = (newLocale: 'en' | 'ar') => {
    if (newLocale === locale) return; // منع إعادة التوجيه إذا كانت اللغة نفسها

    const newPath = `/${newLocale}${location.pathname.substring(
      locale.length + 1
    )}`;
    navigate(newPath, { replace: true });
  };

  return (
    <div className='flex'>
      {locale === 'ar' ? (
        <EngBtn switchLanguage={switchLanguage} />
      ) : (
        <ArBtn switchLanguage={switchLanguage} />
      )}
    </div>
  );
};

export default LanguageSwitcher;
