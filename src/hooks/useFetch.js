import axios from "../axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isActive = true;

    const fetchData = async function () {
      setLoading(true);
      try {
        const response = await axios.get(endpoint);
        if (response.status === 200 && isActive) {
          setData(response.data);
        }
      } catch (error) {
        throw error;
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isActive = false;
    };
  }, [endpoint]);
  return { loading, data };
};

export default useFetch;
