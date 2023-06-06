import React from 'react';
import { MetaData } from './MetaData';
import { Title } from './Title';
import styles from './textcontent.css';
import { ITextContentProps } from '../../../../../types/interfaces';

export function TextContent({
  author,
  title,
  avatar,
  datePostUtc,
  id,
  token,
}: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <MetaData author={author} avatar={avatar} datePostUtc={datePostUtc} />
      <Title title={title} id={id} token={token} />
    </div>
  );
}
