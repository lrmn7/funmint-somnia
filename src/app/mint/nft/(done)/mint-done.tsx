/**
 * The MintDone component is the third step of the minting process.
 * It displays the minted NFT and a button to mint again.
 */
'use client';

import { Button } from '@/components/ui/button';
import { ipfsToHttp } from '@/lib/utils';
import { useMintedImageURL } from '@/store/useMintedImageURL';
import { useMintStepStatus } from '@/store/useMintStepStatus';
import { RotateCw } from 'lucide-react';
import Image from 'next/image';

export default function MintDone() {
  /**
   * Gets the minted image URL from the MintedImageURL store.
   * The mintedImageURL is the IPFS URL of the minted image.
   */
  const { mintedImageURL, setMintedImageURL } = useMintedImageURL();
  /**
   * Gets the setStepStatus function from the MintStepStatus store.
   * The setStepStatus function is used to set the step status to "Upload".
   */
  const { setStepStatus } = useMintStepStatus();

  return (
    <div className="w-full flex flex-col justify-center items-center gap-1">
      <h1 className="text-xl font-extrabold">Congratulation!</h1>
      <p className="text-sm text-zinc-400 font-semibold">
        You&apos;ve crystalized your art, it will be marked for so long time.
      </p>
      <div className="bg-zinc-200 shadow-xl rounded-xl w-full max-w-sm aspect-square overflow-hidden flex items-center justify-center mt-10 p-10">
        {mintedImageURL && (
          <Image
            src={ipfsToHttp(mintedImageURL)}
            alt="Minted NFT"
            width={1000}
            height={1000}
            className="w-full aspect-square object-contain"
          />
        )}
      </div>
      <Button
        className="rounded-full mt-10"
        onClick={() => {
          setStepStatus('Upload');
          setMintedImageURL('');
        }}
      >
        <RotateCw />
        <span>Mint Again</span>
      </Button>
    </div>
  );
}
