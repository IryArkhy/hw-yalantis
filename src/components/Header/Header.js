/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Header = () => {
  return (
    <header
      sx={{
        width: '100%',
        height: '100px',
        bg: 'primary',
        marginTop: '-13px',
        boxShadow: '-5px 5px 38px 2px rgba(0,0,0,0.19)',
      }}
    >
      <ul sx={{ variant: 'styles.ul' }}>
        <li>
          <NavLink
            exact
            to={routes.HOME_PAGE}
            sx={{ variant: 'styles.a', color: 'background' }}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.CART_PAGE}
            sx={{ variant: 'styles.a', color: 'background', fontSize: 'bold' }}
          >
            CART
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
