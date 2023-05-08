import React from 'react';
import { Button } from '../../../Button';
import menuIcon from '@assets/icons/menu.svg';
import hideIcon from '@assets/icons/hide.svg';
import complainIcon from '@assets/icons/complain.svg';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { generateRandomString } from '../../../../utils/generateRandomIndex';
import { IItem } from '../../../GenericList';
import { ButtonWidthIcon } from '../../../ButtonWidthIcon';

const menuMobile: IItem[] = [
  {
    id: generateRandomString(),
    text: (
      <ButtonWidthIcon
        className={styles.menuItemButton}
        icon={hideIcon}
        children={'Скрыть'}
      />
    ),
    className: styles.menuItem,
    As: 'li',
  },
  {
    id: generateRandomString(),
    text: (
      <ButtonWidthIcon
        className={styles.menuItemButton}
        icon={complainIcon}
        children={'Пожаловаться'}
      />
    ),
    className: styles.menuItem,
    As: 'li',
  },
];

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <Button
            className={styles.menuButton}
            children={<img src={menuIcon} alt='menu' />}
          />
        }
        styles={styles}
      >
        <ul className={styles.menuList}>
          <GenericList list={menuMobile} />
        </ul>
        <Button children={'Закрыть'} className={styles.listButton} />
      </Dropdown>
    </div>
  );
}
