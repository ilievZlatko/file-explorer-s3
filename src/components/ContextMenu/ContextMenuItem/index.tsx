import React from 'react';
import { MenuItem } from './ContextMenuItem.style';

interface ContextMenuItemProps {
  label: string;
  icon?: React.ReactNode;
  event: string;
  onClick: (event: string, e: React.MouseEvent<HTMLLIElement>) => void;
}

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ label, icon, event, onClick }) => {
  return (
    <MenuItem onClick={(e) => onClick(event, e)} data-testid="menu-item">
      {icon && icon}
      {label}
    </MenuItem>
  );
};

export default ContextMenuItem;
