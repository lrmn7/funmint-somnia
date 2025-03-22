/**
 * Custom hook to manage the previous file URI stored in local storage.
 * Provides a function to retrieve the URI if it exists and is valid.
 */
export default function usePreviousFileURI() {
  /**
   * Retrieves the previous file URI from local storage if valid.
   * @returns {string | null} The valid IPFS URI or null if not found or invalid.
   */
  const getPreviousFileURI = (): string | null => {
    // Return null if running on the server side
    if (typeof window === 'undefined') return null;

    // Retrieve the URI from local storage
    const isPreviousFileURIExist = localStorage.getItem('unfinished_ipfs_url');

    // Return null if no URI is found
    if (!isPreviousFileURIExist) return null;

    // Validate that the URI starts with 'ipfs://'
    const isPreviousFileURIValid = isPreviousFileURIExist.startsWith('ipfs://');

    // If the URI is invalid, remove it from local storage and return null
    if (!isPreviousFileURIValid) {
      localStorage.removeItem('unfinished_ipfs_url');
      return null;
    }

    // Return the valid URI
    return isPreviousFileURIExist;
  };

  return { getPreviousFileURI };
}
