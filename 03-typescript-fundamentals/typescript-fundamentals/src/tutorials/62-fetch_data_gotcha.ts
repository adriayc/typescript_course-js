// FETCH DATA - GOTCHA
type Tour = {
  id: string;
  name: string;
  image: string;
  info: string;
  price: string;
  something: boolean; // Other property
};

const url = 'https://www.course-api.com/react-tours-project';

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: status: ${response.status}`);
    }
    const data: Tour[] = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.something); // Output: undefined (Property not exit)
});
