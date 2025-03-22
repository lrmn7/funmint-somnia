/**
 * The NFTUploader component allows users to upload a file to IPFS
 * and saves the upload result to local storage. It also handles
 * the minting process by calling the mintNFT function when the
 * user clicks the "Mint" button.
 */

'use client';

import { uploadFileToIPFS } from '@/actions/mint-actions';
import { Button } from '@/components/ui/button';
import { FileInput, FileUploader, FileUploaderContent } from '@/components/ui/file-upload';
import useUrlFilePreview from '@/hooks/useUrlFilePreview';
import { cn } from '@/lib/utils';
import { useMintStepStatus } from '@/store/useMintStepStatus';
import { CloudUpload, FolderOpen, LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
export default function NFTUploader() {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { setStepStatus } = useMintStepStatus();
  const [files, setFiles] = useState<File[] | null>(null);

  /**
   * The dropZoneConfig object contains configuration options for the
   * FileUploader component. It specifies the accepted file types, the
   * maximum number of files that can be uploaded, and the maximum file
   * size.
   */
  const dropZoneConfig = {
    accept: {
      'image/svg+xml': ['.svg'],
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/gif': ['.gif'],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 20,
    multiple: false,
  };

  /**
   * The handleUpload function is called when the user clicks the "Mint"
   * button. It uploads the selected file to IPFS and saves the result to
   * local storage. If the upload is successful, it sets the step status to
   * "Mint" and sets the selected file to null.
   */
  const handleUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      setIsUploading(true);
      const fileURI = await uploadFileToIPFS(formData);
      localStorage.setItem('unfinished_ipfs_url', fileURI);
      setStepStatus('Mint');
    } catch {
      toast.error('Failed to upload the file. Please try again later.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <FileUploader
        reSelect
        value={files}
        onValueChange={setFiles}
        dropzoneOptions={dropZoneConfig}
        className="relative rounded-lg p-2 w-full max-w-md h-full"
      >
        <FileInput
          className={cn(
            'outline-dashed outline-2 outline-zinc-500 aspect-square max-w-md flex justify-center items-center rounded-b-none overflow-hidden',
            (files?.length || isUploading) && 'outline-transparent',
          )}
          disabled={isUploading}
        >
          <div className="flex items-center justify-center flex-col w-full h-full">
            {files?.length ? (
              <PreviewFile file={files[0]} {...{ isUploading }} />
            ) : (
              <UploadInstructions />
            )}
          </div>
        </FileInput>
        <FileUploaderContent></FileUploaderContent>
        <Button
          className="w-full rounded-t-none rounded-b-lg h-16 font-semibold bg-zinc-950 disabled:bg-zinc-600 "
          disabled={!files || isUploading}
          onClick={() => files?.length && handleUpload(files[0])}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </Button>
      </FileUploader>
    </>
  );
}

/**
 * The UploadInstructions component displays a message, prompting the user
 * to upload a file.
 */
function UploadInstructions() {
  return (
    <>
      <CloudUpload strokeWidth={2} size={32} className="text-gray-500 dark:text-gray-400" />
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, or GIF</p>
    </>
  );
}

/**
 * The PreviewFile component displays a preview of the uploaded file.
 */
function PreviewFile({ file, isUploading }: { file: File; isUploading: boolean }) {
  const { previewUrl } = useUrlFilePreview(file);

  if (!file || !previewUrl) return <></>;

  return (
    <div className="w-full h-full relative group flex justify-center items-center bg-zinc-200">
      {isUploading ? (
        <div className="bg-white/60 absolute w-full h-full flex justify-center items-center">
          <LoaderCircle className="animate-spin" size={40} />
        </div>
      ) : (
        <button className="flex flex-col justify-center items-center bg-black/60 absolute w-full h-full opacity-0 group-hover:opacity-100">
          <FolderOpen color="white" size={40} strokeWidth={2} />
          <p className="text-white font-semibold">Choose another file</p>
        </button>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={previewUrl}
        alt="Preview"
        className="w-full max-w-lg h-auto aspect-square object-contain"
      />
    </div>
  );
}
