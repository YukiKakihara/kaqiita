import styled from '@emotion/styled';
import Head from 'next/head';
import { Colors } from 'constants/Colors';
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics';
import { isProduction } from 'utils/isProduction';
import { siteName, siteDescription } from 'constants/SiteInfo';
import { GoogleAdsense } from 'components/GoogleAdsense';
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
        <title>{siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@KakkiiiiKyg" />
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
      {isProduction && (
        <>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8428388094499729"
            crossOrigin="anonymous"
          ></script>
          <GoogleAdsense
            client="ca-pub-8428388094499729"
            slot="4677958834"
            format="auto"
            responsive="true"
          />
        </>
      )}
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
