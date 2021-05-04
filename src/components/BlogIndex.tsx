import styled from '@emotion/styled';
import {
  BlogResponse as Blog,
} from 'src/types/blog';
import { HeaderOne } from 'components/HeaderOne';

interface Props {
  blogs: Blog[];
  className?: string;
}

export const BlogIndex: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <HeaderOne text="ブログ記事一覧" />
    </Wrapper>
  );
};

const Wrapper = styled.div({});
