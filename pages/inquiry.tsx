import styled from '@emotion/styled';
import Head from 'next/head';
import { HeaderOne } from 'components/HeaderOne';

const Page: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <HeaderOne text="お問い合わせ" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeAcO0gzL183Zxxs1LCmCIKKO5YFUZjZjeVe1kg8Lb5dKlpLg/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        読み込んでいます…
      </iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div({});

export default Page;
