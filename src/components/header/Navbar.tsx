import { useEffect, useState, useCallback } from 'react';
import { Translations } from '../../constants/links';
import { useLocation } from 'react-router-dom';
import LanguageSwitcher from './language-switcher';
import NavbarLinks from './NavbarLinks';
import UserRoleLink from './UserRoleLink';
import { MenuBtn, XBtn } from '../../ui/buttons';

interface NavbarProps {
  translations: Translations;
}

const Navbar: React.FC<NavbarProps> = ({ translations }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole') || '';
    setIsAdmin(userRole.toLowerCase() === 'admin');
  }, []);

  const handleMenuToggle = useCallback(() => {
    setOpenMenu((prevState) => !prevState);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  useEffect(() => {
    handleCloseMenu();
  }, [location.pathname, handleCloseMenu]);

  return (
    <nav className='flex justify-between items-center flex-row-reverse lg:p-4 rounded-sm w-full me-4'>
      <MenuBtn handleMenuToggle={handleMenuToggle} />

      <ul
        className={`fixed lg:static ${
          openMenu ? 'right-0' : '-right-full'
        } top-0 bg-white lg:bg-transparent transition-all duration-200 h-full lg:h-auto w-64 lg:w-auto flex flex-col lg:flex-row items-start lg:items-center gap-4 p-6 lg:p-0 shadow-md lg:shadow-none`}
      >
        <XBtn handleCloseMenu={handleCloseMenu} />

        <NavbarLinks
          translations={translations}
          setOpenMenu={handleCloseMenu}
        />
        <UserRoleLink
          isAdmin={isAdmin}
          translations={translations}
          setOpenMenu={handleCloseMenu}
        />
        <LanguageSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
