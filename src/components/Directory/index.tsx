import React, { useState, useRef } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { VscNewFolder, VscNewFile, VscTrash } from 'react-icons/vsc';
import { BsFiletypeTsx } from 'react-icons/bs';
import { FileSystemItem } from '../../interfaces/FileSystemItem';
import { File, Folder } from './Directory.style';
import { Text } from '../Text';
import { useTheme } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector';
import { createNewFolder, setSelectedFile } from '../../store/slices/fileTreeSlice';
import { ContextMenu } from '../ContextMenu';
import { useClickAway } from '../../hooks/useClickAway';
import { deleteFolder } from '../../services/ApiClient';

interface DirectoryProps {
  files: FileSystemItem;
}

export const Directory: React.FC<DirectoryProps> = ({ files }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const contextMenuRef = useRef<HTMLUListElement>(null);
  const [isExpanded, toggleExpanded] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [currentPrefix, setCurrentPrefix] = useState<string | null>(null);
  const { selectedFile } = useAppSelector((state) => state.fileTree);

  const contextItems = [
    {
      label: 'New Folder',
      event: 'create-folder',
      icon: <VscNewFolder fontSize="18px" color={theme.colors.primary} />,
    },
    {
      label: 'New File',
      event: 'create-file',
      icon: <VscNewFile fontSize="18px" color={theme.colors.primary} />,
    },
    {
      label: 'Delete Folder/File',
      event: 'delete',
      icon: <VscTrash fontSize="18px" color={theme.colors.red} />,
    },
  ];

  const handleContextClick = (prefix: string, event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentPrefix(prefix);
    setShowContext(true);
  };

  const handleSelect = (event: string) => {
    if (currentPrefix) {
      if (event === 'delete') {
        deleteFolder({
          Bucket: sessionStorage.getItem('bucketName') as string,
          Key: currentPrefix,
        });
      }

      if (event === 'create-folder') {
        dispatch(
          createNewFolder({
            Bucket: sessionStorage.getItem('bucketName') as string,
            Key: 'NewFolder/',
          })
        );
      }

      if (event === 'create-file') {
      }
      setShowContext(false);
    }
  };

  useClickAway(contextMenuRef, () => {
    setShowContext(false);
  });

  if (files.type === 'folder') {
    return (
      <Folder onClick={() => setShowContext(false)}>
        {showContext && <ContextMenu ref={contextMenuRef} items={contextItems} onSelect={handleSelect} />}
        <Text
          onDoubleClick={() => dispatch(setSelectedFile(files.prefix))}
          onContextMenu={(e: React.MouseEvent) => handleContextClick(files.prefix, e)}
          color={theme.colors.primaryText}
          style={{
            backgroundColor: selectedFile === files.prefix ? theme.colors.lightBlue : 'transparent',
            padding: '4px',
            borderRadius: theme.spacing.sm,
            cursor: 'pointer',
          }}
        >
          {isExpanded ? (
            <FaFolderOpen
              color={theme.colors.primary}
              fontSize="24px"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleExpanded(!isExpanded)}
            />
          ) : (
            <FaFolder
              color={theme.colors.primary}
              fontSize="24px"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleExpanded(!isExpanded)}
            />
          )}{' '}
          {files.name}
        </Text>
        {isExpanded &&
          files?.items &&
          files?.items?.map((item: FileSystemItem) => <Directory files={item} key={item.prefix} />)}
      </Folder>
    );
  }

  return (
    <File>
      {showContext && <ContextMenu ref={contextMenuRef} items={[contextItems[2]]} onSelect={handleSelect} />}
      <Text
        onDoubleClick={() => dispatch(setSelectedFile(files.prefix))}
        onContextMenu={(e: React.MouseEvent) => handleContextClick(files.prefix, e)}
        color={theme.colors.primaryText}
        style={{
          backgroundColor: selectedFile === files.prefix ? theme.colors.lightBlue : 'transparent',
          padding: '4px',
          borderRadius: theme.spacing.sm,
          cursor: 'pointer',
          width: '100%',
        }}
      >
        <BsFiletypeTsx style={{ cursor: 'pointer' }} color={theme.colors.primary} fontSize="22px" /> {files.name}
      </Text>
    </File>
  );
};
