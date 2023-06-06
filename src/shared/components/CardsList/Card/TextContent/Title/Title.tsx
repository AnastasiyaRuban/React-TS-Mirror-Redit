import React, { useContext, useState } from 'react';
import { Post } from '../../../../Post/Post';
import styles from './title.css';
import axios from 'axios';
import { tokenContext } from '../../../../../context/tokenContext';
import useCommentsData from '../../../../../../hooks/useCommentsData';

interface ITitleProps {
  title: string;
  id: string;
  token: String;
}

export function Title({ title, id, token }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleClick = () => {
    setIsModalOpened(!isModalOpened);

    console.log(42);
  };

  return (
    <h2 className={styles.title}>
      <a href='#post-url' className={styles.postLink} onClick={handleClick}>
        {title}
      </a>
      {isModalOpened && (
        <Post
          title={title}
          onClose={() => setIsModalOpened(false)}
          id={id}
          token={token}
        />
      )}
    </h2>
  );
}
