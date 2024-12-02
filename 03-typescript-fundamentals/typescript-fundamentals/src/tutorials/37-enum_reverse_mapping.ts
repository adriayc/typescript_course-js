// ENUM - REVERSE MAPPING
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
  // Success = 'Success',
  // Error = 'Error',
}

// Show values (If the value is number)
Object.values(ServerResponseStatus).forEach((value) => {
  // console.log(value); // Output: Success Error 200 500 (Key and value, if the value is number)
  // Filter only the value (number)
  if (typeof value === 'number') {
    console.log(value);
  }
});

console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    // result: ServerResponseStatus.Success,
    result: 200, // Allowed if value is number
    // result: 'Success', // Error, not allowed if value is string
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);
