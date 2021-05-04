import { GetListContentsQuery } from 'src/types/api';
import { BlogListResponse } from 'src/types/blog';

export type Methods = {
  get: {
    query?: GetListContentsQuery;
    resBody: BlogListResponse;
  };
};
