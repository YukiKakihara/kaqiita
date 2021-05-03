import styled from '@emotion/styled';

interface Props {
  className?: string;
  html: string;
}

export const BlogBody: React.FC<Props> = ({ className, html }) => {
  return (
    <Wrapper className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const Wrapper = styled.div();
