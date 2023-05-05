import { S3Client } from '@aws-sdk/client-s3';

class S3Singleton {
  private static instance: S3Client;

  static getInstance(credentials: { accessKeyId: string; secretAccessKey: string }, region: string) {
    if (!S3Singleton.instance) {
      S3Singleton.instance = new S3Client({
        region,
        credentials,
      });
    }
    return S3Singleton.instance;
  }
}

export default S3Singleton;
