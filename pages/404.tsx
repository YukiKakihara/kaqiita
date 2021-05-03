import styled from '@emotion/styled';
import Head from 'next/head';
import { HeaderOne } from 'components/HeaderOne';

const Custom404: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <HeaderOne text="404 - ページが見つかりませんでした" />
      <Body>
        お探しのページは見つかりませんでした。
        <br />
        ページが削除または移動された可能性があります。
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div();

const Body = styled.div({});

export default Custom404;
