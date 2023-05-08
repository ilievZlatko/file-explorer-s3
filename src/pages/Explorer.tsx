import React from 'react';
import Directory from '../components/Directory';
import { Contents } from '../keys/data';
import { buildFileSystem } from '../utils/buildFileSystem';
import Sidebar from '../components/Sidebar';

const Explorer = () => {
  return (
    <div>
      <Sidebar>
        <Directory files={buildFileSystem(Contents)} />
      </Sidebar>
    </div>
  );
};

export default Explorer;
