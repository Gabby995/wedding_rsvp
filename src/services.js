import axios from "axios";
import { handleError } from "./ErrorService.js";

// Common headers for requests
function headers() {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return headers;
}
// Call GET request. Pass URL
export async function GETCallHelper(url) {
  try {
    const response = await axios.get(url, headers());
    return response;
  } catch (err) {
    handleError(err);
  }
}
// Send POST request. Pass, URL, DATA
export async function POSTCallHelper(url, data) {
  try {
    const response = await axios.post(url, data, headers());
    return response;
  } catch (err) {
    handleError(err);
  }
}
