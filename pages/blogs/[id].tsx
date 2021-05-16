import styled from '@emotion/styled';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllBlogs } from 'utils/getAllBlogs';
import { getBlog } from 'utils/getBlog';
import { BlogResponse } from 'types/blog';
import { formattedDate } from 'utils/formattedDate';
import { HeaderOne } from 'components/HeaderOne';
import { BlogBodyParser } from 'components/BlogBodyParser';

interface Props {
  blog: BlogResponse;
}

const Page: React.FC<Props> = ({ blog }) => {
  const router = useRouter();
  const {
    body,
    id,
    openAt,
    revisedAt,
    summary,
    thumbnail: { url: thumbnailUrl },
    title,
  } = blog;

  const blogUrl = `${process.env.APP_HOST}/blogs/${id}`;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Head>
        <title>{title} | Kaqiita</title>
        <meta name="description" content={summary} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={summary} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:image" content={thumbnailUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "http://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${blogUrl}"
              },
              "headline": "${title}",
              "image": "${thumbnailUrl}",
              "datePublished": "${new Date(openAt).toISOString()}",
              "dateModified": "${new Date(revisedAt).toISOString()}",
              "author": {
                "@type": "Person",
                "name": "Yuki Kakihara"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Kaqiita",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.APP_HOST}/favicon.ico"
                }
              }
            }`,
          }}
        ></script>
      </Head>
      <HeaderOne text={title} />
      {revisedAt && (
        <OpenAndRevisedDate>
          最終更新日：{formattedDate(revisedAt)}
        </OpenAndRevisedDate>
      )}
      {openAt && (
        <OpenAndRevisedDate>公開日：{formattedDate(openAt)}</OpenAndRevisedDate>
      )}
      <BlogBodyParser body={body} />
    </Wrapper>
  );
};

export const getStaticPaths = async (): Promise<{
  paths: string[];
  fallback: boolean;
}> => {
  const { blogs } = await getAllBlogs();
  const paths = blogs.map((blog) => `/blogs/${blog.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<{ props: Props }> => {
  const blogId = context.params.id as string;
  const { blog } = await getBlog(blogId);

  return {
    props: {
      blog,
    },
  };
};

const Wrapper = styled.div();

const OpenAndRevisedDate = styled.div({
  fontSize: 12,
  textAlign: 'right',
});

export default Page;
