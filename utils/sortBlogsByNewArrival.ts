import { BlogResponse as Blog } from 'types/blog';

export const sortBlogsByNewArrival = (blogs: Blog[]) => {
  return blogs.sort((a, b) => {
    return new Date(a.openAt) <= new Date(b.openAt) ? 1 : -1;
  });
};
