import React from 'react';
import { useTheme } from 'styled-components';
import { FaFolder } from 'react-icons/fa';
import { BsFiletypeTsx } from 'react-icons/bs';
import { Text } from '../Text';
import { FileExplorerContainer, FileItem, ItemsContainer } from './FileExplorer.style';

export const FileExplorer = () => {
  const theme = useTheme();
  const files = [
    { name: 'Sub Folder 2', type: 'folder', prefix: 'test3/folder1/subfolder2/', items: [] },
    { name: 'Sub Folder 3', type: 'folder', prefix: 'test3/folder1/subfolder3/', items: [] },
    { name: 'Sub Folder 4', type: 'folder', prefix: 'test3/folder1/subfolder4/', items: [] },
    { name: 'Sub Folder 5', type: 'folder', prefix: 'test3/folder1/subfolder5/', items: [] },
    { name: 'Sub Folder 6', type: 'folder', prefix: 'test3/folder1/subfolder6/', items: [] },
    { name: 'Sub Folder 7', type: 'folder', prefix: 'test3/folder1/subfolder7/', items: [] },
    { name: 'File Name 1', type: 'file', prefix: 'test3/folder1/subfolder7/file-name1' },
  ];

  return (
    <FileExplorerContainer>
      <Text variant="h1" tag="h1" style={{ paddingTop: '20px', paddingBottom: '48px', paddingLeft: '16px' }}>
        Folder One
      </Text>

      <ItemsContainer>
        {files.map((file) => (
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
