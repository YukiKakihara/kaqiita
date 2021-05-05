import { useEffect, useState } from 'react';
import {
  BlogResponse as Blog,
  BlogListResponse,
  initialBlogValue,
} from 'types/blog';
import { client } from 'utils/api';

export const useRoot = (): { blogs: Blog[]; isError: boolean } => {
  const [blogs, setBlogs] = useState<Blog[]>([initialBlogValue]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    client.v1.blogs
      .$get()
      .then((res: BlogListResponse) => {
        setIsError(false);
        setBlogs(res.contents);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return { blogs, isError };
};
