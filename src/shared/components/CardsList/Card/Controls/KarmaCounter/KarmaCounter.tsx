import React from 'react';
import { Button } from '../../../../Button';
// import arrowUpIcon from '@assets/icon/arrow-up.svg';
// import arrowDownIcon from '@assets/icon/arrow-down.svg';
import arrowUpIcon from '../../../../../assets/icons/arrow-up.svg';
import arrowDownIcon from '../../../../../assets/icons/arrow-down.svg';
import styles from './karmacounter.css';

export function KarmaCounter() {
  return (
    <div className={styles.karmaCounter}>
      <Button className={styles.up}>
        <img src={arrowUpIcon} alt='arrowUp' />
      </Button>
      <span className={styles.karmaValue}>234</span>
      <Button className={styles.down}>
        <img src={arrowDownIcon} alt='arrowDown' />
      </Button>
    </div>
  );
}
