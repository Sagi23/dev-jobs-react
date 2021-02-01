import axios from "axios";

export const getJobs = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`,
});
