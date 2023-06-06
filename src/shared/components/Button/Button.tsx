import React from 'react';
import styles from './button.css';

export interface IButtonProps {
  children: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: IButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
