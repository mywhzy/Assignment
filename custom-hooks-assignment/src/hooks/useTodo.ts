import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { checkNaN } from '../utils/checkNaN';

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export const useTodo = (id: number) => {
  const [data, setData] = useState<Todo>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | AxiosError>();

  const url = process.env.REACT_APP_API_URL || '';

  useEffect(() => {
    const err = checkNaN(id);
    if (err) {
      setError(err);
      setIsLoading(false);
      return;
    }
    axios.get<Todo>(url + id)
      .then(response => setData(response.data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};
