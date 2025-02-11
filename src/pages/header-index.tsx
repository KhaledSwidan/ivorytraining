import { Link } from 'react-router-dom';
import { Routes } from '../constants/enums';
import Navbar from '../components/header/Navbar';
const Header = () => {
  return (
    <header className='flex justify-center items-center py-2 px-4 md:px-0 z-100 w-full'>
      <div className='container flex items-center justify-between gap-6 lg:gap-10'>
        <nav className='p-4 bg-[#6a2e38] shadow-md flex gap-4 rounded-sm'>
          <Link
            to={Routes.ROOT}
            className='text-primary font-semibold text-2xl'
          >
            <img
              src='https://ivorytraining.com/assets/site/images/logofoot.png'
              alt='Home'
              className='w-20 h-20'
            />
          </Link>
        </nav>
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
              admin: 'Admin',
            },
          }}
        />
      </div>
    </header>
  );
};

export default Header;
