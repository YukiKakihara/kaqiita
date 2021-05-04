import styled from '@emotion/styled';
import Head from 'next/head';
import { Colors } from 'constants/Colors';
import { NotMobile } from 'components/ReactResponsive';
import { Sidebar } from './Sidebar';
import { Body } from './Body';

interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <Head>
        <title>Kaqiita</title>
        <meta
          name="description"
          content="新米Webエンジニアが適当なことを書いてます。温かく見守ってやってください。"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8428388094499729"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <NotMobile>
        <WrappedSidebar />
      </NotMobile>
      <WrappedBody>{children}</WrappedBody>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: Colors.baseBackground,
  color: Colors.text,
  display: 'flex',
  fontSize: 14,
});

const WrappedSidebar = styled(Sidebar)({
  flex: 1,
});

const WrappedBody = styled(Body)({
  flex: 8,
});
