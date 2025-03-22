/**
 * A component that displays a connect wallet button when the user is not connected
 * to the wallet, and a profile button when the user is connected.
 */

'use client';

import { client } from '@/app/client';
import { LoaderCircle } from 'lucide-react';
import { useActiveWallet, useAutoConnect } from 'thirdweb/react';
import { Button } from '../ui/button';
import ConnectWalletButton from './connect-wallet-button';
import ProfileButton from './profile-button';

export default function Auth() {
  const { isLoading } = useAutoConnect({ client });
  const wallet = useActiveWallet();

  const walletId = wallet?.id;
  const activeAccountAddress = wallet?.getAccount()?.address;

  /**
   * If the component is loading and the user is not connected to the wallet,
   * display a button with a loading animation.
   */
  if (isLoading && !activeAccountAddress) {
    return (
      <Button
        className="text-black hover:bg-zinc-200 bg-zinc-200 disabled:opacity-100 font-semibold rounded-full shadow-none min-w-[90px]"
        variant="secondary"
        disabled
      >
        <LoaderCircle className="animate-spin" />
      </Button>
    );
  }

  /**
   * If the component is not loading and the user is connected to the wallet,
   * display a profile button with the user's account address and wallet ID.
   */
  if (!isLoading && activeAccountAddress)
    return <ProfileButton {...{ activeAccountAddress, walletId }} />;

  /**
   * If the component is not loading and the user is not connected to the wallet,
   * display a connect wallet button with the `isDismissable` prop set to `true`.
   */
  return <ConnectWalletButton isDismissable />;
}
