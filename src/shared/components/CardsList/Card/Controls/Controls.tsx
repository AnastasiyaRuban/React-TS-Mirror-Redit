import React from 'react';
import { Button } from '../../../Button';
import styles from './controls.css';
import { Icon } from '../../../Icon';
import { EIcon } from '../../../../../types/enums';
import { KarmaCounter } from './KarmaCounter';
import { Actions } from './Actions';

interface IControlsProps {
  rating: string;
}

export function Controls({ rating }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter rating={rating} />

      <Button className={styles.commentsButton}>
        <Icon name={EIcon.comments} className={styles.avatarImage} />
        <span className={styles.commentsNumber}>13</span>
      </Button>

      <Actions />
    </div>
  );
}
