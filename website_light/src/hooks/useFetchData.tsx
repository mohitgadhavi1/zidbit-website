import { API_KEY } from "@/services";
import { useState, useEffect } from "react";

const useFetchData = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const resData = await response.json();

        const res = resData.length ? resData[0].data : resData.data[0];

        setData(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetchData;
