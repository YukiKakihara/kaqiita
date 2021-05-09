import { client } from 'utils/api';
import { BlogResponse as Blog, BlogListResponse } from 'types/blog';

export const getAllBlogs = async (): Promise<{ blogs: Blog[] }> => {
  const blogs = await client.v1.blogs
    .$get({ query: { limit: 1000 } })
    .then((res: BlogListResponse) => res.contents)
    .catch(() => null);

  return { blogs };
};
