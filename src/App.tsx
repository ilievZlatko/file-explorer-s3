import { useEffect } from 'react';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import S3Service from './services/S3Service';
import { buildFileSystem } from './utils/buildFileSystem';
import Initial from './pages/Initial';
import Explorer from './pages/Explorer';
import { accessKeyId, bucketName, region, secretAccessKey } from './keys';

const client = S3Service.getInstance({ accessKeyId, secretAccessKey }, region);

const params = {
  Bucket: bucketName,
  Prefix: '',
};

const App = () => {
  const getBucket = async () => {
    const command = new ListObjectsV2Command(params);
    const { Contents } = await client.send(command);
    console.log(Contents);
    const contentKeys = Contents?.map((c) => c.Key);
    if (contentKeys && Array.isArray(contentKeys) && contentKeys.length > 0) {
      const fileSystem = buildFileSystem(contentKeys as string[]);
      console.log(fileSystem);
    }
  };

  useEffect(() => {
    getBucket();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
