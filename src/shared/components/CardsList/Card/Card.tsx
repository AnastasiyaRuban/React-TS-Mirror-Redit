import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { IPostData } from '../../../../types/interfaces';

export function Card({ post, token }: { post: IPostData; token: string }) {
  const { author, title, rating, avatar, previewImg, datePostUtc, id } = post;

  return (
    <li className={styles.card}>
      <TextContent
        author={author}
        avatar={avatar}
        title={title}
        datePostUtc={datePostUtc}
        id={id}
        token={token}
      />
      <Preview previewImg={previewImg} />
      <Menu id={id} />
      <Controls rating={rating} />
    </li>
  );
}
