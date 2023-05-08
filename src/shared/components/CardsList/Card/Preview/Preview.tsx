import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src='https://img1.goodfon.ru/wallpaper/nbig/a/69/kartinka-3d-dikaya-koshka.jpg'
        alt=''
      />
    </div>
  );
}
