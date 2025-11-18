import React from 'react';
import Logo from '../Logo/Logo';
import styles from './style.module.scss';

export const Category = ({ navig }) => {
  const [value, setValue] = React.useState(navig[0]);
  const [open, setOpen] = React.useState(false);
  const handleValueClick = (obj) => {
    setValue(obj);
    setOpen(false);
  };
  const ObjPoop = (obj) => {
    return (
      <a
        onClick={() => handleValueClick(obj)}
        className={open ? styles.MapPoopSs : styles.MapPoopSsNo}>
        {obj}
      </a>
    );
  };
  return (
    <div>
      <div className={styles.poopLists}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.poop}>
          <p onClick={() => setOpen(!open)}>📋 {value}</p>
          <div className={styles.MapPoop}>{navig.map((a) => ObjPoop(a))}</div>
        </div>
      </div>
    </div>
  );
};
