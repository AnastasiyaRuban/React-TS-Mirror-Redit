import React from 'react';
import { MetaData } from './MetaData';
import { Title } from './Title';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <MetaData />
      <Title />
    </div>
  );
}
