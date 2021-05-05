import styled from '@emotion/styled';
import { Colors } from 'constants/Colors';

interface Props {
  className?: string;
  title?: string;
}

export const Item: React.FC<Props> = ({ children, className, title }) => {
  return (
    <Wrapper className={className}>
      {title && <Title>{title}</Title>}
      <Body>{children}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  borderBottom: `1px solid ${Colors.border}`,
  marginBottom: 30,
  paddingBottom: 30,
});

const Title = styled.div({
  fontSize: 16,
  marginBottom: 10,
});

const Body = styled.div({});
