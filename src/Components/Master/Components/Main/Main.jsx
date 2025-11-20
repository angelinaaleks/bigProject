import React from 'react';
import styles from './style.module.scss';
import mainRight from '../../../../Static/img/main-right.png';
import galka from '../../../../Static/img/galka.png';
import Logo from '../../../Logo/Logo';

function Main({ handleWhatsAppClick }) {
  return (
    <div className={styles.Main}>
      <div className={styles.leftMain}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h3>
          Преврати талант в профессию.
          <br />
          Начни карьеру в beauty-индустрии.
        </h3>
        <p>
          Школа Александровой Анастасии — ваш старт
          <br />в мир востребованной профессии и творческой реализации. Освойте искусство
          <br /> красоты под руководством эксперта и станьте мастером
        </p>
        <h4>Выбери, кем ты станешь:</h4>
        <div className={styles.spisok}>
          <ul>
            <li>
              <img alt="Галочка" src={galka} />
              Мастером перманентного макияжа, чьи работы сводят с ума.
            </li>
            <li>
              <img alt="Галочка" src={galka} />
              Cпециалистом по ресницам, с записью за месяц.
            </li>
          </ul>
          <ul>
            <li>
              <img alt="Галочка" src={galka} />
              Бровистом-архитектором, творящим идеальные формы.
            </li>
            <li>
              <img alt="Галочка" src={galka} />
              Специалистом по маникюру, чьи работы собирают лайки в соцсетях.
            </li>
          </ul>
        </div>
        <div className={styles.form}>
          <button onClick={handleWhatsAppClick}>Написать в Whatsapp</button>
        </div>
      </div>
      <div className={styles.rightMain}>
        <img alt="Вступление" src={mainRight}></img>
      </div>
    </div>
  );
}

export default Main;
