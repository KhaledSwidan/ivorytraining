import Navbar from '../components/header/Navbar';
import { useEffect, FC } from 'react';
import NavLogo from '../components/header/NavLogo';
import Hooks from '../constants/hooks';

const Header: FC = () => {
  const { handleScrollHook, isVisible } = Hooks();

  useEffect(() => {
    window.addEventListener('scroll', handleScrollHook, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollHook);
  }, [handleScrollHook]);

  return (
    <header
      className={`fixed z-50 top-0 left-0 w-full flex items-center shadow-md bg-purple-50 transition-transform duration-300 ${
        isVisible ? 'lg:translate-y-0' : 'lg:-translate-y-[120px]'
      }`}
    >
      <NavLogo />
      <Navbar
        translations={{
          navbar: {
            home: 'الرئيسية',
            services: 'الخدمات',
            courses: 'الدورات التدريبية',
            plans: 'الخطة التدريبية',
            credits: 'الاعتمادات',
            events: 'الفعاليات',
            podcast: 'بودكاست',
            contactUs: 'اتصل بنا',
            profile: 'User',
            admin: 'المشرف',
          },
        }}
      />
    </header>
  );
};

export default Header;
