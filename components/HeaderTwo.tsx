import styled from '@emotion/styled';
import { headerTwoStyle } from 'styles';

interface Props {
  className?: string;
  text: string;
}

export const HeaderTwo: React.FC<Props> = ({ className, text }) => {
  return <Wrapper className={className}>{text}</Wrapper>;
};

const Wrapper = styled.h2(headerTwoStyle);
