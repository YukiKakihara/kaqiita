import { useEffect, useState } from 'react';
import { BlogResponse, initialBlogValue } from 'src/types/blog';
import { client } from 'utils/api';

export const useBlog = (
  blogId: string
): { blog: BlogResponse; isError: boolean } => {
  const [blog, setBlog] = useState<BlogResponse>(initialBlogValue);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (blogId) {
      client.v1.blogs
        ._id(blogId)
        .$get()
        .then((blogResponse: BlogResponse) => {
          setIsError(false);
          setBlog(blogResponse);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, [blogId]);

  return { blog, isError };
};
