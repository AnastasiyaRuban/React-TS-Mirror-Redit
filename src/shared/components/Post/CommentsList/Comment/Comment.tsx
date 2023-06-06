import React from 'react';
import styles from './comment.css';
import useCommentsData from '../../../../../hooks/useCommentsData';

export function Comment({ id }: { id: any }) {
  const [data] = useCommentsData(id);
  console.log(data);

  // const comment = data.data.children
  return (
    <div className={styles.comment}>
      {/* <span className={styles.commentAuthor}>{comment.author}</span>
      <p className={styles.commentText}>{comment.body}</p> */}
    </div>
  );
}
