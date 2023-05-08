import React from 'react';
import { Button } from '../../../Button';
// import { Button } from '@components/Button';
// import commentsIcon from '@assets/icons/comments.svg';
import commentsIcon from '../../../../assets/icons/comments.svg';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { Actions } from './Actions';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />

      <Button className={styles.commentsButton}>
        <img src={commentsIcon} alt='' />
        <span className={styles.commentsNumber}>13</span>
      </Button>

      <Actions />
    </div>
  );
}
