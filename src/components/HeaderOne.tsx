import styled from '@emotion/styled';
import { Colors } from '../constants/Colors';

interface Props {
  className?: string;
  text: string;
}

export const HeaderOne: React.FC<Props> = ({ className, text }) => {
  return <Wrapper className={className}>{text}</Wrapper>;
};

const Wrapper = styled.h1({
  fontSize: 24,
  borderBottom: `1px solid ${Colors.border}`,
  paddingBottom: 5,
});
