import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Custom404 from 'pages/404';
import { useBlog } from 'hooks/blogs/[id]/useBlog';
import { HeaderOne } from 'components/HeaderOne';
import { BlogBodyParser } from 'components/BlogBodyParser';

const Page: React.FC = () => {
  const router = useRouter();
  const { id: blogId } = router.query;
  const {
    blog,
    blog: { body, openAt, revisedAt, summary, title },
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

const formattedDate = (datetimeStr: string): string => {
  if (!datetimeStr) return '';

  const date = new Date(datetimeStr);

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

const Wrapper = styled.div();

const OpenAndRevisedDate = styled.div({
  fontSize: 12,
  textAlign: 'right',
});

export default Page;
