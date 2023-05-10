import { useTheme } from 'styled-components';
import { FaFolder } from 'react-icons/fa';
import { BsFiletypeTsx } from 'react-icons/bs';
import { Text } from '../Text';
import { FileExplorerContainer, FileItem, ItemsContainer } from './FileExplorer.style';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector';
import { Empty } from '../Empty';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import { createNewFolder, fetchBucket, fetchFileContent } from '../../store/slices/fileTreeSlice';

export const FileExplorer = () => {
  const theme = useTheme();

  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [folderName, setFolderName] = useState('');

  const dispatch = useAppDispatch();
  const { selectedFile, selectedFileContent } = useAppSelector((state) => state.fileTree);

  const handleNewFolderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(
      createNewFolder({
        Bucket: sessionStorage.getItem('bucketName') as string,
        Key: `${selectedFile?.prefix}${folderName}/`,
      })
    );

    await dispatch(fetchBucket({ Bucket: String(sessionStorage.getItem('bucketName')) }));

    setFolderName('');
    setIsFolderModalOpen(false);
  };

  useEffect(() => {
    if (selectedFile?.type === 'file') {
      dispatch(
        fetchFileContent({
          Bucket: String(sessionStorage.getItem('bucketName')),
          Key: selectedFile?.prefix,
        })
      );
    }
  }, [selectedFile?.type, dispatch]);

  return (
    <FileExplorerContainer>
      <Modal
        isOpen={isFolderModalOpen}
        onClose={() => setIsFolderModalOpen(false)}
        alignTitle="center"
        layout="WindowModal"
        title="New Folder Name"
        subtitle="Enter name for your new folder below."
      >
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            width: '100%',
            paddingInline: '30px',
            paddingBottom: '24px',
          }}
          onSubmit={handleNewFolderSubmit}
        >
          <Input
            fullWidth
            label="Folder name"
            required
            placeholder="New folder..."
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <Button fullWidth>Save</Button>
        </form>
      </Modal>

      {selectedFile && (
        <Text variant="h1" tag="h1" style={{ paddingTop: '20px', paddingBottom: '48px', paddingLeft: '16px' }}>
          {selectedFile.name}
        </Text>
      )}
      {selectedFile && selectedFile?.items && selectedFile?.items?.length > 0 && (
        <ItemsContainer>
          {selectedFile.items.map((file) => (
            <FileItem key={file.prefix}>
              {file.type === 'folder' ? (
                <FaFolder
                  color={theme.colors.primary}
                  size="60%"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <BsFiletypeTsx style={{ cursor: 'pointer' }} color={theme.colors.primary} size="60%" />
              )}

              <Text variant="p2" tag="span" wordWrap="break-word">
                {file.name}
              </Text>
            </FileItem>
          ))}
        </ItemsContainer>
      )}

      {selectedFile && selectedFile?.items?.length === 0 && (
        <Empty
          message="This folder is empty"
          actionText="Create New Folder"
          onActionClick={() => setIsFolderModalOpen(true)}
        />
      )}

      {!selectedFile && (
        <Text variant="h3" tag="h3" style={{ margin: 'auto auto' }} color={theme.colors.grayScaleGray3}>
          Select file or folder
        </Text>
      )}

      {selectedFileContent && <Text>{selectedFileContent}</Text>}
    </FileExplorerContainer>
  );
};
