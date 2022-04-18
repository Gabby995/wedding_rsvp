// Handle REQUEST Errors
export function handleError(errorData) {
  if (errorData.response) {
    // client received an error response (5xx, 4xx)
    throw new Error("Something's gone wrong... Please try again later");
  } else if (errorData.request) {
    // client never received a response, or request never left
    throw new Error("Request service ERROR");
  } else {
    throw new Error("Something Else ERROR");
    // anything else
  }
}
