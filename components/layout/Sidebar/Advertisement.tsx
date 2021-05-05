import styled from '@emotion/styled';
import { isProduction } from 'utils/isProduction';
import { DmmBooksWidget } from 'components/DmmBooksWidget';
import { Item } from './Item';

interface Props {
  className?: string;
  id: string;
}

export const Advertisement: React.FC<Props> = ({ className, id }) => {
  if (!isProduction) return <></>;

  return (
    <Wrapper className={className}>
      <Item>
        <DmmBooksWidget id={id} />
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
