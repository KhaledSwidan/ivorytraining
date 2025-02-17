import { useEffect, useState } from 'react';
import { Translations } from '../../constants/links';
import { Routes, UserRole } from '../../constants/enums';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './language-switcher';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  translations: Translations;
}

export const Navbar1: React.FC<NavbarProps> = ({ translations }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole') || '';
    setIsAdmin(userRole.toLowerCase() === 'admin');
  }, []);

  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);

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
    <nav
      className={`bg-gray-100 shadow-md flex justify-between items-center flex-row-reverse lg:p-4 rounded-sm`}
    >
      <button
        className='lg:hidden cursor-pointer p-3'
        onClick={() => setOpenMenu(true)}
      >
        <Menu className='w-6 h-6' />
      </button>

      <ul
        className={`fixed lg:static ${
          openMenu ? 'right-0' : '-right-full'
        } top-0 bg-white lg:bg-transparent transition-all duration-200 h-full lg:h-auto w-64 lg:w-auto flex flex-col lg:flex-row items-start lg:items-center gap-4 p-6 lg:p-0 shadow-md lg:shadow-none`}
      >
        <li>
          <button
            className='absolute top-4 left-4 lg:hidden cursor-pointer rounded-md bg-red-50 p-3'
            onClick={() => setOpenMenu(false)}
          >
            <X className='w-6 h-6' />
          </button>
        </li>

        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              onClick={() => setOpenMenu(false)}
              className={`pb-2 hover:text-primary relative text-gray-800 font-semibold before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[3px] before:bg-amber-900 before:transition-all before:duration-300 before:-translate-x-1/2 hover:before:w-full font-semibold transition ${
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
