import React from "react";
import styles from "./style.module.scss"
import mainRight from "../../img/main-right.png"
import galka from "../../img/galka.png"

function Main() {
    return (
        <div className={styles.Main}>
            <div className={styles.leftMain}>
                <div className={styles.logo}>
                    <div className={styles.ANN}><h1>A.N.N.</h1></div>
                    <h2>Academy<br />
                        Beauty Masters</h2>
                </div>
                <h3>Преврати талант в профессию.
                    <br />Начни карьеру в beauty-индустрии.</h3>
                <p>Школа Александровой Анастасии — ваш старт
                    <br />в мир востребованной профессии и творческой реализации. Освойте искусство 
                    <br /> красоты под руководством эксперта и станьте мастером</p>
                <h4>Выбери, кем ты станешь:</h4>
                <div className={styles.spisok}>
                    <ul>
                        <li><img src={galka} />Мастером перманентного макияжа, чьи работы сводят с ума.</li>
                        <li><img src={galka} />Cпециалистом по ресницам, с записью за месяц.</li>
                    </ul>
                    <ul>
                        <li><img src={galka} />Бровистом-архитектором, творящим идеальные формы.</li>
                        <li><img src={galka} />Специалистом по маникюру, чьи работы собирают лайки в соцсетях.</li>
                    </ul>
                </div>
                <div className={styles.form}>
                    <form>
                        <input type='text' placeholder="Имя"/>
                    </form>
                    <form>
                        <input type='number' placeholder="Номер"/>
                    </form>
                    <button>Оставить заявку ➜</button>
                </div>
            </div>
            <div className={styles.rightMain}>
                <img src={mainRight}></img>
            </div>
        </div>
    )
}

export default Main;