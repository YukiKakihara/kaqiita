import styled from '@emotion/styled';
import Head from 'next/head';
import { Colors } from 'constants/Colors';
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics';
import { isProduction } from 'utils/isProduction';
import { Mobile, NotMobile } from 'components/ReactResponsive';
import { PcLayout } from './Pc';
import { SpLayout } from './Sp';

interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => {
  useGoogleAnalytics();

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
          </>
        )}
      </Head>
      <Mobile>
        <SpLayout>{children}</SpLayout>
      </Mobile>
      <NotMobile>
        <PcLayout>{children}</PcLayout>
      </NotMobile>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: Colors.baseBackground,
  color: Colors.text,
  display: 'flex',
  fontSize: 14,
});
