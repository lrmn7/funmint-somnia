/**
 * The mintFormSchema defines the schema for the form data of the minting process.
 * It validates the name, description and externalUrl fields of the form.
 */
import { z } from 'zod';

/**
 * The mintFormSchema is a zod schema that defines the structure of the form data.
 * It has three fields: name, description and externalUrl.
 * The name and description fields are required and must be strings.
 * The externalUrl field is optional and must be a string.
 */
export const mintFormSchema = z.object({
  /**
   * The name field is a required string.
   * It must have a minimum length of 1.
   */
  name: z.string().min(1, 'Name is required!'),
  /**
   * The description field is a required string.
   * It must have a minimum length of 1.
   */
  description: z.string().min(1, 'Description is required!'),
  /**
   * The externalUrl field is an optional string.
   */
  externalUrl: z.string().optional(),
});

/**
 * The MintFormSchema is the type of the form data that is validated by the mintFormSchema.
 * It is inferred from the mintFormSchema.
 */
export type MintFormSchema = z.infer<typeof mintFormSchema>;
