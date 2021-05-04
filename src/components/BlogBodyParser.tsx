import styled from '@emotion/styled';
import { Colors } from 'constants/Colors';
import {
  baseLineHeight,
  headerTwoStyle,
  headerThreeStyle,
  textLinkStyle,
} from 'styles';

interface Props {
  body: string;
  className?: string;
}

export const BlogBodyParser: React.FC<Props> = ({ body, className }) => {
  return (
    <Wrapper className={className} dangerouslySetInnerHTML={{ __html: body }} />
  );
};

const Wrapper = styled.div({
  a: textLinkStyle,
  code: {
    backgroundColor: Colors.darkBackground,
    borderRadius: 2,
    padding: '3px 5px',
  },
  h2: headerTwoStyle,
  h3: headerThreeStyle,
  p: {
    lineHeight: baseLineHeight,
  },
  pre: {
    backgroundColor: Colors.darkBackground,
    borderRadius: 2,
    padding: '17px 15px',
  },
  ul: {
    paddingInlineStart: 20,
  },
});
