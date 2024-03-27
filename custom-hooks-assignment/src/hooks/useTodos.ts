import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Todo } from './useTodo';

export const useTodos = () => {
  const [data, setData] = useState<Todo[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();

  const url = process.env.REACT_APP_API_URL || '';

  useEffect(() => {
    axios.get<Todo[]>(url)
      .then(response => setData(response.data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};
