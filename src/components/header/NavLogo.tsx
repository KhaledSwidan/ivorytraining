import { Link } from 'react-router-dom';
import { Routes } from '../../constants/enums';
import { FC } from 'react';

const NavLogo: FC = () => {
  const logoClass = 'w-20 h-20';

  return (
    <div className='p-2 my-2 bg-[#6a2e38] shadow-md flex gap-4 rounded-sm hidden lg:block ms-4'>
      <Link to={Routes.ROOT} className='text-primary font-semibold text-2xl'>
        <img
          src='https://ivorytraining.com/assets/site/images/logofoot.png'
          alt='Ivory Training Logo'
          className={logoClass}
        />
      </Link>
    </div>
  );
};

export default NavLogo;
