import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Initial from './pages/Initial';
import Explorer from './pages/Explorer';
import { PrivateRoute } from './components';

// const client = S3Service.getInstance({ accessKeyId, secretAccessKey }, region);

// const params = {
//   Bucket: bucketName,
//   Prefix: '',
// };

const App = () => {
  // const getBucket = async () => {
  //   const command = new ListObjectsV2Command(params);
  //   const { Contents } = await client.send(command);
  //   const contentKeys = Contents?.map((c) => c.Key);

  //   if (contentKeys && Array.isArray(contentKeys) && contentKeys.length > 0) {
  //     const fileSystem = buildFileSystem(contentKeys as string[]);
  //     console.log(fileSystem);
  //   }
  // };

  // useEffect(() => {
  //   getBucket();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route
          path="/explorer"
          element={
            <PrivateRoute>
              <Explorer />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
