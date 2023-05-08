import React, { useState, useEffect } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  styles: {
    [key: string]: string;
  };
}

const noop = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  styles,
  onOpen = noop,
  onClose = noop,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  useEffect(() => {
    setIsDropdownOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
