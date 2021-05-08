import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { client } from 'utils/api';
import { BlogResponse, BlogListResponse } from 'types/blog';
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

export const getStaticPaths = async () => {
  const blogs = await client.v1.blogs
    .$get()
    .then((res: BlogListResponse) => res.contents)
    .catch(() => null);
  const paths = blogs.map((blog) => `/blogs/${blog.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const blogId = context.params.id;
  const blog = await client.v1.blogs
    ._id(blogId)
    .$get()
    .then((blogResponse: BlogResponse) => blogResponse)
    .catch(() => null);
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
