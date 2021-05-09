import styled from '@emotion/styled';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllBlogs } from 'utils/getAllBlogs';
import { getAllBlogPaths } from 'utils/getAllBlogPaths';
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
  const { body, openAt, revisedAt, summary, title } = blog;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Head>
        <title>{title} | Kaqiita</title>
        <meta name="description" content={summary} />
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
