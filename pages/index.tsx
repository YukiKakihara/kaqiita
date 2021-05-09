import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRoot } from 'hooks/useRoot';
import { client } from 'utils/api';
import { BlogResponse as Blog, BlogListResponse } from 'types/blog';
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
      {blogs && <BlogIndex blogs={blogs} nextPage={nextPage} page={page} />}
      <AboutBlog />
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const blogs = await client.v1.blogs
    .$get({ query: { limit: 1000 } })
    .then((res: BlogListResponse) => res.contents)
    .catch(() => null);
  return {
    props: {
      blogs,
    },
  };
};

const Wrapper = styled.div({});

export default Page;
