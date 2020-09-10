import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Modal from '../Modal/Modal';
import { AddProductModalDescrip } from '../Modal/ModalDiscriptions';
import FormikContainer from '../NewProductForm/FormikContainer/FormikContainer';
import { CartButton, AddNewProduct, UserProfileBtn } from '../Buttons';
import routes from '../../routes';
import styles from './header.module.css';
import useCart from '../../hooks/useCart';
import useModal from '../../hooks/useModal';

// TODO: Make order of ul>li in order they are shown in the header. Make shure, you dont mess up the styles. Think of adding scss loader in config

const Header = () => {
  const { isShowing, toggle } = useModal();
  const { totalPrice } = useCart();
  const initialValues = {
    name: '',
    price: '',
    origin: '',
  };

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
        <li className={styles.headerProfileLink}>
          <NavLink to={routes.PROFILE_PAGE_PODUCTS}>
            <UserProfileBtn />
          </NavLink>
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
      {isShowing && (
        <Modal onClose={toggle} ModalDiscription={AddProductModalDescrip}>
          <FormikContainer
            initialValues={initialValues}
            onModalClose={toggle}
          />
        </Modal>
      )}
    </header>
  );
};
export default Header;
