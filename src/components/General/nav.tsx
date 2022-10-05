import { NavLink } from 'react-router-dom';
import { FC } from 'react';

const Nav: FC = (): JSX.Element => {
  const navLinks: string[] = ['Home', 'Popular', 'Battle'];
  return (
    <nav>
      <ul className="nav">
        {navLinks.map(
          (navLink: string, i: number): JSX.Element => (
            <li key={i}>
              <NavLink to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>
                {navLink}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Nav;
