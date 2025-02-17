import { useLocation, useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const locale = location.pathname.split('/')[1]; // `/ar/home`

  const switchLanguage = (newLocale: string) => {
    const newPath = location.pathname.replace(`/${locale}`, `/${newLocale}`);
    navigate(newPath);
  };

  return (
    <div className='flex'>
      {locale === 'ar' ? (
        <button
          className='border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition cursor-pointer'
          onClick={() => switchLanguage('en')}
        >
          English
        </button>
      ) : (
        <button
          className='border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition cursor-pointer'
          onClick={() => switchLanguage('ar')}
        >
          العربية
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
