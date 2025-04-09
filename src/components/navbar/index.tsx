/**
 * The navbar component.
 *
 * This component renders a navigation bar with a logo, a link to the
 * Collections, a button to explore Somnia, and an authentication component.
 * It also includes an alert banner notifying users that this page is for the
 * Somnia Network Testnet and that no sensitive data is stored.
 */
import funmintLogo from '@/assets/funmint.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import Auth from './auth';
import { FaXTwitter } from 'react-icons/fa6'; // icon X (Twitter)

export default async function Navbar() {
  return (
    <nav>
      {/* Alert Banner */}
      <div className="w-full bg-yellow-100 text-yellow-800 text-center py-2 px-4 text-sm">
        ⚠️ Built on <strong>Somnia Network (Testnet)</strong>. No real assets involved. Check
        <a
          href="https://github.com/lrmn7/funmint-somnia"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold ml-1 inline-block"
        >
          GitHub Repository
        </a>{' '}
        for security details.
      </div>

      {/* Main Navbar */}
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center w-full max-w-[90%] lg:w-[90%] lg:max-w-7xl py-4">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Image
                src={funmintLogo}
                alt="FunMint Logo"
                className="h-10 w-auto"
                placeholder="blur"
              />
            </Link>
            <Link
              href="/collections"
              className="font-semibold text-zinc-500 hover:text-black text-sm underline-on-hover after:bg-zinc-500"
            >
              Collections
            </Link>
          </div>
          <div className="flex gap-5">
                          {/* Button Sosmed X */}
  <Button
    variant="outline"
    className="rounded-full px-4 py-2 transition-transform duration-300 hover:scale-105"
    size="icon"
    asChild
  >
    <Link
      href="https://x.com/romanromannya"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaXTwitter className="w-4 h-4" />
    </Link>
  </Button>
            <Button
              variant="outline"
              className="rounded-full transition-transform duration-300 hover:scale-105 hidden sm:flex"
              asChild
            >
              <Link
                href="https://testnet.somnia.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Somnia
              </Link>
            </Button>
            <Auth />
          </div>
        </div>
      </div>
    </nav>
  );
}
