import React from 'react';
import styles from './style.module.scss';
import Logo from '../Logo/Logo';

function Fotter() {
  return (
    <div className={styles.Fotter}>
      <div className={styles.fotterTop}>
        <Logo />
        <div className={styles.Online}>
          <p>г. Казань, ул. Лушникова, д. 8</p>
          <div className={styles.link}>
            <a href="https://wa.me/89991631929">WhatsApp</a>
            <p>8 999 163 1929</p>
          </div>
        </div>
      </div>
      <div className={styles.fotterBottom}>
        <p>© A.A.N 2025</p>
      </div>
    </div>
  );
}

export default Fotter;
