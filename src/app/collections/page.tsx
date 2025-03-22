/**
 * The Collections page component.
 *
 * It fetches the token id counter from the contract.
 * If the token id counter is 0 (false), it renders a message saying the collection is empty.
 * Otherwise, it renders a search box and a list of NFTs.
 */

import { getTokenIdCounter } from '@/actions/collections-actions';
import { Suspense } from 'react';
import FetchNFT from './fetch-nft';
import { NFTCardSkeleton } from './nft-card';
import SearchBox, { SearchNotFound } from './search-box';
import { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title: 'FunMint - Collections',
  description:
    'Explore a curated collection of unique NFTs minted by creators on FunMint. Discover digital art and own a piece of the blockchain.',
};

export default async function Page() {
  noStore();
  const tokenIdCounter = await getTokenIdCounter();

  if (!tokenIdCounter) {
    return (
      <div className="flex flex-col items-center mx-auto min-h-full mt-10 w-full max-w-[90%] lg:w-[90%] lg:max-w-7xl py-4">
        <h1>Collections is still empty. Comeback later or try to mint one.</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mx-auto min-h-full max-xl:mt-4 mt-14 w-full max-w-[90%] lg:w-[90%] lg:max-w-7xl py-4 gap-3">
      <div className="flex flex-col sm:flex-row mb-5 w-full sm:justify-between items-center">
        <h1 className="font-bold text-2xl">Collections</h1>
        <Suspense>
          <SearchBox />
        </Suspense>
      </div>
      <Suspense>
        <SearchNotFound />
      </Suspense>
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        id="nft-list"
      >
        {Array.from({ length: Number(tokenIdCounter) }).map((_, id, tokenIds) => (
          // Will sort the NFTs in latest to oldest
          <Suspense key={tokenIds.length - 1 - id} fallback={<NFTCardSkeleton />}>
            <FetchNFT tokenId={tokenIds.length - 1 - id} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
