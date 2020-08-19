/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Header = () => {
  return (
    <header sx={{ width: '100%', height: '8vh', bg: 'primary' }}>
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
