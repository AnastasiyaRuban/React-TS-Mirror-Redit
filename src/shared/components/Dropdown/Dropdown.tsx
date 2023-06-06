import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as stylesdefault from './dropdown.css';

interface IDropdownProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  styles?: {
    [key: string]: string;
  };
  id: string;
}

const noop = () => {};

export function Dropdown({
  children,
  styles = stylesdefault,
  onClose = noop,
  id,
}: IDropdownProps) {
  const node = document.querySelector(`#dropdown_root_${id}`);

  if (!node) return null;
  node.innerHTML = '';

  return ReactDOM.createPortal(
    <div className={styles.list} onClick={onClose}>
      {children}
    </div>,
    node
  );
}
