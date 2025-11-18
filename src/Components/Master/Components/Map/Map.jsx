import React from "react";
import styles from "./style.module.scss"

function Map() {
    return (
        <div className={styles.Card}>
            <iframe title="Map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb2b406ed2d516d6c50768dab82d5ec2a68536ed3b722b08cb44a88244c5dd32&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
        </div>
    )
}

export default Map;