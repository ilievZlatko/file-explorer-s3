import React, { useState, useEffect } from 'react';
import { Directory, FileExplorer, Sidebar } from '../components';
import { FileSystemItem } from '../interfaces/FileSystemItem';
import { getBucket } from '../services/ApiClient';
import { buildFileSystem } from '../utils/buildFileSystem';
import { Contents } from '../keys/data';

const Explorer = () => {
  const [bucket, setBucket] = useState<FileSystemItem | null>(null);

  const fetchBucket = async () => {
    const resposne = await getBucket({
      Bucket: String(sessionStorage.getItem('bucket')),
    });

    setBucket(resposne);
  };

  useEffect(() => {
    fetchBucket();
  }, []);

  const files = buildFileSystem(Contents);

  return (
    <>
      <Sidebar>
        {/* {bucket && <Directory files={bucket} />} */}
        <Directory files={files} />
      </Sidebar>
      <FileExplorer />
    </>
  );
};

export default Explorer;
