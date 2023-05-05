import { useEffect } from 'react';
import { ListObjectsV2Command, PutObjectCommand } from '@aws-sdk/client-s3';
import S3Service from './services/S3Service';
import { buildFileSystem } from './utils/buildFileSystem';

const client = S3Service.getInstance(
  { accessKeyId: 'AKIAZ5RCAHL6MCK3ISU3', secretAccessKey: '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' },
  'eu-central-1'
);

const params = {
  Bucket: 'interview-task-z-iliev',
};

function App() {
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

  const handleFolderCreate = async () => {
    const createFolderParams = {
      Bucket: 'interview-task-z-iliev',
      Key: 'test2/mock/mock2',
    };

    const command = new PutObjectCommand(createFolderParams);
    const response = await client.send(command);

    console.log(response);
  };

  return (
    <div className="App">
      App is working
      <button onClick={handleFolderCreate}>create folder</button>
    </div>
  );
}

export default App;
