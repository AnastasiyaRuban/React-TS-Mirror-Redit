import React from 'react';
import { Icon } from '../Icon';
import { IUserBblockProps } from '../../../types/interfaces';
import { EIcon } from '../../../types/enums';
import styles from './userblock.css';

export function UserBlock({ avatarSrc, username }: IUserBblockProps) {
  return (
    <a
      href='https://www.reddit.com/api/v1/authorize?client_id=nuPEuxlcOYlyTyUVp6et1w&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt='user avatar'
            className={styles.avatarImage}
          />
        ) : (
          <Icon name={EIcon.avatar} className={styles.avatarImage} />
        )}
      </div>

      <div className={styles.username}>
        <span className={username ? styles.usernameText : styles.usernameAnon}>
          {username || 'Аноним'}
        </span>
      </div>
    </a>
  );
}
