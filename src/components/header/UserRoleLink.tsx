import { Link } from 'react-router-dom';
import { UserRole } from '../../constants/enums';
import { Translations } from '../../constants/links';

interface UserRoleLinkProps {
  isAdmin: boolean;
  translations: Translations;
  setOpenMenu: (value: boolean) => void;
}

const UserRoleLink: React.FC<UserRoleLinkProps> = ({
  isAdmin,
  translations,
  setOpenMenu,
}) => {
  const userRolePath = isAdmin ? UserRole.ADMIN : UserRole.PROFILE;

  return (
    <li>
      <Link
        to={userRolePath}
        onClick={() => setOpenMenu(false)}
        className={`hover:text-primary font-semibold transition ${
          location.pathname === userRolePath ? 'text-primary' : 'text-gray-600'
        }`}
      >
        {isAdmin
          ? translations.navbar.admin || 'Admin'
          : translations.navbar.profile || 'User'}
      </Link>
    </li>
  );
};

export default UserRoleLink;
