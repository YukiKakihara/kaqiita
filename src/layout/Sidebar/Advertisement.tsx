import styled from '@emotion/styled';
import { isProduction } from 'utils/isProduction';
import { DmmBooksWidget } from 'components/DmmBooksWidget';

interface Props {
  className?: string;
  id: string;
}

export const Advertisement: React.FC<Props> = ({ className, id }) => {
  if (!isProduction) return <></>;

  return (
    <Wrapper className={className}>
      <DmmBooksWidget id={id} />
    </Wrapper>
  );
};

const Wrapper = styled.div({});
