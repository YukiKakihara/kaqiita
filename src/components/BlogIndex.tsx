import styled from '@emotion/styled';
import { mq } from 'lib/mediaQuery';
import { BlogResponse as Blog } from 'src/types/blog';
import { HeaderOne } from 'components/HeaderOne';
import { BlogCard } from './BlogCard';

interface Props {
  blogs: Blog[];
  className?: string;
}

export const BlogIndex: React.FC<Props> = ({ blogs, className }) => {
  return (
    <Wrapper className={className}>
      <HeaderOne text="ブログ記事一覧" />
      <CardArea>
        {blogs.map((blog) => (
          <WrappedBlogCard key={blog.id} blog={blog} />
        ))}
      </CardArea>
    </Wrapper>
  );
};

const Wrapper = styled.div({});

const CardArea = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const WrappedBlogCard = styled(BlogCard)(
  mq({
    marginBottom: 15,
    width: ['100%', '47.5%'],
  })
);
