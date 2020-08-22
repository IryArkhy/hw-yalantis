import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './header.module.css';
import { CartButton } from '../Buttons/Buttons';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.headerMenu}>
        <li className={styles.headerHomeLink}>
          <NavLink exact to={routes.HOME_PAGE}>
            HOME
            <span />
            <span />
            <span />
            <span />
          </NavLink>
        </li>
        <li className={styles.headerCartLink}>
          <NavLink to={routes.CART_PAGE} className={styles.btn}>
            <CartButton />
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
