import styled from '@emotion/styled';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return <Wrapper className={className}>hoge</Wrapper>;
};

const Wrapper = styled.footer({});
