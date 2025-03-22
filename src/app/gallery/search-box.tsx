'use client';

import { Input } from '@/components/ui/input';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

/**
 * SearchBox component allows users to input search text
 * for filtering NFTs.
 */
export default function SearchBox() {
  const [search, setSearch] = useQueryState('search', { clearOnDefault: true });

  return (
    <Input
      placeholder="Search NFT..."
      type="text"
      className="sm:max-w-sm max-sm:mt-3 rounded-full border-2"
      value={search || ''}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

/**
 * SearchNotFound component displays a message when no NFTs
 * match the search query.
 */
export function SearchNotFound() {
  const [search] = useQueryState('search', { clearOnDefault: true });
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (!search) {
      setIsNotFound(false);
      return;
    }

    // Check if all items in the NFT list are hidden
    const children = document.querySelectorAll('#nft-list .hidden');
    const nftList = document.getElementById('nft-list');
    setIsNotFound(children.length === nftList?.children.length);
  }, [search]);

  if (!search) return <></>;

  if (search) {
    if (!isNotFound) return <></>;

    return (
      <p className="font-semibold text-zinc-400">
        Sorry, we couldn&apos;t find any NFT named &quot;{search}&quot;.
      </p>
    );
  }
}
