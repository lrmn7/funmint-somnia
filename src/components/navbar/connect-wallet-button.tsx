/**
 * A custom connect wallet button that allows users to connect their wallet
 * using Thirdweb's ConnectEmbed component.
 *
 * @param {object} props - The props passed to the component.
 * @param {string} [props.title=Connect wallet] - The title of the dialog.
 * @param {boolean} [props.isDismissable=false] - If true, the dialog can be dismissed by clicking outside the dialog.
 * @param {boolean} [props.hideClose=false] - If true, the close button will not be displayed.
 * @param {boolean} [props.hideTriggerButton=false] - If true, the trigger button will not be displayed.
 * @returns {JSX.Element} The custom connect wallet button.
 */

'use client';

import { client } from '@/app/client';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { ConnectEmbed, lightTheme } from 'thirdweb/react';
import { createWallet } from 'thirdweb/wallets';
import { Button } from '../ui/button';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';

const wallets = [
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  createWallet('me.rainbow'),
  createWallet('walletConnect'),
];
const customTheme = lightTheme({ colors: { borderColor: 'transparent' } });

type Props = {
  title?: string;
  isDismissable?: boolean;
  hideClose?: boolean;
  hideTriggerButton?: boolean;
};

export default function ConnectWalletButton({
  title = 'Connect wallet',
  isDismissable = false,
  hideClose = false,
  hideTriggerButton = false,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(hideTriggerButton);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} modal={true}>
      {!hideTriggerButton && (
        <DialogTrigger asChild>
<Button
  className="rounded-full transition-transform duration-300 hover:scale-105"
  variant="outline"
>
  Connect Wallet
</Button>
        </DialogTrigger>
      )}
      <DialogContent
        className="px-0 sm:max-w-[425px]"
        aria-describedby="Connect wallet"
        onInteractOutside={(e) => {
          e.preventDefault();
          if (isDismissable) setIsModalOpen(false);
        }}
        hideClose={hideClose}
      >
        <DialogHeader>
          <DialogTitle className="font-bold text-center">{title}</DialogTitle>
        </DialogHeader>
        <ConnectEmbed
          client={client}
          appMetadata={{
            name: 'FunMint',
            description: 'A website dedicated to creating and minting NFTs on the Somnia Network testnet.',
          }}
          wallets={wallets}
          theme={customTheme}
          style={{ width: '100%' }}
          showAllWallets={true}
          showThirdwebBranding={false}
          onConnect={() => setIsModalOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}