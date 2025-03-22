"use client";
import { Button } from '@/components/ui/button';
import NFT1 from '@/assets/nft-1.png';
import NFT2 from '@/assets/nft-2.png';
import NFT3 from '@/assets/nft-3.png';
import NFT4 from '@/assets/nft-4.png';
import NFT5 from '@/assets/nft-5.png';
import NFT6 from '@/assets/nft-6.png';
import NFT7 from '@/assets/nft-7.png';
import NFT8 from '@/assets/nft-8.png';
import CarouselAutoscroll from '@/components/ui/carousel-autoscroll';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

/**
 * Using static import for images (NFT1 - NFT8)
 * This way images placeholder are automatically generated
 */

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="min-h-[50vh] max-lg:min-h-[47vh] w-full flex flex-col justify-center items-center gap-4 text-center max-sm:px-2">
        <h1 className="uppercase text-sm font-bold text-zinc-400">
          Explore, Create, and Collect Exclusive Digital Art NFTs.
        </h1>

        {/* Typewriter Effect */}
        <h2 className="text-4xl font-bold transition-opacity duration-500">
  <Typewriter
    words={[
      "Where Creativity Meets Blockchain",
      "Discover Unique Digital Artworks",
      "Own, Trade, and Showcase Your NFTs",
    ]}
    loop={0}
    cursor
    cursorStyle="|" 
    typeSpeed={100} 
    deleteSpeed={50} 
    delaySpeed={1500} 
  />
</h2>

        <Button variant="outline" className="rounded-full transition-transform duration-300 hover:scale-105" asChild>
          <Link href="/mint/nft">Pop a Mint</Link>
        </Button>
      </div>

      <div className="mt-[-40px] h-1/4 max-lg:flex-1">
        <CarouselAutoscroll buyerImages={[NFT1, NFT2, NFT3, NFT4, NFT5, NFT6, NFT7, NFT8]} />
        <CarouselAutoscroll
          buyerImages={[NFT3, NFT7, NFT1, NFT5, NFT2, NFT8, NFT4, NFT6]}
          isBackward
          className="lg:hidden mt-3"
        />
      </div>
    </div>
  );
}
