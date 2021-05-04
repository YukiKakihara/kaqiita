import { ContentResponse } from './api';

export type TagResponse = ContentResponse<{
  name?: string;
}>;

export const initialTagValue = {
  id: '',
  name: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
};
