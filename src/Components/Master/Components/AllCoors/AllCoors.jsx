import React from 'react';
import styles from './style.module.scss';

export const AllCoors = ({ image, name, day, price, advantage }) => {
  return (
    <div className={styles.AllCoors}>
      <div className={styles.eyebrowPlus}>
        <img alt="Брови" src={image} />
        <div className={styles.eyebrowText}>
          <h4>
            {day[0]} day / {day[1]} academic hours
          </h4>
          <h2>{name}</h2>
          <h3>
            {price[0]} R <span>{price[1]} R</span>
          </h3>
          <ul>
            {advantage.map((value) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
