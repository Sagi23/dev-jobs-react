import { useState } from "react";
import { getJobs } from "../api/githubJobs";

const useJobsData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const getData = async (description, fullTime, location, page) => {
    setIsLoading(true);
    const { data } = await getJobs.get(
      `description=${description}&page=${page}&location=${location}&full_time=${fullTime}&markdown=true`
    );
    if (results.length === 0) {
      setResults(data);
    } else {
      for (let i of data) {
        results.push(i);
      }
    }
    setIsLoading(false);
  };
  return {
    getData,
    results,
    setResults,
    isLoading,
    setIsLoading,
    pageNum,
    setPageNum,
  };
};

export default useJobsData;