import React from 'react';
import { Directory, Sidebar } from '../components';
import { Contents } from '../keys/data';
import { buildFileSystem } from '../utils/buildFileSystem';

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
