import React from 'react';
import { SidebarContainer } from './Sidebar.style';

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default Sidebar;
