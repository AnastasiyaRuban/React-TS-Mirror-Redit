import React from 'react';
import { EColor } from 'types/enums';
import { ITextProps } from '../../../types/interfaces';
import classNames from 'classnames';
import styles from './text.css';

export default function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    color = EColor.black,
    size,
    mobileSize,
    desctopSize,
    tabletSize,
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desctopSize}`]]: desctopSize },
    styles[color]
  );
  return <As className={classes}>{children}</As>;
}
