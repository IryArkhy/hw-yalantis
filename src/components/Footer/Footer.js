import React from 'react';
import { PLACEHOLDER_URL } from '../../constants';
import styles from './footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <ul>
        <li>{year} ShopOnLine, Inc</li>
        <li>
          <a href={PLACEHOLDER_URL}>Terms</a>
        </li>
        <li>
          <a href={PLACEHOLDER_URL}>Privacy</a>
        </li>
        <li>ShopOnLine</li>
        <li>
          <a href={PLACEHOLDER_URL}>Security</a>
        </li>
        <li>
          <a href={PLACEHOLDER_URL}>Contact ShopOnLine</a>
        </li>
        <li>
          <a href={PLACEHOLDER_URL}>Help</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
