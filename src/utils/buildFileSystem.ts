import { bucketName } from '../keys';

interface FileSystemItem {
  name: string;
  type: 'file' | 'folder';
  prefix: string;
  items?: FileSystemItem[];
}

export const buildFileSystem = (files: string[]): FileSystemItem => {
  const root: FileSystemItem = { name: bucketName, prefix: '', type: 'folder' };

  files.reduce((currentLevel, path) => {
    const pathParts = path.split('/').filter((part) => !!part);
    let nextLevel: FileSystemItem | undefined = currentLevel;

    pathParts.forEach((part, i) => {
      const hasExtension = part.includes('.');
      const isLastPart = i === pathParts.length - 1;
      // make sure we only set type to be file if it has extension and if it is last item
      const type = hasExtension && isLastPart ? 'file' : 'folder';

      let item = nextLevel?.items?.find((item) => item.name === part && item.type === type);

      if (!item) {
        item = { name: part, type, prefix: path };

        if (type === 'folder') {
          item.items = [];
        }

        nextLevel!.items = nextLevel!.items || [];
        nextLevel!.items.push(item);
      }

      nextLevel = item;
      if (i === pathParts.length - 1 && type === 'file') {
        delete item.items;
      }
    });

    return currentLevel;
  }, root);

  return root;
};
