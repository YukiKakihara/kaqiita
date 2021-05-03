import { useEffect, useState } from 'react';
import type { BlogResponse } from 'types/blog';
import { client } from 'utils/api';

export const useBlog = (blogId: string): { blog: BlogResponse } => {
  const [blog, setBlog] = useState<BlogResponse>({});

  useEffect(() => {
    if (blogId) {
      client.v1.blogs
        ._id(blogId)
        .$get()
        .then((blogResponse: BlogResponse) => {
          setBlog(blogResponse);
        });
    }
  }, [blogId]);

  return { blog };
};
