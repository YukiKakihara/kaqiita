import { ContentResponse } from './api';

export type TagResponse = ContentResponse<{
  name?: string;
}>;
