import React from 'react';
import styles from './style.module.scss';
import stocks from '../../../../img/stocks.jpg';
import eyebrow from '../../../../img/eyebrow.jpg';
import eyelash from '../../../../img/eyelashes.jpg';
import unibrowimg from '../../../../img/unibrow.jpg';

function Stocks() {
  return (
    <div>
      <div className={styles.Stocks}>
        <div className={styles.StocksText}>
          <img alt="Бантик" className={styles.imgLeft} src={stocks} />
          <div className={styles.Text}>
            <h1>Твой месяц для старта!</h1>
            <h2>Определи свой путь к успеху</h2>
            <p>Индивидуальное обучение.</p>
            <h3>Только ты, мастер и результат</h3>
          </div>
          <img alt="Бантик" className={styles.imgRight} src={stocks} />
        </div>
        <div className={styles.stocksSpisok}>
          <div className={styles.eyebrowPlus}>
            <img alt="Брови" src={eyebrow} />
            <div className={styles.eyebrowText}>
              <h4>1 day / 12 academic hours</h4>
              <h2>Интенсив "Бровист-PRO"</h2>
              <h3>
                13 990 R <span>14 990 R</span>
              </h3>
              <ul>
                <li>Проектирование безупречной формы бровей</li>
                <li>Коррекция воском и пинцетом</li>
                <li>Окрашивание краской и хной</li>
                <li>Ламинирование бровей</li>
                <li>Две готовые работы в портфолио</li>
              </ul>
            </div>
          </div>
          <div className={styles.eyelashes}>
            <img alt="Ресницы" src={eyelash} />
            <div className={styles.eyelashesText}>
              <h4>3 day / 26 academic hours</h4>
              <h2>Lashmaker</h2>
              <h3>
                32 990 R <span>40 900 R</span>
              </h3>
              <ul>
                <li>Классическое наращивание для безупречного результата</li>
                <li>Объемное наращивание 2D-3D</li>
                <li>Наращивание нижних ресниц</li>
                <li>Топовые эффекты и работа со сложными случаями</li>
              </ul>
            </div>
          </div>
          <div className={styles.unibrow}>
            <img alt="Брови-Ресницы" src={unibrowimg} />
            <div className={styles.unibrowText}>
              <h4>5 day / 40 academic hours</h4>
              <h2>КУРС «UNIBROW LASH»</h2>
              <h3>
                28 900 R <span>36 990 R</span>
              </h3>
              <ul>
                <li>Идеальная геометрия бровей + модное ламинирование</li>
                <li>Все виды наращивания: от классики до объемов 2D-3D</li>
                <li>Нижние ресницы и трендовые эффекты</li>
                <li>Отработка на моделях и фото для портфолио</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button>Все курсы</button>
        </div>
      </div>
    </div>
  );
}

export default Stocks;
