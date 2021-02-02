import { useState } from "react";
import { getJobs } from "../api/githubJobs";

const useJobsData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const getData = async (description, fullTime, location, page) => {
    try {
      setIsLoading(true);
      const { data } = await getJobs.get(
        `description=${description}&page=${page}&location=${location}&full_time=${fullTime}&markdown=true`
      );
      setResults(data);
      window.scrollTo(0, 0);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert(
        "oops somthing went wrong (there was a problem reaching to the server) please try again later"
      );
    }
  };
  return {
    getData,
    results,
    isLoading,
    pageNum,
    setPageNum,
  };
};

export default useJobsData;
