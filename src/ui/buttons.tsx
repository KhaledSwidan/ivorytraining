import { Menu, X } from 'lucide-react';
import { FC } from 'react';

interface MenuBtnProps {
  handleMenuToggle: () => void;
}
interface XBtnProps {
  handleCloseMenu: () => void;
}

export const MenuBtn: FC<MenuBtnProps> = ({ handleMenuToggle }) => {
  return (
    <button className='lg:hidden cursor-pointer p-3' onClick={handleMenuToggle}>
      <Menu className='w-6 h-6' />
    </button>
  );
};

export const XBtn: FC<XBtnProps> = ({ handleCloseMenu }) => {
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
