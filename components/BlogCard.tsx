import styled from '@emotion/styled';
import { BlogResponse as Blog } from 'types/blog';
import { formattedDate } from 'utils/formattedDate';
import { Colors } from 'constants/Colors';
import { ResponsiveImage } from './ResponsiveImage';

interface Props {
  blog: Blog;
  className?: string;
}

export const BlogCard: React.FC<Props> = ({ blog, className }) => {
  const {
    id,
    openAt,
    title,
    summary,
    thumbnail: { url },
  } = blog;

  const onClick = (): void => {
    window.location.href = `/blogs/${id}`;
  };

  return (
    <Wrapper className={className} onClick={onClick}>
      {url && (
        <WrappedResponsiveImage
          alt={title}
          aspectRatio={1}
          imageBorderRadius={10}
          src={url}
        />
      )}
      <Title>
        <a href={`/blogs/${id}`}>{title}</a>
      </Title>
      <OpenAt>{formattedDate(openAt)}</OpenAt>
      <Summary>{summary}</Summary>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  border: `2px solid ${Colors.border}`,
  borderRadius: 10,
  cursor: 'pointer',
  padding: 10,
});

const WrappedResponsiveImage = styled(ResponsiveImage)({
  margin: '0 auto 10px',
  maxWidth: 300,
  width: '90%',
});

const Title = styled.div({
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 5,
});

const Summary = styled.div({
  opacity: 0.6,
});

const OpenAt = styled.div({
  fontSize: 12,
  marginBottom: 5,
  opacity: 0.6,
});
