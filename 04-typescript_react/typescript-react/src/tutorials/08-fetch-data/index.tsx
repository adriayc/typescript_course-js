import { useEffect, useState } from 'react';
// Types
import { type Tour, tourSchema } from './types';

const url = 'https://www.course-api.com/react-tours-project';

function Component() {
  // Tours
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch tours...');
        }
        const rawData: Tour[] = await response.json();
        // console.log(rawData);
        const result = tourSchema.array().safeParse(rawData);
        // console.log(result);
        if (!result.success) {
          console.log(result.error.message);
          throw new Error('Failed to parse tours');
        }
        setTours(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'there was an error...';
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    // Call method
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error: {isError}</h3>;
  }
  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Fetch Data</h2> */}
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}

export default Component;
