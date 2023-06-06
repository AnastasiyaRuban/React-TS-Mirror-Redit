import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// import { CommentForm } from './CommentForm/CommentForm';
import styles from './post.css';
import useCommentsData from '../../../hooks/useCommentsData';
import { tokenContext } from '../../context/tokenContext';

interface IPropsPost {
  title: String;
  onClose: () => void;
  id: String;
  token: String;
}

export function Post({ title, onClose, id, token }: IPropsPost) {
  const node = document.querySelector('#modal_root');
  const modal = useRef<HTMLDivElement>(null);

  const [postData, setPostData] = useState([]);

  // const token = useContext(tokenContext);
  const [data] = useCommentsData(id, token);

  setPostData(data);

  if (!node) return null;
  node.innerHTML = '';

  console.log(postData);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !modal.current?.contains(event.target)
      )
        onClose();
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.rootContainer}>
      <div className={styles.container} ref={modal}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          in omnis, alias quasi molestiae beatae. Praesentium, pariatur.
          Deserunt obcaecati itaque rem hic quos, reprehenderit voluptatem
          repudiandae tenetur, at veritatis nostrum? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatum in omnis, alias quasi
          molestiae beatae. Praesentium, pariatur. Deserunt obcaecati itaque rem
          hic quos, reprehenderit voluptatem repudiandae tenetur, at veritatis
          nostrum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatum in omnis, alias quasi molestiae beatae. Praesentium,
          pariatur. Deserunt obcaecati itaque rem hic quos, reprehenderit
          voluptatem repudiandae tenetur, at veritatis nostrum?
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          in omnis, alias quasi molestiae beatae. Praesentium, pariatur.
          Deserunt obcaecati itaque rem hic quos, reprehenderit voluptatem
          repudiandae tenetur, at veritatis nostrum? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptatum in omnis, alias quasi
          molestiae beatae. Praesentium, pariatur. Deserunt obcaecati itaque rem
          hic quos, reprehenderit voluptatem repudiandae tenetur, at veritatis
          nostrum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatum in omnis, alias quasi molestiae beatae. Praesentium,
          pariatur. Deserunt obcaecati itaque rem hic quos, reprehenderit
          voluptatem repudiandae tenetur, at veritatis nostrum?
        </p>

        <div>
          <form action=''>
            <textarea className={styles.textarea}></textarea>
            <button className={styles.btn}>Отправить</button>
          </form>
        </div>
        {/* <CommentForm /> */}

        <span>Комментарии:</span>
        <ul className={styles.commentList}>1111</ul>
        {/* <ul className={styles.commentList}>{listComment}</ul> */}
      </div>
    </div>,
    node
  );
}
