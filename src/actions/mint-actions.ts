/**
 * Server-side code for minting an NFT.
 * This code is responsible for preparing the NFT metadata and uploading it to IPFS.
 * It is called by the minting process from the client.
 */
'use server';

import { contract } from '@/app/contract';
import { isValidUrl } from '@/lib/utils';
import { upload } from 'thirdweb/storage';

/**
 * Type definition for the NFT metadata.
 * @typedef {Object} MetadataERC721
 * @property {string} name - The name of the NFT.
 * @property {string} description - The description of the NFT.
 * @property {string} image - The image URL of the NFT. Must start with 'ipfs://' and be a valid URL.
 * @property {string} [externalUrl] - The external URL of the NFT.
 */
type MetadataERC721 = {
  name: string;
  description: string;
  image: string;
  externalUrl?: string;
};

/**
 * Function to create the NFT metadata.
 * It takes the name, description, image and external URL as parameters and creates the metadata.
 * It throws an error if the image URL is not valid.
 * @param {{ name: string; description: string; image: string; externalUrl?: string; }} metadata
 * @returns {MetadataERC721} The NFT metadata.
 */
function createMetadataERC721(metadata: MetadataERC721): MetadataERC721 {
  if (!metadata.image.startsWith('ipfs://')) {
    throw new Error("Image URL must start with 'ipfs://'");
  }

  const { name, description, image, externalUrl } = metadata;

  const isExternalUrlValid = externalUrl ? isValidUrl(externalUrl) : true;

  if (!isExternalUrlValid) {
    throw new Error('External url is not valid!');
  }

  return { name, description, image, externalUrl };
}

/**
 * Function to upload a file to IPFS.
 * It takes a FormData object as parameter and returns the IPFS URL of the uploaded file.
 * It throws an error if the file is not uploaded.
 * @returns {Promise<string>} The IPFS URL of the uploaded file.
 */
export async function uploadFileToIPFS(formData: FormData) {
  try {
    const file: File | null = formData.get('file') as File;

    if (!file) throw new Error('No file uploaded');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return await upload({
      client: contract.client,
      files: [buffer],
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(message);
    return message;
  }
}

/**
 * Function to upload a JSON object to IPFS.
 * It takes the JSON object as parameter and returns the IPFS URL of the uploaded object.
 * It throws an error if the object is not uploaded.
 * @param {Record<string, unknown>} json - The JSON object to upload.
 * @returns {Promise<string>} The IPFS URL of the uploaded object.
 */
async function uploadJsonToIPFS(json: Record<string, unknown>) {
  try {
    return await upload({
      client: contract.client,
      files: [json],
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(message);
    return message;
  }
}

/**
 * Function to prepare the NFT metadata and upload it to IPFS.
 * It takes the name, description, image and external URL as parameters and creates the metadata.
 * It throws an error if the image URL is not valid.
 * It then uploads the metadata to IPFS and returns the IPFS URL of the uploaded metadata.
 * It throws an error if the metadata is not uploaded.
 * @param {{ name: string; description: string; image: string; externalUrl?: string; }} metadata
 * @returns {Promise<string>} The IPFS URL of the uploaded metadata.
 */
export async function prepareMintNFT({ name, description, image, externalUrl }: MetadataERC721) {
  try {
    const metadata = createMetadataERC721({ name, description, image, externalUrl });

    return await uploadJsonToIPFS(metadata);
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return message;
  }
}
