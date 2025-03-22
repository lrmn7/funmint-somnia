/**
 * A component that displays a profile image and address of the user.
 * When the image is clicked, a modal will open with the user's wallet details.
 * The image is a rounded rectangle with a white background and a black border.
 * The address is displayed as a string of the form "0x... ABCD".
 * The text is black and centered.
 * The component is wrapped with a memo to prevent unnecessary re-renders.
 */
import { client } from '@/app/client';
import Image from 'next/image';
import { memo } from 'react';
import { useWalletDetailsModal, useWalletImage } from 'thirdweb/react';
import { WalletId } from 'thirdweb/wallets';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

type Props = {
  activeAccountAddress?: string;
  walletId?: WalletId;
};

function ProfileButton({ activeAccountAddress, walletId }: Props) {
  const { data: walletImage } = useWalletImage(walletId);
  const detailsModal = useWalletDetailsModal();

  /**
   * Handle the click event of the image.
   */
  function handleClick() {
    detailsModal.open({ client, theme: 'light' });
  }

  return (
    <Button
      className="text-zinc-500 hover:bg-white bg-white font-semibold rounded-full shadow-none w-full outline outline-2 outline-zinc-200 max-[396px]:px-2"
      variant="secondary"
      onClick={handleClick}
    >
      {walletImage ? (
        <Image
          src={walletImage}
          alt="Wallet image"
          width={100}
          height={100}
          className="h-5 w-5 object-cover rounded-full"
        />
      ) : (
        <Skeleton className="h-5 w-5 rounded-full" />
      )}
      <p className="max-[396px]:hidden">
        {activeAccountAddress?.slice(0, 4)}...{activeAccountAddress?.slice(-3)}
      </p>
    </Button>
  );
}

export default memo(ProfileButton);
