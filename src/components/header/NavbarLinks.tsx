import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Routes } from '../../constants/enums';
import { Translations } from '../../constants/links';

interface NavbarLinksProps {
  translations: Translations;
  setOpenMenu: (value: boolean) => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({
  translations,
  setOpenMenu,
}) => {
  const location = useLocation();

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

  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <Link
            to={link.href}
            onClick={() => setOpenMenu(false)}
            className={`pb-2 hover:text-primary relative text-gray-800 font-semibold before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[3px] before:bg-amber-900 before:transition-all before:duration-300 before:-translate-x-1/2 hover:before:w-full font-bold text-lg transition ${
              location.pathname === link.href ? 'text-primary' : 'text-gray-600'
            }`}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavbarLinks;
