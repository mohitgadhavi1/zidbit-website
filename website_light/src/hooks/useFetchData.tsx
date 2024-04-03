import { API_KEY } from "@/services";
import { useState, useEffect } from "react";

interface FetchDataResult<T> {
  loading: boolean;
  error: string | null;
  data: T[];
}

const useFetchData = <T,>(url: string): FetchDataResult<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Specify type here
  const [data, setData] = useState<T[]>([]);

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

        const res: T[] = resData.data;

        setData(res);
      } catch (error: any) {
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
