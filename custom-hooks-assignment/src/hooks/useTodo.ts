import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export type DataType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export const useTodo = (id: number) => {
  const [data, setData] = useState<undefined | DataType>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<undefined | AxiosError>(undefined);

  const url = process.env.REACT_APP_API_URL || '';

  useEffect(() => {
    axios.get(url + id)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      }).catch(error => {
      setIsLoading(false);
      setError(error);
    });
  }, []);

  return { data, isLoading, error };
};
