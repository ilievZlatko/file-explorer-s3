import React from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Form, InitialPageContainer } from '../styles/pagesStyles/Initial.style';
import { Button, Input, Text } from '../components';
import { useTheme } from 'styled-components';

interface FormFields {
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  bucketName: string;
}

const validationSchema = z.object({
  accessKeyId: z.string().min(5, { message: 'accessKeyId must be at least 5 characters long' }),
  secretAccessKey: z.string().min(5, { message: 'secretAccessKey must be at least 5 characters long' }),
  region: z.string().min(5, { message: 'region must be at least 5 characters long' }),
  bucketName: z.string().min(5, { message: 'bucketName must be at least 5 characters long' }),
});

const Initial = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
    control,
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      accessKeyId: '',
      secretAccessKey: '',
      region: '',
      bucketName: '',
    },
  });

  const handleFormSubmit = (data: FormFields) => {
    sessionStorage.setItem('accessKeyId', data.accessKeyId);
    sessionStorage.setItem('secretAccessKey', data.secretAccessKey);
    sessionStorage.setItem('region', data.region);
    sessionStorage.setItem('bucketName', data.bucketName);

    navigate('/explorer');
  };

  return (
    <InitialPageContainer>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
          <Text variant="h3" tag="h3">
            S3 Credentials
          </Text>
          <Text variant="p2" tag="span" color={theme.colors.secondaryText}>
            Please enter your AWS S3 credentials to proceed.
          </Text>
        </div>
        <Controller
          name="accessKeyId"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Missing access key id',
            },
          }}
          render={({ field }) => (
            <Input
              fullWidth
              required
              label="Access Key Id"
              placeholder="Your S3 access key..."
              error={errors?.accessKeyId?.message}
              value={field.value}
              onChange={(event) => {
                const {
                  target: { value },
                } = event;

                setValue('accessKeyId', value);
                clearErrors();
              }}
            />
          )}
        />

        <Controller
          name="secretAccessKey"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Missing secret access key',
            },
          }}
          render={({ field }) => (
            <Input
              fullWidth
              required
              label="Secret Access Key"
              placeholder="Your S3 secret key..."
              error={errors?.secretAccessKey?.message}
              value={field.value}
              onChange={(event) => {
                const {
                  target: { value },
                } = event;

                setValue('secretAccessKey', value);
                clearErrors();
              }}
            />
          )}
        />

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '24px' }}>
          <Controller
            name="region"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Missing region',
              },
            }}
            render={({ field }) => (
              <Input
                fullWidth
                required
                label="Region"
                placeholder="Your S3 region..."
                error={errors?.region?.message}
                value={field.value}
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event;

                  setValue('region', value);
                  clearErrors();
                }}
              />
            )}
          />

          <Controller
            name="bucketName"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Missing S3 bucket name',
              },
            }}
            render={({ field }) => (
              <Input
                fullWidth
                required
                label="Bucket Name"
                placeholder="Your S3 bucket name..."
                error={errors?.bucketName?.message}
                value={field.value}
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event;

                  setValue('bucketName', value);
                  clearErrors();
                }}
              />
            )}
          />
        </div>
        <Button appearance="primary" label="Submit" type="submit" style={{ marginTop: '24px' }} />
      </Form>
    </InitialPageContainer>
  );
};

export default Initial;
