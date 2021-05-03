import styled from '@emotion/styled';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <WrappedSidebar />
      <Body>
        <Main>{children}</Main>
        <Footer />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: '#2a2c2f',
  color: '#fafafa',
  display: 'flex',
  fontSize: 14,
});

const WrappedSidebar = styled(Sidebar)({
  flex: 1,
});

const Body = styled.div({
  flex: 8,
});

const Main = styled.div({
  padding: 50,
});
