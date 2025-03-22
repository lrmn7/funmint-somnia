import { createThirdwebClient } from 'thirdweb';

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

if (!clientId) {
  throw new Error('Missing thirdweb client ID');
}

/**
 * Creates a thirdweb client for interacting with the thirdweb sdk.
 *
 * The client is created with the `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` environment
 * variable. This is a required variable that is used to configure the thirdweb
 * client.
 */
export const client = createThirdwebClient({
  clientId: clientId,
});
