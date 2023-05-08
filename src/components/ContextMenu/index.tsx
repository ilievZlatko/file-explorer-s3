import React from 'react';
import { ContextMenuWrapper } from './ContextMenu.style';
import ContextMenuItem from './ContextMenuItem';

interface ContextMenuProps {
  items: Array<{
    label: string;
    icon?: React.ReactNode;
  }>;
  onSelect: () => void;
}

export const ContextMenu = React.forwardRef<HTMLUListElement, ContextMenuProps>((props, ref) => {
  const { items, onSelect } = props;

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    onSelect();
  };

  return (
    <ContextMenuWrapper ref={ref}>
      <ul></ul>
      {items.map((item) => (
        <ContextMenuItem icon={item.icon} label={item.label} onClick={handleSelect} key={item.label} />
      ))}
    </ContextMenuWrapper>
  );
});
