/**
 * The MintNft component is the second step of the minting process.
 * It displays the uploaded image and the form to enter the NFT's name, description, and external URL.
 * Name and description input are required, but external URL is optional.
 */

'use client';

import usePreviousFileURI from '@/hooks/usePreviousFileURI';
import { ipfsToHttp } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from 'lucide-react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import FormMintNFT from './form-mint-nft';
import DialogStartOver from './dialog-start-over';
import { mintFormSchema } from './form-schema';

export default function MintNft() {
  const { getPreviousFileURI } = usePreviousFileURI();
  const form = useForm<z.infer<typeof mintFormSchema>>({
    /**
     * Resolver is used to validate the form data using zod.
     * The default values are set to empty strings.
     */
    resolver: zodResolver(mintFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const uploadedImage = getPreviousFileURI();

  return (
    <div className="flex max-md:flex-col w-full h-fit gap-6">
      <div className="w-1/2 max-md:w-full max-md:aspect-square rounded-lg border border-zinc-300 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-5 left-5 text-blue-500 text-xs flex items-center gap-2 p-1 rounded-full bg-blue-100 font-bold z-10">
          <Box strokeWidth={2} size={18} />
          <span>Uploaded to IPFS</span>
        </div>
        {uploadedImage && (
          <div className="group w-full h-full flex justify-center items-center">
            <DialogStartOver isFormSubmitting={form.formState.isSubmitting} />
            <Image
              src={ipfsToHttp(uploadedImage)}
              alt="Uploaded Image"
              width={1000}
              height={1000}
              className="w-full aspect-square object-contain"
            />
          </div>
        )}
      </div>
      <div className="w-1/2 max-md:w-full">
        <FormMintNFT {...{ form }} />
      </div>
    </div>
  );
}
