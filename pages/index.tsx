import styled from '@emotion/styled';
import { useRoot } from 'hooks/useRoot';
import { HeaderOne } from 'components/HeaderOne';
import { AboutBlog } from 'components/AboutBlog';

const Page: React.FC = () => {
  useRoot();

  return (
    <Wrapper>
      <HeaderOne text="ブログ記事一覧" />
      <AboutBlog />
    </Wrapper>
  );
};

const Wrapper = styled.div({});

const Body = styled.div({});

export default Page;
