import styled from '@emotion/styled';
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
  h2: headerTwoStyle,
  h3: headerThreeStyle,
  p: {
    lineHeight: baseLineHeight,
  },
  ul: {
    paddingInlineStart: 20,
  }
});
