import styled from '@emotion/styled';
import { Colors } from 'constants/Colors';
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
  backgroundColor: Colors.sidebarBackground,
  borderRight: `1px solid ${Colors.border}`,
  padding: 30,
});
