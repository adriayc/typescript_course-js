// ENUM
// enum ServerResponseStatus {
//   SUCCESS,
//   ERROR,
// }
// enum ServerResponseStatus {
//   Success,
//   Error,
// }
enum ServerResponseStatus {
  Success = 200,
  // Error = 500,
  // Success = 'Success',
  Error = 'Error',
}
console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);
