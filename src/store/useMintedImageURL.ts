/**
 * Store for managing the minted image URL.
 *
 * The store provides a `mintedImageURL` property and a `setMintedImageURL` function
 * to update the value of the `mintedImageURL` property.
 */
import { create } from 'zustand';

/**
 * Interface for the MintedImageURLStore.
 *
 * The store provides a `mintedImageURL` property and a `setMintedImageURL` function
 * to update the value of the `mintedImageURL` property.
 */
interface MintedImageURLStore {
  /**
   * The URL of the minted image.
   */
  mintedImageURL: string | null;
  /**
   * Function to update the value of the `mintedImageURL` property.
   *
   * @param url - The URL of the minted image.
   */
  setMintedImageURL: (url: string) => void;
}

/**
 * Hook to access the MintedImageURLStore.
 *
 * The hook returns an object with the `mintedImageURL` property and the `setMintedImageURL` function.
 */
export const useMintedImageURL = create<MintedImageURLStore>((set) => ({
  mintedImageURL: null,
  setMintedImageURL: (url) => set({ mintedImageURL: url }),
}));
