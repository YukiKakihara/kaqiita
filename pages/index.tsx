import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { client } from 'utils/api';
import { BlogResponse as Blog, BlogListResponse } from 'types/blog';
import { BlogIndex } from 'components/BlogIndex';
import { AboutBlog } from 'components/AboutBlog';

interface Props {
  blogs: Blog[];
}

const Page: React.FC<Props> = ({ blogs }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      {blogs && <BlogIndex blogs={blogs} />}
      <AboutBlog />
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.MICRO_CMS_API_KEY },
  };
  const blogs = await client.v1.blogs
    .$get()
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
