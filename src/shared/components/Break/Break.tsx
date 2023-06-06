import classNames from 'classnames';
import React from 'react';
import { IBreakProps } from '../../../types/interfaces';
import styles from './break.css';

export function Break(props: IBreakProps) {
  const {
    size,
    mobileSize,
    tabletSize,
    desctopSize,
    top = false,
    inline = false,
  } = props;
  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desctopSize}`]]: desctopSize },
        { [styles.inline]: inline },
        { [styles.top]: top }
      )}
    ></div>
  );
}
