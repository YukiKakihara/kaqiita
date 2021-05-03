import styled from '@emotion/styled';

interface Props {
  className?: string;
  title: string;
}

export const Item: React.FC<Props> = ({ children, className, title }) => {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: '#1f2123',
  borderBottom: `1px solid #404244`,
  marginBottom: 30,
  paddingBottom: 30,
});

const Title = styled.div({
  fontSize: 16,
  marginBottom: 10,
});

const Body = styled.div({});
