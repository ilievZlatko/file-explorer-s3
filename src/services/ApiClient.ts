import {
  ListObjectsV2Command,
  PutObjectCommand,
  ListObjectsV2CommandInput,
  PutObjectCommandInput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
} from '@aws-sdk/client-s3';
import S3Service from './S3Service';

const getClient = () => {
  const credentials = {
    secretAccessKey: sessionStorage.getItem('secretAccessKey') as string,
    accessKeyId: sessionStorage.getItem('accessKeyId') as string,
  };
  const region = sessionStorage.getItem('region');

  if (credentials && region) {
    return S3Service.getInstance(credentials, region);
  }

  return null;
};

export const getBucket = async (params: ListObjectsV2CommandInput) => {
  const client = getClient();

  if (client) {
    const command = new ListObjectsV2Command(params);
    const response = await client.send(command);

    return response;
  }

  throw new Error('No valid credentials provided for client.');
};

export const createFolder = async (params: PutObjectCommandInput) => {
  const client = getClient();

  if (client) {
    const command = new PutObjectCommand(params);
    const response = await client.send(command);
    return response;
  }

  throw new Error('No valid credentials provided for client.');
};

export const deleteFolder = async (params: DeleteObjectCommandInput) => {
  const client = getClient();

  if (client) {
    const command = new DeleteObjectCommand(params);
    const response = await client.send(command);
    return response;
  }

  throw new Error('No valid credentials provided for client.');
};
