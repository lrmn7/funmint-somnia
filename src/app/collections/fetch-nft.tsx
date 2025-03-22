/**
 * Fetch the NFT metadata by tokenId.
 */

import { getTokenURI } from '@/actions/gallery-actions';
import { unstable_noStore as noStore } from 'next/cache';
import { ipfsToHttp } from '@/lib/utils';
import NFTCard from './nft-card';

export default async function FetchNFT({ tokenId }: { tokenId: number }) {
  /**
   * Fetch the NFT metadata URI from the contract.
   */
  noStore();
  const tokenURI = await getTokenURI(tokenId);

  /**
   * Initialize the NFT metadata object.
   */
  let nft: Record<string, string> = {};

  /**
   * If the token URI does not start with 'ipfs://', return null.
   * This is a sanity check to prevent fetching non-ipfs URLs.
   */
  if (!tokenURI.startsWith('ipfs://')) return;

  /**
   * Fetch the NFT metadata from IPFS.
   */
  const req = await fetch(ipfsToHttp(tokenURI));

  /**
   * Try to parse the response as JSON and assign it to the NFT metadata object.
   * If the parsing fails, log the error and return null.
   */
  try {
    nft = await req.json();
  } catch (error) {
    console.error(error);
    return;
  }

  /**
   * Return the NFT card component with the NFT metadata and tokenId as props.
   */
  return <NFTCard {...{ nft, tokenId }} />;
}
