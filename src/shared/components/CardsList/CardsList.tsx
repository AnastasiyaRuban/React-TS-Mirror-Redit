import React, { useContext } from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { postsContext } from '../../context/postContext';
import { tokenContext } from '../../context/tokenContext';
import { IPostData } from '../../../types/interfaces';

export function CardsList() {
  const posts = useContext(postsContext);
  const token = useContext(tokenContext);

  const listPosts = posts.map((post: IPostData) => (
    <Card key={post.id} post={post} token={token} />
  ));

  return <ul className={styles.cardsList}>{listPosts}</ul>;
}
