import styled from '@emotion/styled';
import { mq } from 'utils/mediaQuery';
import { BlogResponse as Blog } from 'types/blog';
import { sortBlogsByNewArrival } from 'utils/sortBlogsByNewArrival';
import { HeaderOne } from 'components/HeaderOne';
import { Button } from 'components/Button';
import { BlogCard } from './BlogCard';

interface Props {
  blogs: Blog[];
  className?: string;
  nextPage: () => void;
  page: number;
}

export const BlogIndex: React.FC<Props> = ({
  blogs,
  className,
  nextPage,
  page,
}) => {
  const { displayingBlogs, isDisplayingNextButton } = blogPreprocessing(
    blogs,
    page
  );

  return (
    <Wrapper className={className}>
      <HeaderOne text="ブログ一覧" />
      <CardArea>
        {displayingBlogs.map((blog) => (
          <WrappedBlogCard key={blog.id} blog={blog} />
        ))}
      </CardArea>
      {isDisplayingNextButton && (
        <ButtonWrapper>
          <Button onClick={nextPage} text="もっと見る" />
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

const blogPreprocessing = (
  blogs: Blog[],
  page: number
): { displayingBlogs: Blog[]; isDisplayingNextButton: boolean } => {
  const perPage = 10;
  const displayingBlogCount = page * perPage;
  const displayingBlogs = sortBlogsByNewArrival(blogs).slice(
    0,
    displayingBlogCount
  );
  const allBlogCount = blogs.length;
  const isDisplayingNextButton = allBlogCount > displayingBlogCount;

  return { displayingBlogs, isDisplayingNextButton };
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

const ButtonWrapper = styled.div({
  margin: '20px auto 50px',
  maxWidth: 345,
});
