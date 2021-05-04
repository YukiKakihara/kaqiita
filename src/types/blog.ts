import { ContentResponse, ListContentsResponse } from './api';
import { Image, initialImageValue } from './image';
import { initialTagValue, TagResponse } from './tag';

export type BlogListResponse = ListContentsResponse<BlogResponse>;

export type BlogResponse = ContentResponse<{
  title?: string;
  summary?: string;
  body?: string;
  thumbnail?: Image;
  tags?: TagResponse[];
}>;

export const initialBlogValue = {
  id: '',
  title: '',
  summary: '',
  body: '',
  thumbnail: initialImageValue,
  tags: [initialTagValue],
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
};
