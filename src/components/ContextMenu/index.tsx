import React from 'react';
import { ContextMenuWrapper } from './ContextMenu.style';
import ContextMenuItem from './ContextMenuItem';

interface ContextMenuProps {
  items: Array<{
    label: string;
    event: string;
    icon?: React.ReactNode;
  }>;
  onSelect: (event: string) => void;
}

export const ContextMenu = React.forwardRef<HTMLUListElement, ContextMenuProps>((props, ref) => {
  const { items, onSelect } = props;

  const handleSelect = (event: string, e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    onSelect(event);
  };

  return (
    <ContextMenuWrapper ref={ref}>
      {items.map((item) => (
        <ContextMenuItem
          icon={item.icon}
          label={item.label}
          event={item.event}
          onClick={(event: string, e: React.MouseEvent<HTMLLIElement>) => handleSelect(event, e)}
          key={item.label}
        />
      ))}
    </ContextMenuWrapper>
  );
});
