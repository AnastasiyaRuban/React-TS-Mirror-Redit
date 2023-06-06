import React from 'react';
import { Button } from '../../../../Button';
import styles from './karmacounter.css';
import { Icon } from '../../../../Icon';
import { EIcon } from '../../../../../../types/enums';

interface IKarmaCounterProps {
  rating: string;
}

export function KarmaCounter({ rating }: IKarmaCounterProps) {
  return (
    <div className={styles.karmaCounter}>
      <Button className={styles.up}>
        <Icon name={EIcon.arrowUp} className={styles.avatarImage} />
      </Button>
      <span className={styles.karmaValue}>{rating}</span>
      <Button className={styles.down}>
        <Icon name={EIcon.arrowDown} className={styles.avatarImage} />
      </Button>
    </div>
  );
}
