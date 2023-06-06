import React, { useContext, useState } from 'react';
import { Post } from '../../../../Post/Post';
import styles from './title.css';
import { useToken } from '../../../../../../hooks/useToken';
import axios from 'axios';
import { tokenContext } from '../../../../../context/tokenContext';

interface ITitleProps {
  title: string;
  id: string;
}

export function Title({ title, id }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const token = useContext(tokenContext);

  const handleClick = () => {
    setIsModalOpened(true);
    // getPostData(id);
    console.log(42);
  };

  // const getPostData = (id: string) => {
  //   if (token && token.length > 0 && token !== 'undefined') {
  //     axios
  //       .get(`https://oauth.reddit.com/comments/${id}`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((res) => {
  //         setPostData(res.data);
  //       })
  //       .catch(() => console.log('error comments'));
  //   }
  // };

  return (
    <h2 className={styles.title}>
      <a href='#post-url' className={styles.postLink} onClick={handleClick}>
        {title}
      </a>
      {isModalOpened && (
        <Post title={title} onClose={() => setIsModalOpened(false)} id={id} />
      )}
    </h2>
  );
}
