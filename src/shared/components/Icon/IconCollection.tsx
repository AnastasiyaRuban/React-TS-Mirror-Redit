import React from 'react';
import { EIcon } from '../../../types/enums';

import ArrowDownIcon from './IconCollection/ArrowDownIcon';
import ArrowUpIcon from './IconCollection/ArrowUpIcon';
import AvatarIcon from './IconCollection/AvatarIcon';
import CommentsIcon from './IconCollection/CommentsIcon';
import ComplainIcon from './IconCollection/ComplainIcon';
import HideIcon from './IconCollection/HideIcon';
import MenuIcon from './IconCollection/MenuIcon';
import SaveIcon from './IconCollection/SaveIcon';
import ShareIcon from './IconCollection/ShareIcon';

export const icons = {
  [EIcon.arrowDown]: <ArrowDownIcon />,
  [EIcon.arrowUp]: <ArrowUpIcon />,
  [EIcon.avatar]: <AvatarIcon />,
  [EIcon.comments]: <CommentsIcon />,
  [EIcon.complain]: <ComplainIcon />,
  [EIcon.hide]: <HideIcon />,
  [EIcon.menu]: <MenuIcon />,
  [EIcon.save]: <SaveIcon />,
  [EIcon.share]: <ShareIcon />,
};
