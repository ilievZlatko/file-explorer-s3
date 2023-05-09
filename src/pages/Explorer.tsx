import React, { useState, useEffect } from 'react';
import { Directory, Sidebar } from '../components';
import { FileSystemItem } from '../interfaces/FileSystemItem';
import { getBucket } from '../services/ApiClient';

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

  return (
    <div>
      <Sidebar>{bucket && <Directory files={bucket} />}</Sidebar>
    </div>
  );
};

export default Explorer;
