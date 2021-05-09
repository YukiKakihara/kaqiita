import { client } from 'utils/api';
import { BlogResponse } from 'types/blog';

export const getBlog = async (
  blogId: string
): Promise<{ blog: BlogResponse }> => {
  const blog = await client.v1.blogs
    ._id(blogId)
    .$get()
    .then((blogResponse: BlogResponse) => blogResponse)
    .catch(() => null);

  return { blog };
};
