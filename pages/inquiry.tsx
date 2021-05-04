import styled from '@emotion/styled';
import Head from 'next/head';
import { InquiryForm } from 'components/InquiryForm';

const Page: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <InquiryForm />
    </Wrapper>
  );
};

const Wrapper = styled.div({});

export default Page;
