'use server';
/**
 * This file contains functions to interact with the Gallery contract.
 * The functions are exported and can be used by other parts of the application.
 * The functions are marked with the 'use server' directive to indicate that they should be executed on the server.
 */

import { contract } from '@/app/contract';
import { unstable_noStore as noStore } from 'next/cache';
import { readContract } from 'thirdweb';

export async function getTokenIdCounter() {
  /**
   * Get the current _tokenIdCounter value from the contract.
   * This value represents the number of NFTs minted by the contract.
   * @returns The current _tokenIdCounter value, or null if the contract method call fails.
   */
  noStore();
  return await readContract({ contract, method: 'function _tokenIdCounter() returns (uint256)' });
}

export async function getTokenURI(tokenId: number) {
  /**
   * Get the tokenURI for the specified tokenId from the contract.
   * This value represents the IPFS URL of the NFT's metadata.
   * @param tokenId The ID of the NFT to retrieve the tokenURI for.
   * @returns The tokenURI for the specified NFT, or null if the contract method call fails.
   */
  noStore();
  return await readContract({
    contract,
    method: 'function tokenURI(uint256 tokenId) returns (string)',
    params: [BigInt(tokenId)],
  });
}

export async function getNFTOwner(tokenId: number) {
  /**
   * Get the owner of the specified NFT from the contract.
   * This value represents the Ethereum address of the NFT's owner.
   * @param tokenId The ID of the NFT to retrieve the owner for.
   * @returns The owner of the specified NFT, or null if the contract method call fails.
   */
  noStore();
  return await readContract({
    contract,
    method: 'function ownerOf(uint256 tokenId) returns (address)',
    params: [BigInt(tokenId)], // Passing tokenId sebagai argumen
  });
}
