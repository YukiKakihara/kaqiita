import { GetContentQuery } from 'src/types/api';
import { BlogResponse } from 'src/types/blog';

export type Methods = {
  get: {
    query?: GetContentQuery;
    resBody: BlogResponse;
  };
};
