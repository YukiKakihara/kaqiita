import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useRoot } from 'hooks/useRoot';
import { getAllBlogs } from 'utils/getAllBlogs';
import { BlogResponse as Blog } from 'types/blog';
import { BlogIndex } from 'components/BlogIndex';
import { AboutBlog } from 'components/AboutBlog';

interface Props {
  blogs: Blog[];
}

const Page: React.FC<Props> = ({ blogs }) => {
  const router = useRouter();
  const [page, nextPage] = useRoot();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Head>
        <meta property="og:title" content="トップ" />
        <meta property="og:url" content={process.env.APP_HOST} />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      {blogs && <BlogIndex blogs={blogs} nextPage={nextPage} page={page} />}
      <AboutBlog />
    </Wrapper>
  );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const { blogs } = await getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};

const Wrapper = styled.div({});

export default Page;
