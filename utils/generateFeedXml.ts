import RSS from 'rss';
import { sortBlogsByNewArrival } from 'utils/sortBlogsByNewArrival';
import { siteName, siteDescription } from 'constants/SiteInfo';
import { getAllBlogs } from './getAllBlogs';

export const generateFeedXml = async (): Promise<{ xml: string }> => {
  const feed = new RSS({
    title: siteName,
    description: siteDescription,
    feed_url: `${process.env.APP_HOST}/feed`,
    site_url: process.env.APP_HOST,
    image_url: `${process.env.APP_HOST}/profile.png`,
    managingEditor: 'Yuki Kakihara',
    webMaster: 'Yuki Kakihara',
    copyright: 'Yuki Kakihara',
    ttl: 1440,
    language: 'ja',
  });

  const { blogs } = await getAllBlogs();

  sortBlogsByNewArrival(blogs).forEach((blog) => {
    const { id, openAt, summary, title } = blog;

    feed.item({
      title,
      description: summary,
      url: `${process.env.APP_HOST}/blogs/${id}`,
      guid: id,
      author: 'Yuki Kakihara',
      date: openAt,
    });
  });

  return { xml: feed.xml() };
};
