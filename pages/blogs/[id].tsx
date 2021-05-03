import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useBlog } from 'hooks/blogs/[id]/useBlog';
import Custom404 from 'pages/404';
import { HeaderOne } from 'components/HeaderOne';
import { BlogBody } from 'components/BlogBody';

const Page: React.FC<any> = () => {
  const router = useRouter();
  const { id: blogId } = router.query;
  const {
    blog,
    blog: { body, title },
    isError,
  } = useBlog(blogId as string);

  if (router.isFallback || !blog) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Custom404 />;
  }

  return (
    <Wrapper>
      <HeaderOne text={title} />
      <BlogBody html={body} />
    </Wrapper>
  );
};

const Wrapper = styled.div();

export default Page;
