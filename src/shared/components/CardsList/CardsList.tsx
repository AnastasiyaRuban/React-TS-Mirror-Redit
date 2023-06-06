import React, { useContext } from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { postsContext } from '../../context/postContext';
import { IPostData } from '../../../types/interfaces';

export function CardsList() {
  const posts = useContext(postsContext);

  const listPosts = posts.map((post: IPostData) => (
    <Card key={post.id} post={post} />
  ));

  return <ul className={styles.cardsList}>{listPosts}</ul>;
}
