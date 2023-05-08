import React from 'react';
import { Button, IButtonProps } from '../Button/Button';
import styles from './buttonwidthicon.css';

interface IButtonWidthIconProps extends IButtonProps {
  icon: string;
}

export function ButtonWidthIcon({
  icon,
  children,
  className,
}: IButtonWidthIconProps) {
  return (
    <Button className={className}>
      <img src={icon} alt={icon} />
      {children}
    </Button>
  );
}
