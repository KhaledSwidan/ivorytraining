import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './language-switcher';
import { Routes, UserRole } from '../../constants/enums';
import { Translations } from '../../constants/links';

interface NavbarProps {
  translations: Translations;
}

const Navbar: React.FC<NavbarProps> = ({ translations }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    setIsAdmin(userRole === 'admin');
  }, []);

  const links = [
    { id: '1', title: translations.navbar.home, href: Routes.HOME },
    { id: '2', title: translations.navbar.services, href: Routes.SERVICES },
    { id: '3', title: translations.navbar.courses, href: Routes.COURSES },
    { id: '4', title: translations.navbar.plans, href: Routes.PLANS },
    { id: '5', title: translations.navbar.credits, href: Routes.CREDITS },
    { id: '6', title: translations.navbar.events, href: Routes.EVENTS },
    { id: '7', title: translations.navbar.podcast, href: Routes.PODCAST },
    { id: '8', title: translations.navbar.contactUs, href: Routes.CONTACTUS },
  ];

  const userRolePath = isAdmin ? UserRole.ADMIN : UserRole.PROFILE;

  return (
    <nav className='p-4 bg-gray-100 shadow-md flex justify-between items-center'>
      <button
        className='lg:hidden cursor-pointer'
        onClick={() => setOpenMenu(true)}
      >
        <Menu className='w-6 h-6' />
      </button>

      <ul
        className={`fixed lg:static ${
          openMenu ? 'right-0' : '-right-full'
        } top-0 bg-white lg:bg-transparent transition-all duration-200 h-full lg:h-auto w-64 lg:w-auto flex flex-col lg:flex-row items-start lg:items-center gap-4 p-6 lg:p-0 shadow-md lg:shadow-none`}
      >
        <button
          className='absolute top-4 left-4 lg:hidden cursor-pointer'
          onClick={() => setOpenMenu(false)}
        >
          <X className='w-6 h-6' />
        </button>

        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              onClick={() => setOpenMenu(false)}
              className={`hover:text-primary font-semibold transition ${
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-gray-600'
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}

        <li>
          <Link
            to={userRolePath}
            onClick={() => setOpenMenu(false)}
            className={`hover:text-primary font-semibold transition ${
              location.pathname === userRolePath
                ? 'text-primary'
                : 'text-gray-600'
            }`}
          >
            {isAdmin
              ? translations.navbar.admin || 'Admin'
              : translations.navbar.profile || 'User'}
          </Link>
        </li>

        <LanguageSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
