import { useEffect, useState } from "react";

export const useFetchObject = <T>(url: string) => {
  const [isData, setIsData] = useState<T>(null!);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${url}`);

        if (!response.ok)
          throw new Error(`Connexion impossible à l'API ${response.status}`);

        const data = await response.json();

        setIsData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    FetchData();

    return () => {
      setIsData(null!);
      setIsLoading(true);
      setIsError(false);
    };
  }, [url]);

  return { isData, isLoading, isError };
};
