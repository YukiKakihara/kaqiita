import { useState } from 'react';

export const useRoot = (): [number, () => void] => {
  const [page, setPage] = useState<number>(1);

  const nextPage = (): void => {
    setPage((prevState) => prevState + 1);
  };

  return [page, nextPage];
};
