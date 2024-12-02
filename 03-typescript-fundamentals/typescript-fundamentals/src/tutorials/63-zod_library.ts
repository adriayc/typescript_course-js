// ZOD LIBRARY
import { z } from 'zod';

// Define schema
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
  // something: z.number(), // Other attribute (Show error)
});

// Type
type Tour = z.infer<typeof tourSchema>;

const url = 'https://www.course-api.com/react-tours-project';

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: status: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();

    // Safe parse (Zod)
    const result = tourSchema.array().safeParse(rawData);
    // console.log(result);
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }
    // console.log(result.data);
    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});
