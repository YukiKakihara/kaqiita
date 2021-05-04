import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Custom404 from 'pages/404';
import { useRoot } from 'hooks/useRoot';
import { BlogIndex } from 'components/BlogIndex';
import { AboutBlog } from 'components/AboutBlog';

const Page: React.FC = () => {
  const router = useRouter();
  const { blogs, isError } = useRoot();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Custom404 />;
  }

  return (
    <Wrapper>
      {blogs && <BlogIndex blogs={blogs} />}
      <AboutBlog />
    </Wrapper>
  );
};

const Wrapper = styled.div({});

export default Page;
