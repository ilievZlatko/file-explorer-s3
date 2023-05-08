import React from 'react';
import { SidebarContainer } from './Sidebar.style';

export const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};
