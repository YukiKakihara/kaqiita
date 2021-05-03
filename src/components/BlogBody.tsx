import styled from '@emotion/styled';
import {
  baseLineHeight,
  headerTwoStyle,
  headerThreeStyle,
  textLinkStyle,
} from 'styles';

interface Props {
  className?: string;
  html: string;
}

export const BlogBody: React.FC<Props> = ({ className, html }) => {
  return (
    <Wrapper className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const Wrapper = styled.div({
  a: textLinkStyle,
  h2: headerTwoStyle,
  h3: headerThreeStyle,
  p: {
    lineHeight: baseLineHeight,
  },
});
