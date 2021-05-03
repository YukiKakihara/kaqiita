import styled from '@emotion/styled';
import { Colors } from '../constants/Colors';
import { Sidebar } from './Sidebar';
import { Body } from './Body';

interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <WrappedSidebar />
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

const Main = styled.div({
  padding: 50,
});
