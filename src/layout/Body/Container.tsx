import styled from '@emotion/styled';
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
          新米Webエンジニアが適当なことを書いてます。温かく見守ってやってください。
        </Sub>
      </SiteTitle>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.footer({});

const SiteTitle = styled.div({
  padding: '30px 50px',
});

const Big = styled.span({
  fontSize: 36,
});

const Sub = styled.span({
  opacity: 0.6,
});

const Main = styled.div({
  minHeight: 800,
  padding: '0 50px 50px',
});
