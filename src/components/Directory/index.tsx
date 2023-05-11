import React, { useState, useRef } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { VscNewFolder, VscNewFile, VscTrash } from 'react-icons/vsc';
import { BsFiletypeTsx } from 'react-icons/bs';
import { FileSystemItem } from '../../interfaces/FileSystemItem';
import { File, Folder } from './Directory.style';
import { Text } from '../Text';
import { useTheme } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector';
import { createNewFolder, fetchBucket, setSelectedFile } from '../../store/slices/fileTreeSlice';
import { ContextMenu } from '../ContextMenu';
import { useClickAway } from '../../hooks/useClickAway';
import { deleteFolder } from '../../services/ApiClient';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { Button } from '../Button';

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
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileBody, setFileBody] = useState('');

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

  const handleSelect = async (event: string) => {
    if (currentPrefix) {
      if (event === 'delete') {
        setIsDeleteModalOpen(true);
      }

      if (event === 'create-folder') {
        setIsFolderModalOpen(true);
      }

      if (event === 'create-file') {
        setIsFileModalOpen(true);
      }

      setShowContext(false);
    }
  };

  const handleNewFolderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(
      createNewFolder({
        Bucket: sessionStorage.getItem('bucketName') as string,
        Key: `${currentPrefix}${folderName}/`,
      })
    );

    await dispatch(fetchBucket({ Bucket: String(sessionStorage.getItem('bucketName')) }));

    setFolderName('');
    setIsFolderModalOpen(false);
  };

  const handleNewFileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(
      createNewFolder({
        Bucket: sessionStorage.getItem('bucketName') as string,
        Key: `${currentPrefix}${fileName}`,
        Body: fileBody,
      })
    );

    await dispatch(fetchBucket({ Bucket: String(sessionStorage.getItem('bucketName')) }));

    setFileName('');
    setFileBody('');
    setIsFileModalOpen(false);
  };

  const handleDelete = async () => {
    if (currentPrefix) {
      await deleteFolder({
        Bucket: sessionStorage.getItem('bucketName') as string,
        Key: currentPrefix,
      });

      await dispatch(fetchBucket({ Bucket: String(sessionStorage.getItem('bucketName')) }));
    }

    setIsDeleteModalOpen(false);
  };

  useClickAway(contextMenuRef, () => {
    setShowContext(false);
  });

  if (files.type === 'folder') {
    return (
      <>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
          title="Delete File/Folder?"
          message={`This process cannot be reversed, and you will loose ${currentPrefix}. Do you want to continue?`}
        ></Modal>

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

        <Modal
          isOpen={isFileModalOpen}
          onClose={() => setIsFileModalOpen(false)}
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
            onSubmit={handleNewFileSubmit}
          >
            <Input
              fullWidth
              label="File name"
              required
              placeholder="New File.txt"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <Input
              fullWidth
              label="File body"
              required
              placeholder="Free text..."
              value={fileBody}
              onChange={(e) => setFileBody(e.target.value)}
            />
            <Button fullWidth>Save</Button>
          </form>
        </Modal>

        <Folder onClick={() => setShowContext(false)}>
          {showContext && <ContextMenu ref={contextMenuRef} items={contextItems} onSelect={handleSelect} />}
          <Text
            onDoubleClick={() => dispatch(setSelectedFile(files))}
            onContextMenu={(e: React.MouseEvent) => handleContextClick(files.prefix, e)}
            color={theme.colors.primaryText}
            style={{
              backgroundColor:
                selectedFile?.prefix === files.prefix && selectedFile?.name === files.name
                  ? theme.colors.lightBlue
                  : 'transparent',
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
      </>
    );
  }

  return (
    <File>
      {showContext && <ContextMenu ref={contextMenuRef} items={[contextItems[2]]} onSelect={handleSelect} />}
      <Text
        onDoubleClick={() => dispatch(setSelectedFile(files))}
        onContextMenu={(e: React.MouseEvent) => handleContextClick(files.prefix, e)}
        color={theme.colors.primaryText}
        style={{
          backgroundColor:
            selectedFile?.prefix === files.prefix && selectedFile?.name === files.name
              ? theme.colors.lightBlue
              : 'transparent',
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
