import axios from "axios";

// create an axios instance with url
const service = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
});

export default service;
