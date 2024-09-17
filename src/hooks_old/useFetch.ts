import { useEffect } from "react";
import { useState } from "react";

const useFetch = <TData>(url: string) => {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url).then((response) => {
      response
        .json()
        .then((data: TData) => {
          console.log(data);
          setLoading(false);
          setData(data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    });
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
