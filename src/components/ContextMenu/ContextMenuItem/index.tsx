import React from 'react';
import { MenuItem } from './ContextMenuItem.style';

interface ContextMenuItemProps {
  label: string;
  icon?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ label, icon, onClick }) => {
  return (
    <MenuItem onClick={onClick}>
      {icon && icon}
      {label}
    </MenuItem>
  );
};

export default ContextMenuItem;
