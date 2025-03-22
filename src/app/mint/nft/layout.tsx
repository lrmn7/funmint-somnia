import { Metadata } from 'next';

/**
 * Metadata for the Mint page.
 * Defines the title and description for the page.
 */
export const metadata: Metadata = {
  title: 'FunMint - Somnia Network',
  description:
    'FunMint lets you create, mint, and own unique NFTs on Somnia Network Testnet. Bring your digital creations to life!',
};

/**
 * Layout component for the Mint page.
 * It renders the children components passed to it.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
