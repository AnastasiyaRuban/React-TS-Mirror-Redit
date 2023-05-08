import React from 'react';
import styles from './metadata.css';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src='https://static.vecteezy.com/system/resources/previews/002/002/297/original/beautiful-woman-avatar-character-icon-free-vector.jpg'
          alt='avatar'
        />
        <a href='#user-url' className={styles.username}>
          Дмитрий Гришин
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>4 часа назад
      </span>
    </div>
  );
}
