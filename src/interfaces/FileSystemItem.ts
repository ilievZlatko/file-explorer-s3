export interface FileSystemItem {
  name: string;
  type: 'file' | 'folder';
  prefix: string;
  items?: FileSystemItem[];
}
