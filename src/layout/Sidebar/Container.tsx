import styled from '@emotion/styled';
import { Colors } from 'constants/Colors';
import { Profile } from './Profile';
import { DmmBooksWidget } from './DmmBooksWidget';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Profile />
      {process.env.ENV === 'production' && <DmmBooksWidget />}
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: Colors.darkBackground,
  borderRight: `1px solid ${Colors.border}`,
  padding: 30,
});
