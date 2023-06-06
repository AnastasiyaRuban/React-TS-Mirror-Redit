import React from 'react';
import styles from './metadata.css';
import { IMetaDataProps } from '../../../../../../types/interfaces';

export function MetaData({ author, avatar, datePostUtc }: IMetaDataProps) {
  const unixNow = new Date().getTime();
  const timeIntervalMs = unixNow - Number(datePostUtc);
  const timeIntervalHours = Math.round(timeIntervalMs / 3600000);

  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar} src={avatar} alt='avatar' />
        <a href='#user-url' className={styles.username}>
          {author}
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        {timeIntervalHours} часа назад
      </span>
    </div>
  );
}
