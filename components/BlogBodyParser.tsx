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
  a: {
    ...textLinkStyle,
    wordBreak: 'break-all',
  },
  code: {
    backgroundColor: Colors.darkBackground,
    borderRadius: 2,
    padding: '3px 5px',
    wordBreak: 'break-all',
  },
  h2: headerTwoStyle,
  h3: headerThreeStyle,
  iframe: {
    maxWidth: 600,
    width: '100%',
  },
  img: {
    maxWidth: 600,
    width: '100%',
  },
  p: {
    lineHeight: baseLineHeight,
  },
  pre: {
    backgroundColor: Colors.darkBackground,
    borderRadius: 2,
    padding: '17px 15px',
    whiteSpace: 'pre-wrap',
  },
  ul: {
    paddingInlineStart: 20,
  },
});
