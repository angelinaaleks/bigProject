import React from 'react';
import styles from './style.module.scss';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { Category } from '../Category/Category';

function Header({ handleWhatsAppClick }) {
  const navig = ['Главная', 'Все курсы', 'Преимущества', 'Для моделей', 'Написать в Whatsapp'];

  return (
    <div className={styles.HeaderPlus}>
      <div className={styles.header}>
        <div className={styles.leftButtons}>
          <Link to="/" className={styles.linkBtn}>
            {navig[0]}
          </Link>
          <Link to="/allcoors" className={styles.linkBtn}>
            {navig[1]}
          </Link>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.rightButtons}>
          <Link to="/models" className={styles.linkBtn}>
            Для моделей
          </Link>
          <button onClick={handleWhatsAppClick} className={styles.svize}>
            {navig[4]}
          </button>
        </div>
      </div>
      <Category navig={navig} />
      {/* <div className={styles.Coors}>
        <Link
          to="/"
          className={location.pathname === '/' ? styles.buttonChoise : styles.buttonNoChoise}>
          Для будущих мастеров
        </Link>
        <Link
          to="/client"
          className={location.pathname === '/client' ? styles.buttonChoise : styles.buttonNoChoise}>
          Для клиентов
        </Link>
      </div> */}
    </div>
  );
}

export default Header;
