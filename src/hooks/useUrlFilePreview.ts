/**
 * Hook to get the preview URL for a given file
 *
 * @param file - The file to get the preview URL for
 * @returns The preview URL of the file
 */
import { useEffect, useState } from 'react';

export default function useUrlFilePreview(file: File) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  /**
   * Use effect to get the preview URL of the file
   */
  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return { previewUrl };
}
