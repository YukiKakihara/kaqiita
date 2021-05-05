import styled from '@emotion/styled';
import Head from 'next/head';
import { Colors } from 'constants/Colors';
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics';
import { NotMobile } from 'components/ReactResponsive';
import { Sidebar } from './Sidebar';
import { Body } from './Body';

interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => {
  useGoogleAnalytics();

  const isProduction = process.env.ENV === 'production';

  return (
    <Wrapper className={className}>
      <Head>
        <title>Kaqiita</title>
        <meta
          name="description"
          content="新米Webエンジニアが適当なことを書いてます。温かく見守ってやってください。"
        />
        <link rel="icon" href="/favicon.ico" />
        {isProduction && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-129782494-2"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                         function gtag(){dataLayer.push(arguments);}
                         gtag('js', new Date());
                         gtag('config', 'UA-129782494-2');`,
              }}
            ></script>
            <script
              className="dmm-widget-scripts"
              data-id="3f1c1987da72d3343eec456648cf2037"
              src="https://widget-view.dmm.com/js/placement.js"
            ></script>
          </>
        )}
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
