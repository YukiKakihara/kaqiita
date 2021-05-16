import styled from '@emotion/styled';
import { mq } from 'utils/mediaQuery';
import { siteName, siteDescription } from 'constants/SiteInfo';
import { Footer } from './Footer';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <SiteTitle>
        <a href="/">
          <Big>{siteName}</Big>
        </a>
        <br />
        <Sub>{siteDescription}</Sub>
      </SiteTitle>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div({});

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
