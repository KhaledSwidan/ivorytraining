import { Menu, X } from 'lucide-react';

interface MenuBtnProps {
  handleMenuToggle: () => void;
}
interface XBtnProps {
  handleCloseMenu: () => void;
}
interface LangBtnProps {
  switchLanguage: (language: 'ar' | 'en') => void;
}

export const MenuBtn: React.FC<MenuBtnProps> = ({ handleMenuToggle }) => {
  return (
    <button className='lg:hidden cursor-pointer p-3' onClick={handleMenuToggle}>
      <Menu className='w-6 h-6' />
    </button>
  );
};

export const XBtn: React.FC<XBtnProps> = ({ handleCloseMenu }) => {
  return (
    <li>
      <button
        className='absolute top-4 left-4 lg:hidden cursor-pointer rounded-md bg-red-50 p-3'
        onClick={handleCloseMenu}
      >
        <X className='w-6 h-6' />
      </button>
    </li>
  );
};

export const EngBtn: React.FC<LangBtnProps> = ({ switchLanguage }) => {
  return (
    <button
      className='border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition cursor-pointer'
      onClick={() => switchLanguage('en')}
    >
      English
    </button>
  );
};

export const ArBtn: React.FC<LangBtnProps> = ({ switchLanguage }) => {
  return (
    <button
      className='border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition cursor-pointer'
      onClick={() => switchLanguage('ar')}
    >
      العربية
    </button>
  );
};
