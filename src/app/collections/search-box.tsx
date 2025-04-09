'use client';

import { Input } from '@/components/ui/input';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

/**
 * SearchBox component — handles NFT search input & query sync.
 */
export default function SearchBox() {
  const [search, setSearch] = useQueryState('search', { clearOnDefault: true });

  return (
    <Input
      type="text"
      placeholder="Search NFT..."
      className="sm:max-w-sm max-sm:mt-3 rounded-full border-2"
      value={search || ''}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

/**
 * SearchNotFound component — displays message if search query returns no result.
 */
export function SearchNotFound() {
  const [search] = useQueryState('search', { clearOnDefault: true });
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!search) return setNotFound(false);

    const nftList = document.getElementById('nft-list');
    const hiddenItems = nftList?.querySelectorAll('.hidden');

    setNotFound(hiddenItems?.length === nftList?.children.length);
  }, [search]);

  if (!search || !notFound) return null;

  return (
    <p className="font-semibold text-zinc-400">
      Sorry, we couldn&apos;t find any NFT named &quot;{search}&quot;.
    </p>
  );
}
