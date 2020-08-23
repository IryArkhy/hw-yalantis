import React from 'react';
import styles from './footer.module.css';

const placeholder = 'https://google.com';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>{new Date().getFullYear()} ShopOnLine, Inc</li>
        <li>
          <a href={placeholder}>Terms</a>
        </li>
        <li>
          <a href={placeholder}>Privacy</a>
        </li>
        <li>ShopOnLine</li>
        <li>
          <a href={placeholder}>Security</a>
        </li>
        <li>
          <a href={placeholder}>Contact ShopOnLine</a>
        </li>
        <li>
          <a href={placeholder}>Help</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
