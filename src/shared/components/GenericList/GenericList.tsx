import React from 'react';
import styles from './genericlist.css';

export interface IItem {
  id: string;
  text: string | React.ReactNode;
  onClick?: (id: string) => void;
  className: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick = noop, className, id, href }) => (
        <As
          key={id}
          onClick={() => onClick(id)}
          className={className}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}
