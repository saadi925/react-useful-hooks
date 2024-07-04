import { useState, useEffect, useCallback } from 'react';

function useAsync<T>(asyncFunction: () => Promise<T>, dependencies: any[] = []) {
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = useCallback(() => {
    setLoading(true);
    asyncFunction()
      .then((response) => {
        setResult(response);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setResult(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  useEffect(() => {
    execute();
  }, [execute]);

  return { result, error, loading, execute };
}

export default useAsync;
