import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge classnames.
 * @param inputs - Classnames to merge.
 * @returns The merged classnames.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to convert an IPFS URL to an HTTP URL.
 * @param ipfsUrl - The IPFS URL to convert.
 * @returns The converted HTTP URL.
 */
export function ipfsToHttp(ipfsUrl: string) {
  return ipfsUrl?.replace('ipfs://', 'https://ipfs.io/ipfs/');
}

/**
 * Utility function to parse a string to a number.
 * @param value - The string to parse.
 * @returns The parsed number or null if the string is not a number.
 */
export function parseToNumber(value: string) {
  const parsed = Number(value);
  return isNaN(parsed) ? null : parsed;
}

/**
 * Utility function to check if a string is a valid URL.
 * @param url - The string to check.
 * @returns true if the string is a valid URL, false otherwise.
 */
export function isValidUrl(url: string) {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  if (!urlPattern.test(url)) return false;

  return true;
}
