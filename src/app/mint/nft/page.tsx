'use client';

import { client } from '@/app/client';
import ConnectWalletButton from '@/components/navbar/connect-wallet-button';
import { useMintStepStatus } from '@/store/useMintStepStatus';
import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useActiveWallet, useAutoConnect } from 'thirdweb/react';
import MintDone from './(done)/mint-done';
import MintNft from './(mint)/mint-nft';
import MintSteps from './mint-step';
import NFTUploader from './(upload)/nft-uploader';
import usePreviousFileURI from '@/hooks/usePreviousFileURI';

/**
 * The Page component handles the minting process of NFTs.
 * It manages the connection to the wallet and the current step of the minting process.
 * It displays the appropriate UI based on the current step status.
 */
export default function Page() {
  // Auto-connects to the wallet using the thirdweb client
  const { isLoading } = useAutoConnect({ client });
  const wallet = useActiveWallet();
  const { stepStatus, setStepStatus } = useMintStepStatus();
  const { getPreviousFileURI } = usePreviousFileURI();

  useEffect(() => {
    // Check for previously uploaded file URI to set the correct minting step
    const previousFileURI = getPreviousFileURI();

    if (previousFileURI) {
      setStepStatus('Mint');
    } else {
      setStepStatus('Upload');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Display a loading spinner while connecting to the wallet
  if (isLoading || !stepStatus) {
    return (
      <div className="flex justify-center items-center min-h-full">
        <LoaderCircle className="animate-spin -mt-[20%]" size={28} />;
      </div>
    );
  }

  // Prompt the user to connect their wallet if not connected
  if (!wallet)
    return <ConnectWalletButton title="Connect your wallet first" hideClose hideTriggerButton />;

  // Render the appropriate component based on the current minting step
  return (
    <div className="flex flex-col items-center mx-auto min-h-full mt-10 w-full max-w-[90%] lg:w-[90%] lg:max-w-7xl py-4">
      <MintSteps />
      <div className="mt-12 w-full h-full flex justify-center">
        {stepStatus === 'Upload' && <NFTUploader />}
        {stepStatus === 'Mint' && <MintNft />}
        {stepStatus === 'Done' && <MintDone />}
      </div>
    </div>
  );
}
