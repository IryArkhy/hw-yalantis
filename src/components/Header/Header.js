import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Header = () => {
  return (
    <header sx={{ width: '100%', height: '10%', bg: 'primary' }}>
      <ul>
        <li>
          <NavLink exact to={routes.HOME_PAGE}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.CART_PAGE}>CART</NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
