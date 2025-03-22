/**
 * A Next.js page that displays a single NFT card.
 * The component renders a card with an image, name, and description.
 * The image is loaded from IPFS using the `ipfsToHttp` utility function.
 * The component uses the `useQueryState` hook from `nuqs` to get the search query.
 * If the search query is not empty, the component will only render the NFT card if the NFT name matches the search query.
 */
'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn, ipfsToHttp } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useQueryState } from 'nuqs';

type Props = {
  nft: Record<string, string>;
  tokenId: number;
};

export default function NFTCard({ nft, tokenId }: Props) {
  const [search] = useQueryState('search', { clearOnDefault: true });

  const isShow = search ? nft.name.toLowerCase().includes(search.toLowerCase()) : true;

  return (
    <>
      <Link
        href={`/nft/${tokenId + 1}`}
        className={cn(
          'flex flex-col relative rounded-xl overflow-hidden bg-zinc-100 shadow-sm w-full gap-3 pb-3',
          !isShow && 'hidden',
        )}
      >
        <Image
          src={ipfsToHttp(nft.image)}
          alt={nft.name}
          width={800}
          height={800}
          className="w-full aspect-square object-cover absolute opacity-100 hover:opacity-0 transition-opacity ease-in-out duration-300"
        />
        <Image
          src={ipfsToHttp(nft.image)}
          alt={nft.name}
          width={800}
          height={800}
          className="w-full aspect-square object-contain bg-zinc-300 p-8"
        />
        <p className="w-[80%] mx-3 -mt-2 text-lg font-bold truncate">{nft.name}</p>
        <p className="w-[80%] mx-3 text-sm truncate">{nft.description}</p>
      </Link>
    </>
  );
}

/**
 * A skeleton component that renders a loading state for the NFT card.
 * The component renders a card with a skeleton image and two skeleton text elements.
 * The component is used to render a loading state for the NFT card while it is loading.
 */
export function NFTCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-zinc-100 shadow-sm w-full gap-3 pb-3">
      <Skeleton className="w-full aspect-square bg-zinc-300 rounded-b-none" />
      <Skeleton className="bg-zinc-300 w-[30%] h-5 mx-3" />
      <Skeleton className="bg-zinc-300 w-[50%] h-5 mx-3" />
    </div>
  );
}
