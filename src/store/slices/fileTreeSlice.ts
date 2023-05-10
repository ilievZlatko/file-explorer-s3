import { ListObjectsV2CommandInput, PutObjectCommandInput } from '@aws-sdk/client-s3';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createFolder, getBucket } from '../../services/ApiClient';
import { FileSystemItem } from '../../interfaces/FileSystemItem';
import { buildFileSystem } from '../../utils/buildFileSystem';

export interface State {
  selectedFile: FileSystemItem | null;
  files: FileSystemItem | null;
  error: string | null;
  status: 'idle' | 'loading' | 'complete' | 'rejected';
}

export const initialState: State = {
  selectedFile: null,
  files: null,
  error: null,
  status: 'idle',
};

export const fetchBucket = createAsyncThunk('fileTree/fetchBucket', async (params: ListObjectsV2CommandInput) => {
  const response = await getBucket(params);
  return response;
});

export const createNewFolder = createAsyncThunk('fileTree/createFolder', async (params: PutObjectCommandInput) => {
  const response = await createFolder(params);
  return response;
});

export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {
    setSelectedFile(state, { payload }) {
      state.selectedFile = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBucket.pending, (state) => {
      state.error = null;
      state.status = 'loading';
    });

    builder.addCase(fetchBucket.fulfilled, (state, { payload }) => {
      state.files = buildFileSystem(payload.Contents?.map((item) => item.Key) as string[]);
      state.status = 'complete';
      state.error = null;
    });

    builder.addCase(fetchBucket.rejected, (state, { payload }) => {
      state.files = null;
      if (payload) state.error = String(payload) ?? 'Something went wrong';
      state.status = 'rejected';
    });

    builder.addCase(createNewFolder.pending, (state) => {
      state.error = null;
      state.status = 'loading';
    });

    builder.addCase(createNewFolder.fulfilled, (state, { payload }) => {
      state.error = null;
      state.status = 'complete';
    });

    builder.addCase(createNewFolder.rejected, (state, { payload }) => {
      if (payload) state.error = String(payload) ?? 'Something went wrong';
      state.status = 'rejected';
    });
  },
});

export const { setSelectedFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
