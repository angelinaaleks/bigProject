import React from "react";
import styles from "./style.module.scss"

function Logo() {
    return (
        <div className={styles.centerLogo}>
            <div className={styles.ANN}><h1>A.N.N.</h1></div>
            <h2>Academy<br />
                Beauty Masters</h2>
        </div>
    )
}

export default Logo;