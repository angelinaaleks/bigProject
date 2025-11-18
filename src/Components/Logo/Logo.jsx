import React from 'react';
import styles from './style.module.scss';

function Logo() {
  return (
    <div className={styles.centerLogo}>
      <div className={styles.ANN}>
        <h1>A.N.N.</h1>
      </div>
      <div className={styles.Academy}>
        <h2>Academy</h2>
        <h2>Beauty Masters</h2>
      </div>
    </div>
  );
}

export default Logo;
