// Handle REQUEST Errors
export function handleError(errorData) {
  if (errorData.response) {
    // client received an error response (5xx, 4xx)
    console.log("Response Service 4xx, 5xx:", errorData.response);
    throw new Error("Something's gone wrong... Please try again later");
  } else if (errorData.request) {
    // client never received a response, or request never left
    console.log("Request Service, no response:", errorData.request);
    throw new Error("Request service ERROR");
  } else {
    console.log("Something else Service");
    throw new Error("Something Else ERROR");
    // anything else
  }
}
