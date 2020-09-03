import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { CartButton, AddNewProduct } from '../Buttons';
import routes from '../../routes';
import styles from './header.module.css';
import useCart from '../../hooks/useCart';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';

const Header = () => {
  const { isShowing, toggle } = useModal();
  const { totalPrice } = useCart();

  return (
    <header className={styles.header}>
      <ul className={styles.headerMenu}>
        <li>
          <Logo />
        </li>
        <li>
          <AddNewProduct
            onModalOpen={toggle}
            styles={styles.addNewProductBtn}
          />
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
      {isShowing && <Modal onClose={toggle} />}
    </header>
  );
};
export default Header;
