import { z } from 'zod';

// Type Alias
// export type Tour = {
//   id: string;
//   name: string;
//   image: string;
//   info: string;
//   price: string;
// };

// Schema (Zod)
export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
  //   something: z.string(), // Other property
});

// Type
export type Tour = z.infer<typeof tourSchema>;
