import { useEffect } from 'react';
import { Directory, FileExplorer, Sidebar } from '../components';
import { fetchBucket } from '../store/slices/fileTreeSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';

const Explorer = () => {
  const dispatch = useAppDispatch();
  const { files } = useAppSelector((state) => state.fileTree);

  useEffect(() => {
    dispatch(fetchBucket({ Bucket: String(sessionStorage.getItem('bucketName')) }));
  }, [dispatch]);

  return (
    <>
      <Sidebar>{files && <Directory files={files} />}</Sidebar>
      <FileExplorer />
    </>
  );
};

export default Explorer;
