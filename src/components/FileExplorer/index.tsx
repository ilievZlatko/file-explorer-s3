import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { FaFolder } from 'react-icons/fa';
import { BsFiletypeTsx } from 'react-icons/bs';
import { Text } from '../Text';
import { FileExplorerContainer, FileItem, ItemsContainer } from './FileExplorer.style';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getBucket } from '../../services/ApiClient';

export const FileExplorer = () => {
  const theme = useTheme();
  const { selectedFile, files } = useAppSelector((state) => state.fileTree);

  const fetchBucket = async () => {
    const response = await getBucket({
      Bucket: sessionStorage.getItem('bucketName') as string,
      Delimiter: '/',
      Prefix: `${selectedFile}`,
    });
  };

  useEffect(() => {
    if (selectedFile) {
      fetchBucket();
    }
  }, [selectedFile]);

  return (
    <FileExplorerContainer>
      <Text variant="h1" tag="h1" style={{ paddingTop: '20px', paddingBottom: '48px', paddingLeft: '16px' }}>
        Folder One
      </Text>

      <ItemsContainer>
        {files &&
          files?.items?.[0]?.items &&
          files?.items?.[0]?.items?.map((file) => (
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
    </FileExplorerContainer>
  );
};
