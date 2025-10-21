import React, { use, useState } from "react";
import styles from "./style.module.scss";
import Logo from "../Logo/Logo"
import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    const [open, setOpen] = useState(false);
    const [buttonValue, setButtonValue] = useState(null);

    const handleButtonClick = (value) => {
        setOpen(value);
        setButtonValue(value);
        console.log(value);
    };

    const handleWhatsAppClick = () => {
        const message = "Здравствуйте! Я хочу узнать подробнее о ваших курсах";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/79677803580?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className={styles.HeaderPlus}>
            <div className={styles.header}>
                <div className={styles.leftButtons}>
                    <button>Главная</button>
                    <button>Все курсы</button>
                    <button>Преимущества</button>
                </div>
                <Logo />
                <div className={styles.rightButtons}>
                    <button>Для моделей</button>
                    <button onClick={handleWhatsAppClick} className={styles.svize} >Написать в Whatsapp</button>
                </div>
            </div>
            <div className={styles.Coors}>
                <Link to="/" className={location.pathname === "/" ? styles.buttonChoise : styles.buttonNoChoise}>Для будущих мастеров</Link>
                <Link to="/client" className={location.pathname === '/client' ? styles.buttonChoise : styles.buttonNoChoise}>Для клиентов</Link>
            </div>
        </div>
    )
}

export default Header;