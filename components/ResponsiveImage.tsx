import styled from '@emotion/styled';

interface Props {
  alt?: string;
  aspectRatio?: number;
  className?: string;
  imageBorderRadius?: number;
  src?: string;
}

export const ResponsiveImage: React.FC<Props> = ({
  alt,
  aspectRatio = 9 / 16,
  className,
  imageBorderRadius,
  src,
}) => {
  return (
    <Wrapper aspectRatio={aspectRatio} className={className}>
      <Image alt={alt} borderRadius={imageBorderRadius} src={src} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ aspectRatio: number }>(({ aspectRatio }) => ({
  '&::before': {
    content: '""',
    display: 'block',
    paddingTop: `${aspectRatio * 100}%`,
  },
  position: 'relative',
  width: '100%',
}));

const Image = styled.img<{ borderRadius: number }>(({ borderRadius }) => ({
  borderRadius,
  height: '100%',
  left: 0,
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  width: '100%',
}));
