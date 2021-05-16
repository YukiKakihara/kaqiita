import styled from '@emotion/styled';
import Head from 'next/head';
import { InquiryForm } from 'components/InquiryForm';

const Page: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="お問い合わせ" />
        <meta property="og:url" content={`${process.env.APP_HOST}/inquiry`} />
      </Head>
      <InquiryForm />
    </Wrapper>
  );
};

const Wrapper = styled.div({});

export default Page;
