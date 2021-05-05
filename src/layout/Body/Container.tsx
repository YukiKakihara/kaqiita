import styled from '@emotion/styled';
import { mq } from 'utils/mediaQuery';
import { isProduction } from 'utils/isProduction';
import { GoogleAdsense } from 'components/GoogleAdsense';
import { Footer } from './Footer';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <SiteTitle>
        <a href="/">
          <Big>Kaqiita</Big>
        </a>
        <br />
        <Sub>
          新米 Web
          エンジニアが適当なことを書いてます。温かく見守ってやってください。
        </Sub>
      </SiteTitle>
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
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.footer({});

const SiteTitle = styled.div(
  mq({
    maxWidth: 900,
    padding: [30, '30px 50px'],
  })
);

const Big = styled.span({
  fontSize: 36,
});

const Sub = styled.span({
  opacity: 0.6,
});

const Main = styled.div(
  mq({
    maxWidth: 900,
    minHeight: 800,
    padding: ['0 30px 30px', '0 50px 50px'],
  })
);
