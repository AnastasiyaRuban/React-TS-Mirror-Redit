import React from 'react';
import styles from './button.css';

export interface IButtonProps {
  children: React.ReactNode | string;
  className?: string;
}

export function Button({ children, className }: IButtonProps) {
  return <button className={className}>{children}</button>;
}
