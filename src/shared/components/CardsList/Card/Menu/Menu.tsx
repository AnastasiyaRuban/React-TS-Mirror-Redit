import React, { useState } from 'react';
import { Button } from '../../../Button';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import {
  generateId,
  generateRandomString,
} from '../../../../utils/generateRandomIndex';
import { IItem } from '../../../GenericList';
import { Icon } from '../../../Icon';
import { EIcon } from '../../../../../types/enums';

const menuList: IItem[] = [
  {
    element: (
      <Button
        className={styles.menuItemButton}
        children={
          <>
            <Icon name={EIcon.comments} className={styles.avatarImage} />
            Комментарии
          </>
        }
      />
    ),
    className: `${styles.menuItem} ${styles.menuItemTablet}`,
    As: 'li' as const,
  },
  {
    element: (
      <Button
        className={styles.menuItemButton}
        children={
          <>
            <Icon name={EIcon.share} className={styles.avatarImage} />
            Поделиться
          </>
        }
      />
    ),
    className: `${styles.menuItem} ${styles.menuItemTablet}`,
    As: 'li' as const,
  },
  {
    element: (
      <Button
        className={styles.menuItemButton}
        children={
          <>
            <Icon name={EIcon.hide} className={styles.avatarImage} />
            Скрыть
          </>
        }
      />
    ),
    className: styles.menuItem,
    As: 'li' as const,
  },
  {
    element: (
      <Button
        className={styles.menuItemButton}
        children={
          <>
            <Icon name={EIcon.save} className={styles.avatarImage} />
            Сохранить
          </>
        }
      />
    ),
    className: `${styles.menuItem} ${styles.menuItemTablet}`,
    As: 'li' as const,
  },
  {
    element: (
      <Button
        className={styles.menuItemButton}
        children={
          <>
            <Icon name={EIcon.complain} className={styles.avatarImage} />
            Пожаловаться
          </>
        }
      />
    ),
    className: styles.menuItem,
    As: 'li' as const,
  },
].map(generateId);

interface IMenuProps {
  id: string;
}

export function Menu({ id }: IMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.menu}>
      <Button
        onClick={handleOpen}
        className={styles.menuButton}
        children={<Icon name={EIcon.menu} className={styles.menuIcon} />}
      />
      <div className={styles['dropdown_root']} id={`dropdown_root_${id}`}></div>
      {isDropdownOpen && (
        <Dropdown
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          id={id}
        >
          <ul className={styles.menuList}>
            <GenericList list={menuList} />
          </ul>
          <Button children={'Закрыть'} className={styles.listButton} />
        </Dropdown>
      )}
    </div>
  );
}
