import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { CartButton } from '../Buttons/Buttons';
import routes from '../../routes';
import styles from './header.module.css';
import { ShopContext } from '../../hoc/withContext';
import { countTotalPrice } from '../../helpers/cartHelpers';

const Header = () => {
  const { cart } = useContext(ShopContext);
  const totalPrice = countTotalPrice(cart);
  return (
    <header className={styles.header}>
      <ul className={styles.headerMenu}>
        <li>
          <Logo />
        </li>
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
        <li>{totalPrice} $</li>
      </ul>
    </header>
  );
};
export default Header;
