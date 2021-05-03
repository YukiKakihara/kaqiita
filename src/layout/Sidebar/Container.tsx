import styled from '@emotion/styled';
import { Profile } from './Profile';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Profile />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: '#1f2123',
  borderRight: `1px solid #404244`,
  padding: 30,
});
