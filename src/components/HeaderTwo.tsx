import styled from '@emotion/styled';
import { Colors } from '../constants/Colors';

interface Props {
  className?: string;
  text: string;
}

export const HeaderTwo: React.FC<Props> = ({ className, text }) => {
  return <Wrapper className={className}>{text}</Wrapper>;
};

const Wrapper = styled.h2({
  fontSize: 18,
  borderLeft: `4px solid ${Colors.headerTwo}`,
  padding: '5px 0 5px 10px',
});
