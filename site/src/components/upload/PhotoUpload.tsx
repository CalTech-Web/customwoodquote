'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadedFile {
  fileKey: string;
  fileName: string;
  progress: number;
  error?: string;
}

interface PhotoUploadProps {
  onUploadComplete?: (fileKeys: string[]) => void;
  maxFiles?: number;
  maxSize?: number;
}

export default function PhotoUpload({
  onUploadComplete,
  maxFiles = 3,
  maxSize = 10 * 1024 * 1024, // 10MB
}: PhotoUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const uploadFile = async (file: File): Promise<UploadedFile> => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload/presigned-url', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to upload file');
      }

      const { fileKey } = await response.json();

      return {
        fileKey,
        fileName: file.name,
        progress: 100,
      };
    } catch (error) {
      return {
        fileKey: '',
        fileName: file.name,
        progress: 0,
        error: error instanceof Error ? error.message : 'Upload failed',
      };
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      setIsUploading(true);

      // Initialize file states
      const initialFiles: UploadedFile[] = acceptedFiles.map((f) => ({
        fileKey: '',
        fileName: f.name,
        progress: 0,
      }));
      setFiles(initialFiles);

      // Upload all files
      const uploadPromises = acceptedFiles.map(uploadFile);
      const results = await Promise.all(uploadPromises);

      setFiles(results);
      setIsUploading(false);

      // Notify parent component of successful uploads
      const successfulKeys = results
        .filter((r) => !r.error && r.fileKey)
        .map((r) => r.fileKey);

      if (onUploadComplete && successfulKeys.length > 0) {
        onUploadComplete(successfulKeys);
      }
    },
    [onUploadComplete]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
    },
    maxFiles,
    maxSize,
    disabled: isUploading,
  });

  // Check if running on mobile device
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        } ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} capture={isMobile ? 'environment' : undefined} />
        <div className="text-gray-600">
          {isDragActive ? (
            <>
              <svg className="w-10 h-10 mx-auto mb-3 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p>Drop the images here...</p>
            </>
          ) : (
            <>
              <svg className="w-10 h-10 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p>Drag & drop images here, or click to select</p>
              <p className="text-sm text-gray-500 mt-2">
                Max {maxFiles} files, {Math.round(maxSize / 1024 / 1024)}MB each
              </p>
              <p className="text-sm text-gray-500">Supports: JPEG, PNG, WebP</p>
            </>
          )}
        </div>
      </div>

      {fileRejections.length > 0 && (
        <div className="mt-4 text-red-600 text-sm">
          {fileRejections.map(({ file, errors }) => (
            <div key={file.name}>
              {file.name}:{' '}
              {errors.map((e) => (
                <span key={e.code}>{e.message} </span>
              ))}
            </div>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
              <div className="flex-1">
                <p className="text-sm font-medium">{file.fileName}</p>
                {file.error ? (
                  <p className="text-xs text-red-600">{file.error}</p>
                ) : (
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                )}
              </div>
              {file.progress === 100 && !file.error && (
                <span className="text-green-600 text-sm">✓</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
