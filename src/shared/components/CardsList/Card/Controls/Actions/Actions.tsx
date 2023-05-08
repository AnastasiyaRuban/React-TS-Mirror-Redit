import React from 'react';
import { Button } from '../../../../Button';
// import shareIcon from '@assets/icons/share.svg';
// import saveIecon from '@assets/icons/save.svg';
import shareIcon from '../../../../../assets/icons/arrow-down.svg';
import saveIcon from '../../../../../assets/icons/arrow-down.svg';
import styles from './actions.css';

export function Actions() {
  return (
    <div className={styles.actions}>
      <Button className={styles.shareButton}>
        <img src={shareIcon} alt='' />
      </Button>
      <Button className={styles.saveButton}>
        <img src={saveIcon} alt='' />
      </Button>
    </div>
  );
}
