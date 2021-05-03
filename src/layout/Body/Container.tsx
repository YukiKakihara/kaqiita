import styled from '@emotion/styled';
import { Footer } from './Footer';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <SiteTitle>
        <a href="/">Kaqiita</a>
      </SiteTitle>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.footer({});

const SiteTitle = styled.div({
  fontSize: 36,
  padding: '30px 50px',
});

const Main = styled.div({
  padding: '0 50px 50px',
});
