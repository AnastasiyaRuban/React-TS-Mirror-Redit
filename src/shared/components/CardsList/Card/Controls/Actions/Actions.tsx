import React from 'react';
import { Button } from '../../../../Button';
import { Icon } from '../../../../Icon';
import { EIcon } from '../../../../../../types/enums';
import styles from './actions.css';

export function Actions() {
  return (
    <div className={styles.actions}>
      <Button className={styles.shareButton}>
        <Icon name={EIcon.share} className={styles.avatarImage} />
      </Button>
      <Button className={styles.saveButton}>
        <Icon name={EIcon.save} className={styles.avatarImage} />
      </Button>
    </div>
  );
}
