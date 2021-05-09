import { getAllBlogs } from './getAllBlogs';
import { formattedDate } from './formattedDate';

export const generateSitemapXml = async (): Promise<{ xml: string }> => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const { blogs } = await getAllBlogs();

  blogs.forEach((blog) => {
    const { id, revisedAt } = blog;

    xml += `
      <url>
        <loc>${process.env.APP_HOST}/blogs/${id}</loc>
        <lastmod>${formattedDate(revisedAt)}</lastmod>
      </url>
    `;
  });

  xml += `</urlset>`;

  return { xml };
};
