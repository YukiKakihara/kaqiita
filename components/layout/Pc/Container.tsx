import styled from '@emotion/styled';
import { Sidebar } from './Sidebar';
import { Body } from '../Body';

export const Container: React.FC = ({ children }) => {
  return (
    <>
      <WrappedSidebar />
      <WrappedBody>{children}</WrappedBody>
    </>
  );
};

const WrappedSidebar = styled(Sidebar)({
  flex: 1,
});

const WrappedBody = styled(Body)({
  flex: 8,
});
