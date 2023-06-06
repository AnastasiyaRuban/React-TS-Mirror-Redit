import React from 'react';
import { IIconProps } from '../../../types/interfaces';
import styles from './icon.css';
import { icons } from './IconCollection';

export function Icon({ name, className }: IIconProps) {
  return <div className={`icon-container ${className}`}>{icons[name]}</div>;
}
