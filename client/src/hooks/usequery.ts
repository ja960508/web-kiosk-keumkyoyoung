import { useState, useEffect } from 'react';
const useQuery = async <TResponse, TError extends Error>(requestFunc: () => TResponse) => {
  const [data, setData] = useState<TResponse>();
  const [error, setError] = useState<TError>();
  const [isLoading, setIsLoading] = useState(true);

  const query = async () => {
    try {
      const response = await requestFunc();
      setData(response);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    query();
  }, []);

  return { data, error, isLoading, query };
};

export default useQuery;
